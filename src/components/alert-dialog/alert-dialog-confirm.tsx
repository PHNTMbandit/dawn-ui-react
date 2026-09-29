import { AlertDialog as BaseAlertDialog } from '@base-ui/react'
import { Button } from '../button'
import { useAlertDialogContext } from './alert-dialog-context'
import { cn } from '@/utils/cn'

import type { AlertDialogConfirmProps } from './alert-dialog.types'

export const AlertDialogConfirm = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogConfirmProps) => {
  const { tone } = useAlertDialogContext()
  return (
    <BaseAlertDialog.Close
      data-confirm
      className={cn('', className)}
      ref={ref}
      {...props}
      render={<Button tone={tone}>{children}</Button>}
    />
  )
}
