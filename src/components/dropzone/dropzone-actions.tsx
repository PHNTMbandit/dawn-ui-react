import { cn } from '@/utils/cn'

import type { DropzoneActionsProps } from './dropzone.types'

export const DropzoneActions = ({ className, children, ref, ...props }: DropzoneActionsProps) => {
  return (
    <div className={cn('flex items-center gap-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
