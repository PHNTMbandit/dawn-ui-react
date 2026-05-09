import { Drawer as BaseDrawer } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { DrawerTriggerProps } from './drawer.types'

export const DrawerTrigger = ({ className, children, ref, ...props }: DrawerTriggerProps) => {
  return (
    <BaseDrawer.Trigger
      className={cn('', className)}
      ref={ref}
      {...props}
      render={children as React.ReactElement}
    />
  )
}
