import os
import json


if __name__ == "__main__":
    total = 0

    for data_file in os.listdir("./data/raw"):
        path = os.path.join("./data/raw", data_file)

        with open(path, "r") as f:
            data = json.loads(f.read())

            total += len(data)

    print(total)
