import * as RechartsPrimitive from 'recharts'

import type { ChartLegendProps } from './chart.types'

export const ChartLegend = ({ children, ...props }: ChartLegendProps) => {
  return <RechartsPrimitive.Legend {...props}>{children}</RechartsPrimitive.Legend>
}
