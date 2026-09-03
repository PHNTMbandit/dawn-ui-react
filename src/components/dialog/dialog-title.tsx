import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { cn } from '@/utils/cn'

import type { DialogTitleProps } from './dialog.types'

export const DialogTitle = ({ className, children, ref, ...props }: DialogTitleProps) => {
  return (
    <BaseDialog.Title
      data-slot="dialog-title"
      className={cn('style-text-strong-1', className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseDialog.Title>
  )
}
