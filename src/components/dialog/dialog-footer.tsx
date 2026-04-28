import { cn } from '@/utils/cn'

import type { DialogFooterProps } from './dialog.types'

export const DialogFooter = ({ className, children, ref, ...props }: DialogFooterProps) => {
  return (
    <div
      className={cn('flex w-full items-center justify-end gap-2xs p-md', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
