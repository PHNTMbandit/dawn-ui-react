import { useChart } from './chart-container'
import { useChartTooltipPayload } from './chart-tooltip-payload'
import { getPayloadConfigFromPayload } from './chart.utils'
import { cn } from '@/utils/cn'

import type { ChartTooltipIconProps } from './chart.types'

export const ChartTooltipIcon = ({ className, children, ref, ...props }: ChartTooltipIconProps) => {
  const { config } = useChart()
  const payload = useChartTooltipPayload()
  const key = typeof payload.dataKey === 'string' ? payload.dataKey : 'value'
  const payloadConfig = getPayloadConfigFromPayload(config, payload, key)
  const Icon = payloadConfig?.icon

  return (
    <div
      style={{
        color: payload.color,
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
