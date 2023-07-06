import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
;(async () => {
	const files = await readdir('data-staging')

	let count = 0

	for (const file of files) {
		const raw = await readFile(join('data-staging', file))
		const json: any[] = await JSON.parse(raw.toString())

		count += json.length
	}

	console.log(count)
})()
