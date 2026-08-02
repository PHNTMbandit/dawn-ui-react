import { cn } from '@/utils/cn'

import type { FieldRowProps } from './field.types'

export const FieldRow = ({ className, children, ref, ...props }: FieldRowProps) => {
  return (
    <div className={cn('flex items-center justify-between gap-sm', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
