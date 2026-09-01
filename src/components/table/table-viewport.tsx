import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableViewportProps } from './table.types'

export const TableViewport = ({ className, children, ref, ...props }: TableViewportProps) => {
  const table = useTableContext()

  if (table.options.meta?.viewMode === 'grid') {
    return (
      <div className={cn('size-full', className)} ref={ref as React.Ref<HTMLDivElement>} {...props}>
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
