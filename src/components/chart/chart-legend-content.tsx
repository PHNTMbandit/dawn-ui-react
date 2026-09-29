import React from 'react'
import { useChart } from './chart-container'
import { ChartLegendIcon } from './chart-legend-icon'
import { ChartLegendIndicator } from './chart-legend-indicator'
import { ChartLegendLabel } from './chart-legend-label'
import { getPayloadConfigFromPayload } from './chart.utils'
import { cn } from '@/utils/cn'

import type { ChartLegendContentProps } from './chart.types'

const ChartLegendPayloadContext = React.createContext<{
  label?: string
  color?: string
  icon?: React.ComponentType
} | null>(null)

export const ChartLegendContent = ({
  payload,
  verticalAlign = 'bottom',
  className,
  children,
  ref,
  ...props
}: ChartLegendContentProps) => {
  const { config } = useChart()

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-lg',
        verticalAlign === 'top' ? 'mb-md' : 'mt-md',
        className,
      )}
      ref={ref}
      {...props}
    >
      {payload?.map((entry, index) => {
        const key = typeof entry.dataKey === 'string' ? entry.dataKey : 'value'
        const payloadConfig = getPayloadConfigFromPayload(config, entry, key)

        return (
          <ChartLegendPayloadContext.Provider
            key={`payload-${index}`}
            value={{
              color: payloadConfig?.color,
              icon: payloadConfig?.icon,
              label: payloadConfig?.label,
            }}
          >
            <div className="flex items-center gap-2xs">
              {payloadConfig?.icon ? <ChartLegendIcon /> : <ChartLegendIndicator />}
              <ChartLegendLabel />
              {children}
            </div>
          </ChartLegendPayloadContext.Provider>
        )
      })}
    </div>
  )
}

export const useChartLegendPayload = () => {
  const context = React.useContext(ChartLegendPayloadContext)

  if (!context) {
    throw new Error('useChartLegendPayload must be used within a ChartLegendPayloadProvider')
  }

  return context
}
