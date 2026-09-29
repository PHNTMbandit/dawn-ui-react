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
import { TableStringFilterForm } from './table-string-filter-form'
import { defaultFilterOperatorLabels } from './table.types'
import { cn } from '@/utils/cn'

import type { TableStringFilterChipProps } from './table.types'
import type { StringFilterValue } from './table.utils'
import type { RowData } from '@tanstack/react-table'

export const TableStringFilterChip = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableStringFilterChipProps<TData>) => {
  const table = useTableContext()
  const filterOperatorLabels = table.options.meta?.translations?.filterOperatorLabels
  const columnFilter = column.getFilterValue() as StringFilterValue

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
          <span>{columnFilter.value}</span>
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverPanel>
        <PopoverHeader>
          <PopoverTitle>{(column.columnDef.header as string) || column.id}</PopoverTitle>
        </PopoverHeader>
        <PopoverContent>
          <TableStringFilterForm column={column} />
        </PopoverContent>
      </PopoverPanel>
    </Popover>
  )
}
