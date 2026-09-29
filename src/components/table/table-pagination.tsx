import { cn } from '@/utils/cn'

import type { TablePaginationProps } from './table.types'

export const TablePagination = ({ className, children, ref, ...props }: TablePaginationProps) => {
  return (
    <div
      className={cn('inline-flex items-center justify-center gap-3xs', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
