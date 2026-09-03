import { LockSimpleIcon, LockSimpleOpenIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useCellContext, useTableContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeLockedCellProps } from './layer-tree.types'

export const LayerTreeLockedCell = ({
  className,
  children,
  ref,
  ...props
}: LayerTreeLockedCellProps) => {
  const cell = useCellContext<boolean>()
  const table = useTableContext()
  const row = cell.row
  const leafRows = row.getLeafRows()
  const rows = leafRows.length > 0 ? leafRows : [row]

  const handleClick = (isLocked: boolean) => {
    const next = !isLocked
    for (const leafRow of rows) leafRow.toggleLocked(next)
  }

  return (
    <table.Subscribe selector={(state) => state.rowLocked}>
      {() => {
        const isLocked = rows.every((leafRow) => leafRow.getIsLocked())

        return (
          <Button
            size="iconSmall"
            tone="neutral"
            variant={'ghost'}
            onClick={() => handleClick(isLocked)}
            className={cn('', className)}
            ref={ref}
            {...props}
          >
            {children}
            {isLocked ? <LockSimpleIcon weight="fill" /> : <LockSimpleOpenIcon weight="bold" />}
          </Button>
        )
      }}
    </table.Subscribe>
  )
}
