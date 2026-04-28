import { cn } from '@/utils/cn'

import type { AlertContentProps } from './alert.types'

export const AlertContent = ({ className, children, ref, ...props }: AlertContentProps) => {
  return (
    <div className={cn('', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
