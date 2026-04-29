import { CaretLeftIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TablePreviousPageProps } from './table.types'

export const TablePreviousPage = ({
  className,
  children,
  ref,
  ...props
}: TablePreviousPageProps) => {
  const { table } = useTable()

  const handleClick = () => {
    table.previousPage()
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
      <CaretLeftIcon weight="bold" />
    </Button>
  )
}
