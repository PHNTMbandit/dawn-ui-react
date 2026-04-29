import { cn } from '@/utils/cn'

import type { AlertDialogActionsProps } from './alert-dialog.types'

export const AlertDialogActions = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogActionsProps) => {
  return (
    <div className={cn('flex items-start justify-end gap-2xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
