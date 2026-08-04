import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableBodyListProps } from './table.types'

export const TableBodyList = <TData,>({
  showDivider = true,
  className,
  children,
  ref,
  ...props
}: TableBodyListProps<TData>) => {
  const { view, table } = useTable()
  const rows = table.getRowModel().rows

  if (view !== 'list') {
    return null
  }

  return (
    <tbody
      className={cn(showDivider && 'divide-y divide-border', 'overflow-y-auto', className)}
      ref={ref}
      {...props}
    >
      {rows.map((row) => {
        return children(row)
      })}
    </tbody>
  )
}
