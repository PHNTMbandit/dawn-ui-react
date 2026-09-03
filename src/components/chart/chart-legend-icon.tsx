import { useChartLegendPayload } from './chart-legend-content'
import { cn } from '@/utils/cn'

import type { ChartLegendIconProps } from './chart.types'

export const ChartLegendIcon = ({ className, children, ref, ...props }: ChartLegendIconProps) => {
  const { icon: Icon, color } = useChartLegendPayload()

  return (
    <div
      style={{
        color: color,
      }}
      className={cn('shrink-0 [&>svg]:size-xs', className)}
      ref={ref}
      {...props}
    >
      {children}
      {Icon && <Icon />}
    </div>
  )
}
