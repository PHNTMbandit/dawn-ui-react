import { LockSimpleIcon, LockSimpleOpenIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTableContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeLockedAllProps } from './layer-tree.types'

export const LayerTreeLockedAll = ({
  className,
  children,
  ref,
  ...props
}: LayerTreeLockedAllProps) => {
  const table = useTableContext()
  const allRows = table.getCoreRowModel().flatRows

  const handleClick = (isLocked: boolean) => {
    const next = !isLocked
    for (const leafRow of allRows) leafRow.toggleLocked(next)
  }

  return (
    <table.Subscribe selector={(state) => state.rowLocked}>
      {() => {
        const isLocked = allRows.some((leafRow) => leafRow.getIsLocked())

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
