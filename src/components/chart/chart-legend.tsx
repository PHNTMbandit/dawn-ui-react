import * as RechartsPrimitive from 'recharts'
import { cn } from '@/utils/cn'

import type { ChartLegendProps } from './chart.types'

export const ChartLegend = ({ className, children, ...props }: ChartLegendProps) => {
  return (
    <RechartsPrimitive.Legend className={cn('', className)} {...props}>
      {children}
    </RechartsPrimitive.Legend>
  )
}
