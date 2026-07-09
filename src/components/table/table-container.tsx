import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableContainerProps } from './table.types'

export const TableContainer = ({ className, children, ref, ...props }: TableContainerProps) => {
  const { view } = useTable()

  if (view === 'grid') {
    return (
      <div
        role="grid"
        className={cn('size-full scrollbar-thin overflow-y-auto pr-3xs', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <table className={cn('size-full', className)} ref={ref} {...props}>
      {children}
    </table>
  )
}
