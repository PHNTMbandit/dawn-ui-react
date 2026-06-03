import React from 'react'
import { cn } from '@/utils/cn'

import type { ChartTooltipContentProps } from './chart.types'

const ChartTooltipContentContext = React.createContext<ChartTooltipContentProps | null>(null)

export const ChartTooltipContent = ({
  className,
  children,
  ref,
  ...props
}: ChartTooltipContentProps) => {
  return (
    <ChartTooltipContentContext.Provider value={props}>
      <div
        className={cn('min-w-[125px] space-y-2xs rounded-lg bg-surface-2 px-xs py-2xs', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </ChartTooltipContentContext.Provider>
  )
}

export const useChartTooltipContent = () => {
  const context = React.useContext(ChartTooltipContentContext)

  if (!context) {
    throw new Error('useChartTooltipContent must be used within a ChartTooltipContentProvider')
  }

  return context
}
