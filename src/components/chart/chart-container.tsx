import React from 'react'
import { ResponsiveContainer } from 'recharts'
import { cn } from '@/utils/cn'

import type { ChartContainerContextProps, ChartContainerProps } from './chart.types'

const ChartContainerContext = React.createContext<ChartContainerContextProps | null>(null)

export const ChartContainer = ({
  id,
  initialDimension = { width: 320, height: 200 },
  config,
  className,
  children,
  ref,
  ...props
}: ChartContainerProps) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, '')}`

  return (
    <ChartContainerContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center style-text-default--1 [&_.recharts-cartesian-axis-tick_text]:fill-on-surface-muted [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-neutral-container-high [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-neutral-container-high [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className,
        )}
        ref={ref}
        {...props}
      >
        <ResponsiveContainer initialDimension={initialDimension}>{children}</ResponsiveContainer>
      </div>
    </ChartContainerContext.Provider>
  )
}

export const useChart = () => {
  const context = React.useContext(ChartContainerContext)

  if (!context) {
    throw new Error('useChart must be used within a ChartContainerProvider')
  }

  return context
}
