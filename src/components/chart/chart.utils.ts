import type { ChartConfig } from './chart.types'

export const getPayloadConfigFromPayload = (config: ChartConfig, payload: unknown, key: string) => {
  if (typeof payload !== 'object' || payload === null) {
    return undefined
  }

  if (key in config) {
    return config[key]
  }

  if ('name' in payload && typeof payload.name === 'string' && payload.name in config) {
    return config[payload.name]
  }

  return undefined
}
