import { mkdir, readFile, readdir, writeFile } from 'fs/promises'
import { join } from 'path'
import type { Part } from './types'

export const outputJsonLines = (parts: Part[]) =>
	parts.map((p) => JSON.stringify(p)).join('\n')

const serializeCsvValue = (value: any): string => {
	if (
		typeof value === 'string' &&
		(value.includes(',') || value.includes('"'))
	) {
		return `"${value.replaceAll('"', '""')}"`
	} else if (Array.isArray(value)) {
		return `"${value.map((v) => serializeCsvValue(v)).join(',')}"`
	}

	return value
}

export const outputCsv = (parts: Part[]) => {
	let csv = ''
	const keys = Object.keys(parts[0]!)

	csv += keys.join(',') + '\n'

	for (const part of parts) {
		csv += Object.values(part)
			.map((v) => serializeCsvValue(v))
			.join(',')

		csv += '\n'
	}

	return csv
}
;(async () => {
	const dirName = process.argv.slice(2)[0] ?? 'data-staging'
	const files = await readdir(join(dirName, 'json'))

	await mkdir(join(dirName, 'csv'))
	await mkdir(join(dirName, 'jsonl'))

	for (const file of files) {
		if (!file.endsWith('.json')) continue

		const raw = await readFile(join(dirName, 'json', file))
		const parts: Part[] = await JSON.parse(raw.toString())

		const jsonl = outputJsonLines(parts)
		await writeFile(
			join(dirName, 'jsonl', file.replace('.json', '.jsonl')),
			jsonl
		)

		const csv = outputCsv(parts)
		await writeFile(join(dirName, 'csv', file.replace('.json', '.csv')), csv)
	}
})()
