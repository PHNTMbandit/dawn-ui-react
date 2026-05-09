import { ArrowsDownUpIcon, SortAscendingIcon, SortDescendingIcon } from '@phosphor-icons/react'
import React from 'react'
import { MenuSubmenuTrigger } from '..'
import { Button } from '../button'
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSubmenu,
  MenuTrigger,
} from '../menu'
import { useLayerTree } from './layer-tree'
import { cn } from '@/utils/cn'

import type { Column } from '@tanstack/react-table'

type LayerTreeSortProps = React.ComponentProps<'button'>

export const LayerTreeSort = <TData,>({
  className,
  children,
  ref,
  ...props
}: LayerTreeSortProps) => {
  const { table } = useLayerTree<TData>()

  const handleClick = (value: 'asc' | 'desc', column: Column<TData, unknown>) => {
    column.toggleSorting(value !== 'asc', column.getCanMultiSort())
  }

  return (
    <Menu>
      <MenuTrigger>
        <Button
          size={'iconMedium'}
          tone="neutral"
          variant="ghost"
          className={cn('', className)}
          ref={ref}
          {...props}
        >
          {children}
          <ArrowsDownUpIcon />
        </Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Sort By</MenuGroupLabel>
          {table
            .getAllColumns()
            .filter((column) => column.getCanSort() && column.getIsVisible())
            .map((column) => {
              return (
                <MenuSubmenu key={column.id}>
                  <MenuSubmenuTrigger className={'capitalize'}>{column.id}</MenuSubmenuTrigger>
                  <MenuPopup>
                    <MenuRadioGroup
                      key={column.id}
                      onValueChange={(value) => handleClick(value as 'asc' | 'desc', column)}
                      value={column.getIsSorted() as 'asc' | 'desc' | false}
                    >
                      <MenuRadioItem value="asc">
                        <SortAscendingIcon /> Ascending
                      </MenuRadioItem>
                      <MenuRadioItem value="desc">
                        <SortDescendingIcon /> Descending
                      </MenuRadioItem>
                    </MenuRadioGroup>
                  </MenuPopup>
                </MenuSubmenu>
              )
            })}
        </MenuGroup>
      </MenuPopup>
    </Menu>
  )
}
