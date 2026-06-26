import { DotsThreeIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Menu, MenuPopup, MenuRadioGroup, MenuRadioItem, MenuTrigger } from '../menu'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TablePagingProps } from './table.types'

export const TablePaging = ({
  min = 3,
  max = 1,
  className,
  children,
  ref,
  ...props
}: TablePagingProps) => {
  const { table } = useTable()

  const totalPages = table.getPageCount()
  const currentPageIndex = table.getState().pagination.pageIndex
  const isActive = (pageIndex: number) => pageIndex === currentPageIndex

  const handleClick = (pageIndex: number) => {
    table.setPageIndex(pageIndex)
  }

  return (
    <div className={cn('flex items-center gap-3xs', className)} ref={ref} {...props}>
      {children}
      {Array.from({ length: min }).map((_, i) =>
        i < totalPages ? (
          <Button
            key={i}
            tone="neutral"
            size="iconMedium"
            variant={isActive(i) ? 'fill' : 'ghost'}
            className={'shrink-0'}
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </Button>
        ) : null,
      )}
      {totalPages > min + max && (
        <Menu>
          <MenuTrigger>
            <Button tone="neutral" size="iconMedium" variant="ghost" className={'shrink-0'}>
              <DotsThreeIcon weight="bold" />
            </Button>
          </MenuTrigger>
          <MenuPopup align="center">
            <MenuRadioGroup
              value={currentPageIndex}
              onValueChange={handleClick}
              className="max-h-[200px] overflow-y-auto"
            >
              {Array.from({ length: table.getPageCount() - min - max }).map((_, i) => {
                const pageIndex = min + i
                return (
                  <MenuRadioItem key={pageIndex} value={pageIndex} closeOnClick>
                    {pageIndex + 1}
                  </MenuRadioItem>
                )
              })}
            </MenuRadioGroup>
          </MenuPopup>
        </Menu>
      )}
      {Array.from({ length: max }).map((_, i) => {
        const pageIndex = table.getPageCount() - max + i
        if (pageIndex < min) {
          return null
        }

        return (
          <Button
            key={i}
            tone={'neutral'}
            size="iconMedium"
            variant={isActive(pageIndex) ? 'fill' : 'ghost'}
            className={'shrink-0'}
            onClick={() => handleClick(pageIndex)}
          >
            {pageIndex + 1}
          </Button>
        )
      })}
    </div>
  )
}
