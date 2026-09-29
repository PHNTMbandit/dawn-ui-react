import { AlertDialog as BaseAlertDialog } from '@base-ui/react'
import { Button } from '../button'
import { cn } from '@/utils/cn'

import type { AlertDialogCloseProps } from './alert-dialog.types'

export const AlertDialogClose = ({ className, children, ref, ...props }: AlertDialogCloseProps) => {
  return (
    <BaseAlertDialog.Close
      className={cn('', className)}
      ref={ref}
      {...props}
      render={
        <Button aria-label="Close" tone="neutral" variant="outline">
          {children}
        </Button>
      }
    />
  )
}
