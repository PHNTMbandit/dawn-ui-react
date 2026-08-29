import { useTableContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeRowProps } from './layer-tree.types'

export const LayerTreeRow = ({ rowId, className, children, ref, ...props }: LayerTreeRowProps) => {
  const table = useTableContext()

  return (
    <table.Subscribe
      selector={(state) => ({
        expanded: state.expanded,
        rowSelection: state.rowSelection,
        rowVisibility: state.rowVisibility,
      })}
    >
      {() => {
        const row = table.getRowModel().rows.find((r) => r.id === rowId)
        const indent = (row?.depth ?? 0) * 24
        const leafRows = row?.getLeafRows() ?? []
        const isVisible =
          leafRows.length > 0
            ? leafRows.some((leaf) => leaf.getIsVisible())
            : (row?.getIsVisible() ?? true)

        return (
          <div className={cn('flex w-full items-center gap-3xs', className)} ref={ref} {...props}>
            {children}
            {row?.getVisibleCells().map((cell, index) => {
              const isFirstCell = index === 0
              const isFill = cell.column.columnDef.meta?.fill ?? cell.column.id === 'name'

              return (
                <table.AppCell key={cell.id} cell={cell}>
                  {(cell) => (
                    <div
                      style={{
                        marginLeft: isFirstCell ? indent : undefined,
                        opacity: isVisible ? 1 : 0.5,
                      }}
                      className={cn(
                        'flex items-center',
                        isFill ? 'min-w-0 grow gap-3xs' : 'w-fit shrink-0',
                      )}
                    >
                      <table.FlexRender cell={cell} />
                    </div>
                  )}
                </table.AppCell>
              )
            })}
          </div>
        )
      }}
    </table.Subscribe>
  )
}
