import { cn } from '@/utils/cn'

import type { DialogIconProps } from './dialog.types'

export const DialogIcon = ({ className, children, ref, ...props }: DialogIconProps) => {
  return (
    <div
      data-slot="dialog-icon"
      className={cn('row-span-2 self-start [&>svg]:size-xl [&>svg]:shrink-0', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
