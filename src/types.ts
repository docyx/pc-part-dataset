export type PartType =
	| 'cpu'
	| 'cpu-cooler'
	| 'motherboard'
	| 'memory'
	| 'internal-hard-drive'
	| 'video-card'
	| 'case'
	| 'power-supply'
	| 'os'
	| 'monitor'
	| 'sound-card'
	| 'wired-network-card'
	| 'wireless-network-card'
	| 'headphones'
	| 'keyboard'
	| 'mouse'
	| 'speakers'
	| 'webcam'
	| 'case-accessory'
	| 'case-fan'
	| 'fan-controller'
	| 'thermal-paste'
	| 'external-hard-drive'
	| 'optical-drive'
	| 'ups'

export type Part = Record<string, any>

export type MappedSerialization = [string, boolean | 'custom']
export type SerializationMap = Record<
	PartType,
	Record<string, MappedSerialization>
>
