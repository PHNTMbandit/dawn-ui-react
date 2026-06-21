import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../menu'
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverPanel,
  PopoverTitle,
  PopoverTrigger,
} from '../popover'
import { useTable } from './table'
import { TableFilterForm } from './table-filter-form'
import { defaultOperatorLabels } from './table.constants'
import { cn } from '@/utils/cn'

import type { TableFilterProps } from './table.types'

export const TableFilter = ({
  operatorLabels = defaultOperatorLabels,
  className,
  children,
  ref,
  ...props
}: TableFilterProps) => {
  const { table } = useTable()

  return (
    <Menu modal={false}>
      <MenuTrigger className={cn('', className)} ref={ref} {...props}>
        {children}
      </MenuTrigger>
      <MenuPopup align="end" className={''}>
        {table
          .getAllColumns()
          .filter((column) => column.getCanFilter())
          .map((column) => {
            const filterType = column.columnDef.meta?.filterType || 'text'

            return (
              <Popover key={column.id}>
                <PopoverTrigger nativeButton={false}>
                  <MenuItem closeOnClick={false}>{column.id}</MenuItem>
                </PopoverTrigger>
                <PopoverPanel
                  side="inline-end"
                  className={cn('', className)}
                  onKeyDownCapture={(event) => event.stopPropagation()}
                >
                  <PopoverHeader>
                    <PopoverTitle>{column.id}</PopoverTitle>
                  </PopoverHeader>
                  <PopoverContent>
                    <TableFilterForm
                      column={column}
                      operatorLabels={operatorLabels}
                      filterType={filterType}
                    />
                  </PopoverContent>
                </PopoverPanel>
              </Popover>
            )
          })}
      </MenuPopup>
    </Menu>
  )
}
