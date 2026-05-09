import { Drawer as BaseDrawer } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { DrawerCloseProps } from './drawer.types'

export const DrawerClose = ({ className, children, ref, ...props }: DrawerCloseProps) => {
  return (
    <BaseDrawer.Close
      className={cn('shrink-0', className)}
      ref={ref}
      {...props}
      render={children as React.ReactElement}
    />
  )
}
