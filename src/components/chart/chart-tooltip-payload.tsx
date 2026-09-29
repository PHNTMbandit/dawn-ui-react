import React from 'react'
import { useChartTooltipContent } from './chart-tooltip-content'
import { cn } from '@/utils/cn'

import type { ChartTooltipPayloadProps } from './chart.types'
import type { TooltipPayloadEntry } from 'recharts'

const ChartTooltipPayloadContext = React.createContext<TooltipPayloadEntry | null>(null)

export const ChartTooltipPayload = ({
  className,
  children,
  ref,
  ...props
}: ChartTooltipPayloadProps) => {
  const { payload } = useChartTooltipContent()

  return (
    <div className={cn('flex flex-col gap-3xs', className)} ref={ref} {...props}>
      {payload?.map((entry, index) => (
        <ChartTooltipPayloadContext.Provider key={`payload-${index}`} value={entry}>
          <div className="flex items-center justify-between gap-2xs">{children}</div>
        </ChartTooltipPayloadContext.Provider>
      ))}
    </div>
  )
}

export const useChartTooltipPayload = () => {
  const context = React.useContext(ChartTooltipPayloadContext)

  if (!context) {
    throw new Error('useChartTooltipPayload must be used within a ChartTooltipPayloadProvider')
  }

  return context
}
