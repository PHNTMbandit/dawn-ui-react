import { Checkbox } from '../checkbox'
import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableSelectHeaderProps } from './table.types'

export const TableSelectHeader = ({
  className,
  children,
  ref,
  ...props
}: TableSelectHeaderProps) => {
  const table = useTableContext()

  return (
    <table.Subscribe selector={(state) => state.rowSelection}>
      {() => {
        const allRowsSelected = table.getIsAllRowsSelected()

        return (
          <Checkbox
            checked={allRowsSelected}
            indeterminate={!allRowsSelected && table.getIsSomeRowsSelected()}
            onCheckedChange={(checked) => table.toggleAllRowsSelected(checked)}
            className={cn('', className)}
            ref={ref}
            {...props}
          >
            {children}
          </Checkbox>
        )
      }}
    </table.Subscribe>
  )
}
