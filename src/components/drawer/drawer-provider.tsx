import { Drawer as BaseDrawer } from '@base-ui/react'

import type { DrawerProviderProps } from './drawer.types'

export const DrawerProvider = ({ children, ...props }: DrawerProviderProps) => {
  return (
    <BaseDrawer.Provider {...props}>
      <BaseDrawer.IndentBackground />
      <BaseDrawer.Indent>{children}</BaseDrawer.Indent>
    </BaseDrawer.Provider>
  )
}
