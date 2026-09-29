import { useTableContext } from './table-context'
import { TableDateFilterChip } from './table-date-filter-chip'
import { TableNumberFilterChip } from './table-number-filter-chip'
import { TableSelectFilterChip } from './table-select-filter-chip'
import { TableStringFilterChip } from './table-string-filter-chip'
import { type TableFilterListProps } from './table.types'
import { cn } from '@/utils/cn'

import type { ReactNode } from 'react'

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
            {children && <li className="contents">{children}</li>}
            {table.getAllColumns().map((column) => {
              if (!column.getIsFiltered()) {
                return null
              }

              let chip: ReactNode = null
              switch (column.columnDef.meta?.filterVariant) {
                case 'date':
                  chip = <TableDateFilterChip column={column} />
                  break
                case 'number':
                  chip = <TableNumberFilterChip column={column} />
                  break
                case 'select':
                  chip = <TableSelectFilterChip column={column} />
                  break
                case 'string':
                  chip = <TableStringFilterChip column={column} />
                  break
                default:
                  return null
              }

              return (
                <li className="contents" key={column.id}>
                  {chip}
                </li>
              )
            })}
          </ul>
        )
      }}
    </table.Subscribe>
  )
}
