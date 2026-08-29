import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableBodyProps } from './table.types'

export const TableBody = ({ showDivider = true, className, ref, ...props }: TableBodyProps) => {
  const table = useTableContext()

  return (
    <table.Subscribe selector={(state) => state}>
      {() => (
        <tbody
          className={cn(showDivider && 'divide-y divide-border', 'overflow-y-auto', className)}
          ref={ref}
          {...props}
        >
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: row.getIsSelected()
                  ? 'var(--color-neutral-container-high)'
                  : 'transparent',
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <table.AppCell cell={cell} key={cell.id}>
                  {(cell) => (
                    <td
                      style={{
                        width: cell.column.getSize(),
                      }}
                      className={cn('h-xl px-xs first:rounded-l-xl last:rounded-r-xl', className)}
                    >
                      <table.FlexRender cell={cell} />
                    </td>
                  )}
                </table.AppCell>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table.Subscribe>
  )
}
