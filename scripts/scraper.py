import os
import json
import time
from typing import Union
from requests_html import HTMLSession


BASE_URL = "https://pcpartpicker.com"
PRODUCT_URL = f"{BASE_URL}/products"

ENDPOINTS = [
    "case",
    "case-accessory",
    "case-fan",
    "cpu",
    "cpu-cooler",
    "external-hard-drive",
    "fan-controller",
    "headphones",
    "keyboard",
    "laptop",
    "memory",
    "monitor",
    "motherboard",
    "mouse",
    "os",
    "optical-drive",
    "power-supply",
    "software",
    "sound-card",
    "speakers",
    "internal-hard-drive",
    "thermal-paste",
    "ups",
    "video-card",
    "webcam",
    "wired-network-card",
    "wireless-network-card",
]


def _serialize(value: str) -> Union[str, float]:
    lower = value.lower()

    conversions = {"yes": True, "no": False, "none": None}

    if lower in conversions:
        return conversions[lower]

    return value


def scrape(
    endpoint: str,
    out_dir: str = "./data/raw",
    session: HTMLSession = None,
    page: int = 1,
    paginate: bool = True,
    wait: float = 0.5,
):
    if not session:
        session = HTMLSession()

    res = session.get(f"{PRODUCT_URL}/{endpoint}")
    res.raise_for_status()

    h = res.html
    h.render(sleep=wait)

    max_pages = int(h.find(".pagination > li")[-1].text)
    items = []

    if not os.path.exists(out_dir):
        print(f"Creating {out_dir} because it doesn't exist...\n")
        os.makedirs(out_dir)

    print(f"Scraping /{endpoint}...")

    while page <= max_pages:
        for row in h.find(".tr__product"):
            raw = {}

            raw["name"] = row.find(".td__nameWrapper > p", first=True).text
            raw["rating"] = len(
                row.find(".td__rating", first=True).find(".shape-star-full")
            )
            raw["rating_count"] = int(
                row.find(".td__rating", first=True)
                .text.replace("(", "")
                .replace(")", "")
            )

            price = row.find(".td__price", first=True).text.split("Add")[0]

            if price:
                raw["price_usd"] = float(price[1:])
            else:
                raw["price_usd"] = None

            for col in row.find(".td__spec"):
                split = col.text.split("\n")
                key = split[0].strip().lower().replace(" ", "_")

                if "/" in key:
                    key.replace("/", "per")

                if len(split) == 1:
                    value = None
                else:
                    value = _serialize(split[1])

                raw[key] = value

            items.append(raw)

        print(f"Processed page {page}/{max_pages}")

        if not paginate or page == max_pages:
            break
        else:
            page += 1

    out_path = os.path.join(out_dir, f"{endpoint}.json")

    with open(out_path, "w") as out:
        out.write(json.dumps(items))

    print(f"\nSuccessfully wrote to output file ({out_path})\n")


if __name__ == "__main__":
    session = HTMLSession()

    start = time.time()

    for endpoint in ENDPOINTS:
        scrape(endpoint, session=session)

    end = time.time()

    print(f"Done in {round(end - start, 1)} seconds")
