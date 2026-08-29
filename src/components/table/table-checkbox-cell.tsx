import { Checkbox } from '../checkbox'
import { useCellContext, useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableCheckboxCellProps } from './table.types'

export const TableCheckboxCell = ({
  className,
  children,
  ref,
  ...props
}: TableCheckboxCellProps) => {
  const cell = useCellContext()
  const table = useTableContext()
  const row = cell.row

  return (
    <table.Subscribe selector={(state) => state.rowSelection}>
      {() => (
        <Checkbox
          checked={
            row.getIsSelected() || (row.getCanSelectSubRows() && row.getIsAllSubRowsSelected())
          }
          disabled={!row.getCanSelect()}
          indeterminate={row.getIsSomeSelected()}
          onCheckedChange={(checked) => row.toggleSelected(checked)}
          className={cn('', className)}
          ref={ref}
          {...props}
        >
          {children}
        </Checkbox>
      )}
    </table.Subscribe>
  )
}
