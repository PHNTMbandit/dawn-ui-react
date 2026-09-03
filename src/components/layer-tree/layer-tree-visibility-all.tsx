import { EyeClosedIcon, EyeIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTableContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeVisibilityAllProps } from './layer-tree.types'

export const LayerTreeVisibilityAll = ({
  className,
  children,
  ref,
  ...props
}: LayerTreeVisibilityAllProps) => {
  const table = useTableContext()
  const allRows = table.getCoreRowModel().flatRows

  const handleClick = (isVisible: boolean) => {
    const next = !isVisible
    for (const leafRow of allRows) leafRow.toggleVisibility(next)
  }

  return (
    <table.Subscribe selector={(state) => state.rowVisibility}>
      {() => {
        const isVisible = allRows.some((leafRow) => leafRow.getIsVisible())

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
            {isVisible ? <EyeIcon weight="bold" /> : <EyeClosedIcon weight="bold" />}
          </Button>
        )
      }}
    </table.Subscribe>
  )
}
