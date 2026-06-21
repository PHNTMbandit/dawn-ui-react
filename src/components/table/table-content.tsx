import { cn } from '@/utils/cn'

import type { TableContentProps } from './table.types'

export const TableContent = ({ className, children, ref, ...props }: TableContentProps) => {
  return (
    <div className={cn('flex flex-col gap-3xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
