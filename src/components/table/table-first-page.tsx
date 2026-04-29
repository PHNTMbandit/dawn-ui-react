import { CaretLineLeftIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableFirstPageProps } from './table.types'

export const TableFirstPage = ({ className, children, ref, ...props }: TableFirstPageProps) => {
  const { table } = useTable()

  const handleClick = () => {
    table.setPageIndex(0)
  }

  return (
    <Button
      className={cn('shrink-0', className)}
      disabled={!table.getCanPreviousPage()}
      onClick={handleClick}
      ref={ref}
      size={'iconSmall'}
      variant="ghost"
      tone="neutral"
      {...props}
    >
      {children}
      <CaretLineLeftIcon weight="bold" />
    </Button>
  )
}
