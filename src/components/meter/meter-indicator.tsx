import { Meter as BaseMeter } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { MeterIndicatorProps } from './meter.types'

export const MeterIndicator = ({ className, children, ref, ...props }: MeterIndicatorProps) => {
  return (
    <BaseMeter.Indicator
      data-indicator
      className={cn('rounded-full transition-[width] duration-300 ease-in-out', className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseMeter.Indicator>
  )
}
