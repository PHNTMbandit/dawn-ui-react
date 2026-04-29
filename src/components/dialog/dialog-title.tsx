import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { cn } from '@/utils/cn'

import type { DialogTitleProps } from './dialog.types'

export const DialogTitle = ({ className, children, ref, ...props }: DialogTitleProps) => {
  return (
    <BaseDialog.Title
      className={cn('flex items-center gap-2xs style-text-strong-1 [&>svg]:size-md', className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseDialog.Title>
  )
}
