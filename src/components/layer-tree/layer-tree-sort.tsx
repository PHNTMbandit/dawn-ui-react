import { ArrowsDownUpIcon, SortAscendingIcon, SortDescendingIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import {
  Menu,
  MenuCheckboxItem,
  MenuPopup,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuTrigger,
} from '../menu'
import { useTableContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeSortProps } from './layer-tree.types'

export const LayerTreeSort = ({ className, children, ref, ...props }: LayerTreeSortProps) => {
  const table = useTableContext()
  const buttonLabels = table.options.meta?.translations?.buttonLabels ?? {}
  const ascendingLabel = buttonLabels.ascending ?? 'Ascending'
  const descendingLabel = buttonLabels.descending ?? 'Descending'

  const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
    const column = table.getColumn(columnId)
    const currentSort = column?.getIsSorted()

    if (currentSort === direction) {
      column?.clearSorting()
      return
    }

    column?.toggleSorting(direction === 'desc', column.getCanMultiSort())
  }

  return (
    <Menu>
      <MenuTrigger className={cn('shrink-0', className)} ref={ref} {...props}>
        <Button variant="ghost" size="iconMedium" tone="neutral">
          <ArrowsDownUpIcon weight="bold" />
        </Button>
      </MenuTrigger>
      <MenuPopup align="end">
        <table.Subscribe selector={(state) => state.sorting}>
          {() =>
            table
              .getAllColumns()
              .filter((column) => column.getCanSort())
              .map((column) => {
                return (
                  <MenuSubmenu key={column.id}>
                    <MenuSubmenuTrigger>
                      {(column.columnDef.header as string) ?? column.id}
                    </MenuSubmenuTrigger>
                    <MenuPopup>
                      {children}
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
              })
          }
        </table.Subscribe>
      </MenuPopup>
    </Menu>
  )
}
