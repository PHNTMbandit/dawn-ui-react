import { CaretRightIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableNextPageProps } from './table.types'

export const TableNextPage = ({ className, children, ref, ...props }: TableNextPageProps) => {
  const table = useTableContext()

  const handleClick = () => {
    table.nextPage()
  }

  return (
    <Button
      className={cn('shrink-0', className)}
      disabled={!table.getCanNextPage()}
      onClick={handleClick}
      ref={ref}
      variant="ghost"
      tone="neutral"
      {...props}
    >
      {children}
      <CaretRightIcon weight="bold" />
    </Button>
  )
}
