import { GridFourIcon, ListIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableChangeViewProps } from './table.types'

export const TableChangeView = ({ className, children, ref, ...props }: TableChangeViewProps) => {
  const { view, setView } = useTable()

  const handleClick = () => {
    setView(view === 'list' ? 'grid' : 'list')
  }

  return (
    <Button
      className={cn('shrink-0', className)}
      onClick={handleClick}
      ref={ref}
      size={'iconMedium'}
      {...props}
    >
      {children}
      {view === 'list' ? <ListIcon weight="bold" /> : <GridFourIcon weight="bold" />}
    </Button>
  )
}
