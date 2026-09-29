import { useCellContext } from '../table'
import { layerTreeTextCellVariants, type LayerTreeTextCellProps } from './layer-tree.types'
import { cn } from '@/utils/cn'

export const LayerTreeTextCell = ({
  size,
  className,
  children,
  ref,
  ...props
}: LayerTreeTextCellProps) => {
  const cell = useCellContext<string>()

  return (
    <span className={cn(layerTreeTextCellVariants({ size, className }))} ref={ref} {...props}>
      {children}
      {cell.getValue()}
    </span>
  )
}
