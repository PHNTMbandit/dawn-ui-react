import * as RechartsPrimitive from 'recharts'

import type { ChartTooltipProps } from './chart.types'

export const ChartTooltip = ({ content, ...props }: ChartTooltipProps) => {
  return <RechartsPrimitive.Tooltip content={content} {...props} />
}
