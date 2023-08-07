# PC Part Dataset

A dataset of PC parts scraped from [PCPartPicker](https://pcpartpicker.com).

Part count: **54,867**

Last updated: **August 6, 2023**

## Download

You can find individual JSON files for each product category in the [`data/json`](./data/json) folder. Otherwise, if you want everything, you can download [`data/json.zip`](./data/json.zip).

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
3. A window should show up. It may or may not have a captcha. If it does, solve it.
4. You should be good from there; wait about 5-10 minutes for the scraper to finish doing its thing.
5. Everything will be emitted to a directory named `data-staging`.

## License

[MIT](./LICENSE)
