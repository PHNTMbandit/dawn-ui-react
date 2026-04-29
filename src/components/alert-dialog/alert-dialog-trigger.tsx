import { AlertDialog as BaseAlertDialog } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { AlertDialogTriggerProps } from './alert-dialog.types'

export const AlertDialogTrigger = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogTriggerProps) => {
  return (
    <BaseAlertDialog.Trigger
      className={cn('', className)}
      ref={ref}
      {...props}
      render={children as React.ReactElement}
    />
  )
}
