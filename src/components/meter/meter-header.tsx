import { cn } from '@/utils/cn'

import type { MeterHeaderProps } from './meter.types'

export const MeterHeader = ({ className, children, ref, ...props }: MeterHeaderProps) => {
  return (
    <div className={cn('flex items-center justify-between', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
