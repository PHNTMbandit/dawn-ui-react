import { flexRender } from '@tanstack/react-table'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableFooterProps } from './table.types'

export const TableFooter = ({ className, children, ref, ...props }: TableFooterProps) => {
  const { table } = useTable()

  return (
    <tfoot className={cn('', className)} ref={ref} {...props}>
      {children}
      {table.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <th colSpan={header.colSpan} key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.footer, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </tfoot>
  )
}
