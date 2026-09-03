import { FunnelIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverPanel,
  PopoverTitle,
  PopoverTrigger,
} from '../popover'
import { useTableContext } from './table-context'
import { TableNumberFilterForm } from './table-number-filter-form'
import { defaultFilterOperatorLabels } from './table.types'
import { cn } from '@/utils/cn'

import type { TableNumberFilterChipProps } from './table.types'
import type { NumberFilterValue } from './table.utils'
import type { RowData } from '@tanstack/react-table'

export const TableNumberFilterChip = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableNumberFilterChipProps<TData>) => {
  const table = useTableContext()
  const filterOperatorLabels = table.options.meta?.translations?.filterOperatorLabels
  const columnFilter = column.getFilterValue() as NumberFilterValue
  const filterValue =
    columnFilter.operator === 'between'
      ? columnFilter.number.filter(Boolean).join(' - ')
      : columnFilter.number[0]

  return (
    <Popover>
      <PopoverTrigger className={cn('', className)} ref={ref} {...props}>
        <Button tone="neutral" size="extraSmall" variant="soft">
          <FunnelIcon />
          <span>{(column.columnDef.header as string) || column.id}</span>
          <span className="font-light lowercase">
            {filterOperatorLabels?.[columnFilter.operator] ??
              defaultFilterOperatorLabels[columnFilter.operator]}
          </span>
          <span>{filterValue}</span>
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverPanel>
        <PopoverHeader>
          <PopoverTitle>{(column.columnDef.header as string) || column.id}</PopoverTitle>
        </PopoverHeader>
        <PopoverContent>
          <TableNumberFilterForm column={column} />
        </PopoverContent>
      </PopoverPanel>
    </Popover>
  )
}
