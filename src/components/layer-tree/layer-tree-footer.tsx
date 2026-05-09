import { cn } from '@/utils/cn'

import type { LayerTreeFooterProps } from './layer-tree.types'

export const LayerTreeFooter = ({ className, children, ref, ...props }: LayerTreeFooterProps) => {
  return (
    <div className={cn('flex flex-col gap-3xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
