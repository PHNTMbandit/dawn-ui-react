import { AlertDialog as BaseAlertDialog } from '@base-ui/react'

import type { AlertDialogProps } from './alert-dialog.types'

export const AlertDialog = ({ children, ...props }: AlertDialogProps) => {
  return <BaseAlertDialog.Root {...props}>{children}</BaseAlertDialog.Root>
}
