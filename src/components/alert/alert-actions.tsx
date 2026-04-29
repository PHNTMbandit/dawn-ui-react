import { cn } from '@/utils/cn'

import type { AlertActionsProps } from './alert.types'

export const AlertActions = ({ className, children, ref, ...props }: AlertActionsProps) => {
  return (
    <div
      className={cn('ml-auto flex items-center justify-start gap-3xs', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
