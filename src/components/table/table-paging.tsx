import { DotsThreeIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Menu, MenuPopup, MenuRadioGroup, MenuRadioItem, MenuTrigger } from '../menu'
import { useTableContext } from './table-context'
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
  const table = useTableContext()

  const handleClick = (pageIndex: number) => {
    table.setPageIndex(pageIndex)
  }

  return (
    <table.Subscribe selector={(state) => state.pagination}>
      {(pagination) => {
        const totalPages = table.getPageCount()
        const isActive = (pageIndex: number) => pageIndex === pagination.pageIndex

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
                    value={pagination.pageIndex}
                    onValueChange={handleClick}
                    className="max-h-[200px] overflow-y-auto"
                  >
                    {Array.from({ length: totalPages - min - max }).map((_, i) => {
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
              const pageIndex = totalPages - max + i
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
      }}
    </table.Subscribe>
  )
}
