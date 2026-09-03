import { cn } from '@/utils/cn'

import type { AlertDialogFooterProps } from './alert-dialog.types'

export const AlertDialogFooter = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogFooterProps) => {
  return (
    <div className={cn('flex items-start justify-end gap-2xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
