import { Popover as BasePopover } from '@base-ui/react/popover'
import { cn } from '@/utils/cn'

import type { PopoverTriggerProps } from './popover.types'

export const PopoverTrigger = ({ className, ref, children, ...props }: PopoverTriggerProps) => {
  return (
    <BasePopover.Trigger
      className={cn('px-xs', className)}
      ref={ref}
      {...props}
      render={children as React.ReactElement}
    />
  )
}
