import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import type { Part } from './types'
;(async () => {
	const dirName = process.argv.slice(2)[0] ?? 'data-staging/json'
	const files = await readdir(dirName)

	let count = 0

	for (const file of files) {
		if (!file.endsWith('.json')) continue

		const raw = await readFile(join(dirName, file))
		const json: Part[] = await JSON.parse(raw.toString())

		count += json.length
	}

	console.log(count)
})()
