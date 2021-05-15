# PC Part Dataset

A dataset of PC parts scraped from [PCPartPicker](https://pcpartpicker.com).

Part count: **43,574**

Last updated: **Jan 15, 2021**

> Note: I (@docyx) am aware that the scraper is not working. I plan to rewrite in TypeScript + Puppeteer to circumvent PCPartPicker's bot countermeasures.

## Download

All of the data is located in the `data` folder. If you want to download a specific category, it will be located in the `data/raw` directory. Otherwise, download `data/all.zip` if you want everything.

## Running the Scraper

> **EXTREMELY IMPORTANT NOTE**: Use a proxy/VPN when running the scraper!

1. Copy/fork the project to your local machine
2. If you don't have `pipenv` installed, run `pip install pipenv`
3. `cd <project location>`
4. `pipenv install`
5. `pipenv run python scripts/scraper.py`

If you want to zip everything, run `pipenv run python scripts/zip.py`

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
    - Software
    - Monitors
    - External Storage
    - Laptops
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

## License

[MIT](./LICENSE)
