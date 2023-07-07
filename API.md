# API

## `cpu`

| Property      | Description                 | Unit (if applicable) |
| ------------- | --------------------------- | -------------------- |
| `core_count`  | Number of cores             |
| `core_clock`  | Core clock                  | GHz                  |
| `boost_clock` | Boost clock                 | GHz                  |
| `tdp`         | TDP                         | W                    |
| `graphics`    | Integrated graphics, if any |
| `smt`         | SMT support                 |

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

# TODO

The following haven't been documented yet. Sorry!

## `internal-hard-drive`

## `video-card`

## `case`

## `power-supply`

## `os`

## `monitor`

## `sound-card`

## `wired-network-card`

## `wireless-network-card`

## `headphones`

## `keyboard`

## `mouse`

## `speakers`

## `webcam`

## `case-accessory`

## `case-fan`

## `fan-controller`

## `thermal-paste`

## `external-hard-drive`

## `optical-drive`

## `ups`
