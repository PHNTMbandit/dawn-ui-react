import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableBodyProps } from './table.types'

export const TableBody = ({ showDivider = true, className, ref, ...props }: TableBodyProps) => {
  const table = useTableContext()
  const isGridView = table.options.meta?.viewMode === 'grid'

  if (isGridView) {
    return (
      <table.Subscribe selector={(state) => state}>
        {() => (
          <ul
            className={cn(
              'grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-sm overflow-y-auto',
              className,
            )}
          >
            {table.getRowModel().rows.map((row) => (
              <li key={row.id} className="min-w-0">
                {row.getVisibleCells().map((cell) => (
                  <table.AppCell cell={cell} key={cell.id}>
                    {(cell) => <table.FlexRender cell={cell} />}
                  </table.AppCell>
                ))}
              </li>
            ))}
          </ul>
        )}
      </table.Subscribe>
    )
  }

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
