import { useChartTooltipContent } from './chart-tooltip-content'
import { cn } from '@/utils/cn'

import type { ChartTooltipLabelProps } from './chart.types'

export const ChartTooltipLabel = ({
  className,
  children,
  ref,
  ...props
}: ChartTooltipLabelProps) => {
  const { label } = useChartTooltipContent()

  return (
    <p className={cn('style-text-default-0', className)} ref={ref} {...props}>
      {children}
      {label}
    </p>
  )
}
