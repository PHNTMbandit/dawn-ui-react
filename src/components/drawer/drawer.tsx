import { Drawer as BaseDrawer } from '@base-ui/react'

import type { DrawerProps } from './drawer.types'

export const Drawer = ({ children, ...props }: DrawerProps) => {
  return <BaseDrawer.Root {...props}>{children}</BaseDrawer.Root>
}
