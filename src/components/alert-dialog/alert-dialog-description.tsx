import { AlertDialog as BaseAlertDialog } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { AlertDialogDescriptionProps } from './alert-dialog.types'

export const AlertDialogDescription = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogDescriptionProps) => {
  return (
    <BaseAlertDialog.Description
      className={cn('mb-[0px] style-text-prose-0', className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAlertDialog.Description>
  )
}
