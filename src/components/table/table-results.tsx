import { useTableContext } from './table-context'

import type { TableResultsProps } from './table.types'
import type * as React from 'react'

export const TableResults = ({ children }: TableResultsProps) => {
  const table = useTableContext()

  const pageIndex = table.state.pagination.pageIndex
  const pageSize = table.state.pagination.pageSize
  const totalRows = table.getFilteredRowModel().rows.length

  const start = totalRows === 0 ? 0 : pageIndex * pageSize + 1
  const end = totalRows === 0 ? 0 : Math.min(start + pageSize - 1, totalRows)

  return children(start, end, totalRows) as React.ReactElement
}
