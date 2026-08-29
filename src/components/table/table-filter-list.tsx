import { useTableContext } from './table-context'
import { TableDateFilterChip } from './table-date-filter-chip'
import { TableNumberFilterChip } from './table-number-filter-chip'
import { TableSelectFilterChip } from './table-select-filter-chip'
import { TableStringFilterChip } from './table-string-filter-chip'
import { type TableFilterListProps } from './table.types'
import { cn } from '@/utils/cn'

export const TableFilterList = ({ className, children, ref, ...props }: TableFilterListProps) => {
  const table = useTableContext()

  return (
    <table.Subscribe selector={(state) => state.columnFilters}>
      {() => {
        if (!table.getAllColumns().some((column) => column.getIsFiltered())) {
          return null
        }

        return (
          <ul className={cn('flex flex-wrap items-center gap-xs', className)} ref={ref} {...props}>
            {children}
            {table.getAllColumns().map((column) => {
              if (!column.getIsFiltered()) {
                return null
              }

              switch (column.columnDef.meta?.filterVariant) {
                case 'date':
                  return <TableDateFilterChip key={column.id} column={column} />
                case 'number':
                  return <TableNumberFilterChip key={column.id} column={column} />
                case 'select':
                  return <TableSelectFilterChip key={column.id} column={column} />
                case 'string':
                  return <TableStringFilterChip key={column.id} column={column} />
                default:
                  return null
              }
            })}
          </ul>
        )
      }}
    </table.Subscribe>
  )
}
