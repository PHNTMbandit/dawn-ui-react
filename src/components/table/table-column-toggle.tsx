import { Menu, MenuCheckboxItem, MenuPopup, MenuTrigger } from '../menu'
import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableColumnToggleProps } from './table.types'

export const TableColumnToggle = ({
  className,
  children,
  ref,
  ...props
}: TableColumnToggleProps) => {
  const table = useTableContext()

  const handleToggleColumn = (columnId: string) => {
    table.getColumn(columnId)?.toggleVisibility()
  }

  return (
    <Menu>
      <MenuTrigger className={cn('shrink-0', className)} ref={ref} {...props}>
        {children}
      </MenuTrigger>
      <MenuPopup>
        {table.getAllColumns().flatMap((column) => {
          if (!column.getCanHide()) {
            return null
          }

          return (
            <MenuCheckboxItem
              key={column.id}
              checked={column.getIsVisible()}
              onCheckedChange={() => handleToggleColumn(column.id)}
            >
              {(column.columnDef.header as string) || column.id}
            </MenuCheckboxItem>
          )
        })}
      </MenuPopup>
    </Menu>
  )
}
