import { cn } from '@/utils/cn'

import type { AlertDialogContentProps } from './alert-dialog.types'

export const AlertDialogContent = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogContentProps) => {
  return (
    <div className={cn('space-y-3xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
