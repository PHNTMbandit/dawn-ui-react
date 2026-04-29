import { cn } from '@/utils/cn'

import type { DialogContentProps } from './dialog.types'

export const DialogContent = ({ className, children, ref, ...props }: DialogContentProps) => {
  return (
    <div className={cn('flex h-full flex-col gap-2xs px-md pb-md', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
