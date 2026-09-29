import { cn } from '@/utils/cn'

import type { PopoverContentProps } from './popover.types'

export const PopoverContent = ({ className, children, ref, ...props }: PopoverContentProps) => {
  return (
    <div className={cn('space-y-3xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
