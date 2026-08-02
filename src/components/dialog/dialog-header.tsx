import { cn } from '@/utils/cn'

import type { DialogHeaderProps } from './dialog.types'

export const DialogHeader = ({ className, children, ref, ...props }: DialogHeaderProps) => {
  return (
    <div className={cn('flex flex-col', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
