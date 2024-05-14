# PC Part Dataset

A dataset of PC parts scraped from [PCPartPicker](https://pcpartpicker.com).

Part count: **61,246**

Last updated: **May 14, 2024**

## Download

The parts are available in JSON, JSON Lines, and CSV format. You can find them in the [`./data`](./data) directory.

## JSON Property Descriptions

Check out [API.md](./API.md) for JSON property descriptions of each product category.

## Contents

- General

  - CPUs
  - CPU Coolers
  - Motherboards
  - Memory
  - Storage
  - Video Cards
  - Cases
  - Power Supplies
  - Optical Drives
  - Operating Systems
  - Monitors
  - External Storage

- Accessories / Other

  - Case Accessories
  - Case Fans
  - Fan Controllers
  - Thermal Compound
  - UPS Systems

- Expansion Cards / Networking

  - Sound Cards
  - Wired Network Adapters
  - Wireless Network Adapters

- Peripherals
  - Headphones
  - Keyboards
  - Mice
  - Speakers
  - Webcams

## Running the Scraper

> **Warning**
> Make sure to turn on your VPN before running this scraper!

1. Run `npm install`
2. Run `npm run start`
3. Wait about 5-10 minutes for the scraper to finish doing its thing.
4. Everything will be emitted to a directory named `data-staging`.

If you don't want to scrape every part, you can specify individual parts by passing them as arguments. You can find the list of part type IDs in [API.md](./API.md).

Example usage:

```sh
# Only get CPUs and video cards
npm run start -- cpu video-card
```

## `package.json` Scripts

- `start` => Starts the scraper.
- `dev` => Starts the scraper without typechecking.
- `count` => Runs [`counter.ts`](./src/counter.ts); gets the number of parts from `./data-staging/json` or argv[1].
- `output` => Runs [`output.ts`](./src/output.ts); outputs JSONL and CSV formats to `./data-staging` or argv[1].
- `zip` => Zips the JSON, JSONL, and CSV folders in `./data`.

## License

[MIT](./LICENSE)
