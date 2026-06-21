import { SortAscendingIcon, SortDescendingIcon } from '@phosphor-icons/react'
import {
  Menu,
  MenuCheckboxItem,
  MenuPopup,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
} from '../menu'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableSortProps } from './table.types'

export const TableSort = ({
  className,
  children,
  ref,
  ascendingLabel = 'Ascending',
  descendingLabel = 'Descending',
  ...props
}: TableSortProps) => {
  const { table } = useTable()

  const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
    const column = table.getColumn(columnId)
    const currentSort = column?.getIsSorted()

    if (currentSort === direction) {
      column?.clearSorting()
      return
    }

    column?.toggleSorting(direction === 'asc' ? false : true, false)
  }

  return (
    <Menu>
      <MenuTrigger className={cn('', className)} ref={ref} {...props}>
        {children}
      </MenuTrigger>
      <MenuPopup align="end">
        {table
          .getAllColumns()
          .filter((column) => column.getCanSort())
          .map((column) => {
            return (
              <MenuSubmenu key={column.id}>
                <MenuSubmenuTrigger>{column.id}</MenuSubmenuTrigger>
                <MenuPopup>
                  <MenuCheckboxItem
                    checked={column.getIsSorted() === 'asc'}
                    onClick={() => handleSort(column.id, 'asc')}
                  >
                    <SortDescendingIcon weight="bold" />
                    {ascendingLabel}
                  </MenuCheckboxItem>
                  <MenuCheckboxItem
                    checked={column.getIsSorted() === 'desc'}
                    onClick={() => handleSort(column.id, 'desc')}
                  >
                    <SortAscendingIcon weight="bold" />
                    {descendingLabel}
                  </MenuCheckboxItem>
                </MenuPopup>
              </MenuSubmenu>
            )
          })}
      </MenuPopup>
    </Menu>
  )
}
