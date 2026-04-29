import { CaretRightIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableNextPageProps } from './table.types'

export const TableNextPage = ({ className, children, ref, ...props }: TableNextPageProps) => {
  const { table } = useTable()

  const handleClick = () => {
    table.nextPage()
  }

  return (
    <Button
      className={cn('shrink-0', className)}
      disabled={!table.getCanNextPage()}
      onClick={handleClick}
      ref={ref}
      size={'iconSmall'}
      variant="ghost"
      tone="neutral"
      {...props}
    >
      {children}
      <CaretRightIcon weight="bold" />
    </Button>
  )
}
