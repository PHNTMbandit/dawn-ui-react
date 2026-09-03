import { SortAscendingIcon, SortDescendingIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTableContext } from './table-context'
import { TableSortMenu } from './table-sort-menu'
import { cn } from '@/utils/cn'

import type { TableSortChipProps } from './table.types'
import type { RowData } from '@tanstack/react-table'

export const TableSortChip = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableSortChipProps<TData>) => {
  const table = useTableContext()
  const columnSort = column.getIsSorted()
  const buttonLabels = table.options.meta?.translations?.buttonLabels ?? {}
  const ascendingLabel = buttonLabels.ascending ?? 'Ascending'
  const descendingLabel = buttonLabels.descending ?? 'Descending'

  if (!columnSort) {
    return null
  }

  return (
    <TableSortMenu className={cn('', className)} ref={ref} {...props}>
      <Button tone="neutral" size="extraSmall" variant={'soft'}>
        {columnSort === 'asc' ? <SortDescendingIcon /> : <SortAscendingIcon />}
        <span>{(column.columnDef.header as string) || column.id}</span>
        <span className="font-light lowercase">
          {columnSort === 'asc' ? ascendingLabel : descendingLabel}
        </span>
        {children}
      </Button>
    </TableSortMenu>
  )
}
