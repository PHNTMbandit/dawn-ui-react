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
import { TableSelectFilterForm } from './table-select-filter-form'
import { cn } from '@/utils/cn'

import type { TableSelectFilterChipProps, TableSelectFilterValue } from './table.types'
import type { RowData } from '@tanstack/react-table'

export const TableSelectFilterChip = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableSelectFilterChipProps<TData>) => {
  const columnFilter = column.getFilterValue() as TableSelectFilterValue
  const header = (column.columnDef.header as string) || column.id

  return (
    <Popover>
      <PopoverTrigger className={cn('', className)} ref={ref} {...props}>
        <Button tone="neutral" size="extraSmall" variant="soft">
          <FunnelIcon />
          <span>{header}</span>
          <span className="font-light lowercase">{columnFilter.map(String).join(', ')}</span>
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverPanel>
        <PopoverHeader>
          <PopoverTitle>{header}</PopoverTitle>
        </PopoverHeader>
        <PopoverContent>
          <TableSelectFilterForm column={column} />
        </PopoverContent>
      </PopoverPanel>
    </Popover>
  )
}
