import shutil


if __name__ == "__main__":
    shutil.make_archive("./data/all", "zip", "./data/raw")
