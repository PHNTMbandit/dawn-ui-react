import { Button } from '../button'
import { useTableContext } from './table-context'
import { cn } from '@/index'

import type { TableViewModeToggleProps } from './table.types'

export const TableViewModeToggle = ({
  className,
  children,
  ref,
  ...props
}: TableViewModeToggleProps) => {
  const table = useTableContext()
  const isGridView = table.state.viewMode === 'grid'

  const handleClick = () => {
    table.toggleViewMode()
  }

  return (
    <Button onClick={handleClick} className={cn('shrink-0', className)} ref={ref} {...props}>
      {children(isGridView)}
    </Button>
  )
}
