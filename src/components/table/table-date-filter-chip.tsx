import { FunnelIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import {
  Popover,
  PopoverTrigger,
  PopoverPanel,
  PopoverHeader,
  PopoverContent,
  PopoverTitle,
} from '../popover'
import { useTableContext } from './table-context'
import { TableDateFilterForm } from './table-date-filter-form'
import { defaultFilterOperatorLabels } from './table.types'
import { cn } from '@/utils/cn'

import type { TableDateFilterChipProps } from './table.types'
import type { DateFilterValue } from './table.utils'
import type { RowData } from '@tanstack/react-table'

export const TableDateFilterChip = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableDateFilterChipProps<TData>) => {
  const table = useTableContext()
  const filterOperatorLabels = table.options.meta?.translations?.filterOperatorLabels
  const columnFilter = column.getFilterValue() as DateFilterValue

  return (
    <Popover key={column.id}>
      <PopoverTrigger className={cn('', className)} ref={ref} {...props}>
        <Button tone="neutral" size="extraSmall" variant={'soft'}>
          <FunnelIcon />
          <span>{(column.columnDef.header as string) || column.id}</span>
          <span className="lowercase">
            {filterOperatorLabels?.[columnFilter.operator] ??
              defaultFilterOperatorLabels[columnFilter.operator]}
          </span>
          <span>
            {Array.isArray(columnFilter.date) && columnFilter.date[1] !== ''
              ? columnFilter.date.join(' - ')
              : columnFilter.date}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverPanel>
        <PopoverHeader>
          <PopoverTitle>{(column.columnDef.header as string) || column.id}</PopoverTitle>
          <PopoverContent>
            {children}
            <TableDateFilterForm column={column} />
          </PopoverContent>
        </PopoverHeader>
      </PopoverPanel>
    </Popover>
  )
}
