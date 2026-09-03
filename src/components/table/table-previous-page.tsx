import { CaretLeftIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TablePreviousPageProps } from './table.types'

export const TablePreviousPage = ({
  className,
  children,
  ref,
  ...props
}: TablePreviousPageProps) => {
  const table = useTableContext()

  const handleClick = () => {
    table.previousPage()
  }

  return (
    <Button
      className={cn('shrink-0', className)}
      disabled={!table.getCanPreviousPage()}
      onClick={handleClick}
      ref={ref}
      variant="ghost"
      tone="neutral"
      {...props}
    >
      {children}
      <CaretLeftIcon weight="bold" />
    </Button>
  )
}
