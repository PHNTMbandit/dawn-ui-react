import { FunnelSimpleIcon, SortAscendingIcon, SortDescendingIcon } from '@phosphor-icons/react'
import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableHeaderProps } from './table.types'

export const TableHeader = ({ className, children, ref, ...props }: TableHeaderProps) => {
  const table = useTableContext()

  return (
    <thead className={cn('bg-neutral-container')} ref={ref} {...props}>
      {children}
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <table.AppHeader header={header} key={header.id} selector={(state) => state.sorting}>
                {(header) => (
                  <th
                    style={{
                      width: header.getSize(),
                    }}
                    className={cn(
                      'container p-xs text-left style-text-default-0 text-neutral-on-container-muted transition-colors first:rounded-l-xl last:rounded-r-xl',
                      header.column.getCanSort() &&
                        'hover:cursor-pointer hover:bg-neutral-container-high hover:*:text-neutral-on-container',
                      header.isPlaceholder && 'cursor-default',
                      className,
                    )}
                    colSpan={header.colSpan}
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={cn(
                          'flex items-center justify-between gap-2xs whitespace-nowrap [&_svg]:size-sm',
                          header.column.getCanSort() && 'select-none hover:cursor-pointer',
                        )}
                      >
                        <div className="flex items-center gap-2xs">
                          <table.FlexRender header={header} />
                        </div>
                        {{
                          asc: <SortDescendingIcon weight="bold" />,
                          desc: <SortAscendingIcon weight="bold" />,
                        }[header.column.getIsSorted() as string] ??
                          (header.column.getCanSort() ? <FunnelSimpleIcon weight="bold" /> : null)}
                      </div>
                    )}
                  </th>
                )}
              </table.AppHeader>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}
