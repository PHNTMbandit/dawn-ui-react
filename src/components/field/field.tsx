import { cn } from '@/utils/cn'

import type { FieldProps } from './field.types'

export const Field = ({ className, children, ref, ...props }: FieldProps) => {
  return (
    <div className={cn('space-y-2xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
