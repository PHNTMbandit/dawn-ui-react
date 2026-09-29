import { Drawer as BaseDrawer } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { DrawerTitleProps } from './drawer.types'

export const DrawerTitle = ({ className, children, ref, ...props }: DrawerTitleProps) => {
  return (
    <BaseDrawer.Title className={cn('style-text-strong-1', className)} ref={ref} {...props}>
      {children}
    </BaseDrawer.Title>
  )
}
