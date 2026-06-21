import { Menu, MenuCheckboxItem, MenuPopup, MenuTrigger } from '../menu'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableColumnToggleProps } from './table.types'

export const TableColumnToggle = ({
  className,
  children,
  ref,
  ...props
}: TableColumnToggleProps) => {
  const { table } = useTable()

  const handleToggleColumn = (columnId: string) => {
    const column = table.getColumn(columnId)
    if (column) {
      column.toggleVisibility()
    }
  }

  return (
    <Menu>
      <MenuTrigger className={cn('', className)} ref={ref} {...props}>
        {children}
      </MenuTrigger>
      <MenuPopup>
        {table.getAllColumns().map((column) => (
          <MenuCheckboxItem
            key={column.id}
            checked={column.getIsVisible()}
            onCheckedChange={() => handleToggleColumn(column.id)}
          >
            {column.id}
          </MenuCheckboxItem>
        ))}
      </MenuPopup>
    </Menu>
  )
}
