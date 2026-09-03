import { EyeClosedIcon, EyeIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useCellContext, useTableContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeVisibilityCellProps } from './layer-tree.types'

export const LayerTreeVisibilityCell = ({
  className,
  children,
  ref,
  ...props
}: LayerTreeVisibilityCellProps) => {
  const cell = useCellContext<boolean>()
  const table = useTableContext()
  const row = cell.row
  const leafRows = row.getLeafRows()
  const rows = leafRows.length > 0 ? leafRows : [row]

  const handleClick = (isVisible: boolean) => {
    const next = !isVisible
    for (const leafRow of rows) leafRow.toggleVisibility(next)
  }

  return (
    <table.Subscribe selector={(state) => state.rowVisibility}>
      {() => {
        const isVisible = rows.some((leafRow) => leafRow.getIsVisible())

        return (
          <Button
            size="iconSmall"
            tone="neutral"
            variant={'ghost'}
            onClick={() => handleClick(isVisible)}
            className={cn('', className)}
            ref={ref}
            {...props}
          >
            {children}
            {isVisible ? <EyeIcon /> : <EyeClosedIcon />}
          </Button>
        )
      }}
    </table.Subscribe>
  )
}
