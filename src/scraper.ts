import { mkdir, writeFile } from 'fs/promises'
import type { Page } from 'puppeteer'
import { Cluster } from 'puppeteer-cluster'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import untypedMap from './serialization-map.json'
import {
	customSerializers,
	genericSerialize,
	serializeNumber,
} from './serializers'
import type { PartType, SerializationMap } from './types'

const BASE_URL = 'https://pcpartpicker.com/products'

const ALL_ENDPOINTS: PartType[] = [
	'cpu',
	'cpu-cooler',
	'motherboard',
	'memory',
	'internal-hard-drive',
	'video-card',
	'case',
	'power-supply',
	'os',
	'monitor',
	'sound-card',
	'wired-network-card',
	'wireless-network-card',
	'headphones',
	'keyboard',
	'mouse',
	'speakers',
	'webcam',
	'case-accessory',
	'case-fan',
	'fan-controller',
	'thermal-paste',
	'external-hard-drive',
	'optical-drive',
	'ups',
]

puppeteer.use(StealthPlugin())

const map = untypedMap as unknown as SerializationMap

const scrapeInParallel = async (endpoints: PartType[]) => {
	const cluster = await Cluster.launch({
		concurrency: Cluster.CONCURRENCY_PAGE,
		maxConcurrency: 5,
		timeout: 1000 * 60 * 20, // 20 minutes
		puppeteer,
		puppeteerOptions: {
			headless: false,
		},
	})

	await cluster.task(async ({ page, data: endpoint }) => {
		await page.setViewport({ width: 1920, height: 1080 })

		await scrape(endpoint, page)
	})

	cluster.queue('https://pcpartpicker.com', async ({ page, data }) => {
		await page.goto(data)
		await page.waitForSelector('nav')

		for (const endpoint of endpoints) {
			cluster.queue(endpoint)
		}
	})

	await cluster.idle()
	await cluster.close()
}

const scrape = async (endpoint: PartType, page: Page) => {
	await page.goto(`${BASE_URL}/${endpoint}`)

	const paginationEl = await page.waitForSelector('.pagination')

	if (!paginationEl) throw new Error(`[${endpoint}] pagination not found!`)

	const numPages = await paginationEl.$eval('li:last-child', (el) =>
		parseInt(el.innerText)
	)

	const products: Record<string, any>[] = []

	for (let currentPage = 1; currentPage <= numPages; currentPage++) {
		if (currentPage > 1) {
			await page.goto(`${BASE_URL}/${endpoint}/#page=${currentPage}`)
			await page.waitForNetworkIdle()
		}

		const productEls = await page.$$('.tr__product')

		for (const productEl of productEls) {
			const serialized: Record<string, any> = {}

			serialized['name'] = await productEl.$eval(
				'.td__name .td__nameWrapper > p',
				(p) => p.innerText
			)

			const priceText = await productEl.$eval(
				'.td__price',
				(td) => td.textContent
			)

			if (priceText == null || priceText.trim() === '')
				serialized['price'] = null
			else serialized['price'] = serializeNumber(priceText)

			const specs = await productEl.$$('td.td__spec')

			for (const spec of specs) {
				const specName = await spec.$eval('.specLabel', (l) =>
					(l as HTMLHeadingElement).innerText.trim()
				)

				const mapped = map[endpoint][specName]

				if (typeof mapped === 'undefined') {
					throw new Error(
						`[${endpoint}] No mapping found for spec "${specName}"`
					)
				}

				const [snakeSpecName, mappedSpecSerializationType] = mapped

				const specValue = await spec.evaluate((s) => s.innerText)

				if (specValue.trim() === '') {
					serialized[snakeSpecName] = null
				} else if (mappedSpecSerializationType === 'custom') {
					serialized[snakeSpecName] =
						customSerializers[endpoint]![snakeSpecName]!(specValue)
				} else {
					serialized[snakeSpecName] = genericSerialize(
						specValue,
						mappedSpecSerializationType
					)
				}
			}

			products.push(serialized)
		}
	}

	await mkdir('data-staging', { recursive: true })
	await writeFile(`data-staging/${endpoint}.json`, JSON.stringify(products))
}

const inputEndpoints = process.argv.slice(2)
const endpointsToScrape = inputEndpoints.length
	? (inputEndpoints as PartType[])
	: ALL_ENDPOINTS

scrapeInParallel(endpointsToScrape)
