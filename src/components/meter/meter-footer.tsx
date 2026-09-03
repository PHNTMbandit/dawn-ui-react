import { cn } from '@/utils/cn'

import type { MeterFooterProps } from './meter.types'

export const MeterFooter = ({ className, children, ref, ...props }: MeterFooterProps) => {
  return (
    <div className={cn('flex items-center justify-between', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
