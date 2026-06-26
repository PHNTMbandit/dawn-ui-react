import { Button } from '../button'
import { cn } from '@/utils/cn'

import type { LayerTreeNodeToggleProps } from './layer-tree.types'

export const LayerTreeNodeToggle = <TData,>({
  value,
  accessorKey,
  rows,
  onToggle,
  children,
  className,
  ref,
  ...props
}: LayerTreeNodeToggleProps<TData>) => {
  const handleClick = () => {
    rows.forEach((row) => {
      row.original[accessorKey as keyof TData] = !value as TData[keyof TData]
    })

    onToggle?.()
  }

  return (
    <Button
      tone="neutral"
      size="iconSmall"
      variant="ghost"
      className={cn('', className)}
      ref={ref}
      onClick={handleClick}
      {...props}
    >
      {children(value)}
    </Button>
  )
}
