# API

- [cpu](#cpu)
- [cpu-cooler](#cpu-cooler)
- [motherboard](#motherboard)
- [memory](#memory)
- [internal-hard-drive](#internal-hard-drive)
- [video-card](#video-card)
- [case](#case)
- [power-supply](#power-supply)
- [os](#os)
- [monitor](#monitor)
- [sound-card](#sound-card)
- [wired-network-card](#wired-network-card)
- [wireless-network-card](#wireless-network-card)
- [headphones](#headphones)
- [keyboard](#keyboard)
- [mouse](#mouse)
- [speakers](#speakers)
- [webcam](#webcam)
- [case-accessory](#case-accessory)
- [case-fan](#case-fan)
- [fan-controller](#fan-controller)
- [thermal-paste](#thermal-paste)
- [external-hard-drive](#external-hard-drive)
- [optical-drive](#optical-drive)
- [ups](#ups)

## `cpu`

| Property      | Description                 | Unit (if applicable) |
| ------------- | --------------------------- | -------------------- |
| `core_count`  | Number of cores             |                      |
| `core_clock`  | Core clock                  | GHz                  |
| `boost_clock` | Boost clock                 | GHz                  |
| `tdp`         | TDP                         | W                    |
| `graphics`    | Integrated graphics, if any |                      |
| `smt`         | SMT support                 |                      |

## `cpu-cooler`

| Property      | Description                                                                        | Unit (if applicable) |
| ------------- | ---------------------------------------------------------------------------------- | -------------------- |
| `rpm`         | Fan RPM                                                                            | RPM                  |
| `noise_level` | Noise level. May be a range. In which case, its type is `[number, number]` instead | dB                   |
| `color`       | Color                                                                              |                      |
| `size`        | Radiator size                                                                      | mm                   |

## `motherboard`

| Property       | Description            | Unit (if applicable) |
| -------------- | ---------------------- | -------------------- |
| `socket`       | Socket                 |                      |
| `form_factor`  | Form factor            |                      |
| `max_memory`   | Maximum memory         | GB                   |
| `memory_slots` | Number of memory slots |                      |
| `color`        | Color                  |                      |

## `memory`

| Property             | Description                                                                                                         | Unit (if applicable) |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `speed`              | `[number, number]` where `[0]` represents the DDR version and `[1]` represents the speed in MHz                     | MHz (`[1]`)          |
| `modules`            | `[number, number]` where `[0]` represents the number of modules, and `[1]` represents the size of each module in GB | GB (`[1]`)           |
| `price_per_gb`       | Price / GB                                                                                                          | USD                  |
| `color`              | Color                                                                                                               |                      |
| `first_word_latency` | First Word Latency                                                                                                  | ns                   |
| `cas_latency`        | CAS Latency                                                                                                         |                      |

## `internal-hard-drive`

| Property       | Description                                                                  | Unit (if applicable)   |
| -------------- | ---------------------------------------------------------------------------- | ---------------------- |
| `capacity`     | Capacity                                                                     | GB                     |
| `price_per_gb` | Price / GB                                                                   | USD                    |
| `type`         | `SSD` if the drive is an SSD, otherwise the speed of the HDD                 | RPM if it is an HDD    |
| `cache`        | Cache                                                                        | MB                     |
| `form_factor`  | `M.2-xxxx` if the drive is an M.2, otherwise the size (in inches) of the HDD | inches if it is an HDD |
| `interface`    | PCIe/SATA interface information                                              |                        |

## `video-card`

| Property      | Description | Unit (if applicable) |
| ------------- | ----------- | -------------------- |
| `chipset`     | Chipset     |                      |
| `memory`      | Memory      | GB                   |
| `core_clock`  | Core clock  | MHz                  |
| `boost_clock` | Boost clock | MHz                  |
| `color`       | Color       |                      |
| `length`      | Length      | mm                   |

## `case`

| Property            | Description                              | Unit (if applicable) |
| ------------------- | ---------------------------------------- | -------------------- |
| `type`              | Type (ATX/mATX/etc.)                     |                      |
| `color`             | Color                                    |                      |
| `psu`               | Wattage of included power supply, if any | W                    |
| `side_panel`        | Side panel material information          |                      |
| `external_525_bays` | Number of external 5.25" bays            |                      |
| `internal_35_bays`  | Number of internal 3.5" bays             |                      |

## `power-supply`

| Property     | Description                                 | Unit (if applicable) |
| ------------ | ------------------------------------------- | -------------------- |
| `type`       | Type (ATX/SFX/etc.)                         |                      |
| `efficiency` | Efficiency rating (plus/bronze/silver/etc.) |                      |
| `wattage`    | Wattage                                     | W                    |
| `modular`    | Modularity (Full/Semi/`false`)              |                      |
| `color`      | Color                                       |                      |

## `os`

| Property     | Description                                                                            | Unit (if applicable) |
| ------------ | -------------------------------------------------------------------------------------- | -------------------- |
| `mode`       | `number` or `[number, number]` representing support for either 32-bit, 64-bit, or both |                      |
| `max_memory` | Maximum memory                                                                         |                      |

## `monitor`

| Property        | Description                                                    | Unit (if applicable) |
| --------------- | -------------------------------------------------------------- | -------------------- |
| `screen_size`   | Screen size (length of diagonal)                               | in                   |
| `resolution`    | `[number, number]` representing width and height, respectively | pixels               |
| `refresh_rate`  | Refresh rate                                                   | Hz                   |
| `response_time` | Response time                                                  | ms                   |
| `panel_type`    | Panel type (IPS/TN/etc.)                                       |                      |
| `aspect_ratio`  | Aspect ratio (e.g. 16:9)                                       |                      |

## `sound-card`

| Property        | Description                            | Unit (if applicable) |
| --------------- | -------------------------------------- | -------------------- |
| `channels`      | Channels                               |                      |
| `digital_audio` | Digital audio units (64, 32, 24, etc.) |                      |
| `snr`           | SNR (signal-to-noise ratio)            | dB                   |
| `sample_rate`   | Sample rate                            | kHz                  |
| `chipset`       | Chipset                                |                      |
| `interface`     | Interface (e.g. PCI/PCIe x1)           |                      |

## `wired-network-card`

| Property    | Description                    | Unit (if applicable) |
| ----------- | ------------------------------ | -------------------- |
| `interface` | Interface (e.g. PCIe x8/x4/x1) |                      |
| `color`     | Color                          |                      |

## `wireless-network-card`

| Property    | Description                    | Unit (if applicable) |
| ----------- | ------------------------------ | -------------------- |
| `protocol`  | Protocol (e.g. Wi-Fi 6E/6/5)   |                      |
| `interface` | Interface (e.g. PCIe x8/x4/x1) |                      |
| `color`     | Color                          |                      |

## `headphones`

| Property             | Description                                                  | Unit (if applicable) |
| -------------------- | ------------------------------------------------------------ | -------------------- |
| `type`               | Type (e.g. Circumaural/Earbud/etc.)                          |                      |
| `frequency_response` | `[number, number]` representing the frequency response range | kHz                  |
| `microphone`         | Whether it has a microphone                                  |                      |
| `wireless`           | Whether it is wireless                                       |                      |
| `enclosure_type`     | Enclosure type (e.g. Closed/Open)                            |                      |
| `color`              | Color                                                        |                      |

## `keyboard`

| Property          | Description                                      | Unit (if applicable) |
| ----------------- | ------------------------------------------------ | -------------------- |
| `style`           | Style (e.g. Gaming/Mini)                         |                      |
| `switches`        | Type of switches (e.g. Cherry Viola/Logitech GL) |                      |
| `backlit`         | Backlit color (e.g. RGB/multicolor/solid color)  |                      |
| `tenkeyless`      | Whether it is tenkeyless                         |                      |
| `connection_type` | Connection type (Wired, Wireless, or multiple)   |                      |
| `color`           | Color                                            |                      |

## `mouse`

| Property           | Description                                    | Unit (if applicable) |
| ------------------ | ---------------------------------------------- | -------------------- |
| `tracking_method`  | Tracking method (e.g. Optical/Laser)           |                      |
| `connection_type`  | Connection type (Wired, Wireless, or multiple) |                      |
| `max_dpi`          | Maximum DPI                                    | dpi                  |
| `hand_orientation` | Hand orientation (Left/Right/Both)             |                      |
| `color`            | Color                                          |                      |

# TODO

The following haven't been documented yet. Sorry!

## `speakers`

## `webcam`

## `case-accessory`

## `case-fan`

## `fan-controller`

## `thermal-paste`

## `external-hard-drive`

## `optical-drive`

## `ups`
