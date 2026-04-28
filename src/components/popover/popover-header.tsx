import { cn } from '@/utils/cn'

import type { PopoverHeaderProps } from './popover.types'

export const PopoverHeader = ({ className, children, ref, ...props }: PopoverHeaderProps) => {
  return (
    <div className={cn('flex flex-col gap-3xs pb-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
