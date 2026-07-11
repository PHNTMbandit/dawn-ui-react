import { cn } from '@/utils/cn'

import type { AlertDialogHeaderProps } from './alert-dialog.types'

export const AlertDialogHeader = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-start gap-sm [&>svg]:size-xl [&>svg]:shrink-0',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
