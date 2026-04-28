import { Button } from '../button'
import { useTable } from './table'
import { TableFirstPage } from './table-first-page'
import { TableLastPage } from './table-last-page'
import { TableNextPage } from './table-next-page'
import { TablePreviousPage } from './table-previous-page'
import { cn } from '@/utils/cn'

import type { TablePaginationProps } from './table.types'

export const TablePagination = ({
  truncateFrom,
  truncateTo,
  className,
  children,
  ref,
  ...props
}: TablePaginationProps) => {
  const { table } = useTable()

  const handleClick = (pageIndex: number) => {
    table.setPageIndex(pageIndex)
  }

  return (
    <div
      className={cn('inline-flex items-center justify-center gap-3xs', className)}
      ref={ref}
      {...props}
    >
      {children}
      <TableFirstPage />
      <TablePreviousPage />
      {Array.from({ length: table.getPageCount() }, (_, i) => {
        const start = truncateFrom ?? 0
        const end = truncateTo ?? table.getPageCount()
        if (i >= start && i < end) return null

        return (
          <Button
            disabled={i === table.getState().pagination.pageIndex}
            key={`page-${i}`}
            onClick={() => handleClick(i)}
            size={'iconMedium'}
            variant="outline"
            tone="neutral"
          >
            {i + 1}
          </Button>
        )
      })}
      <TableNextPage />
      <TableLastPage />
    </div>
  )
}
