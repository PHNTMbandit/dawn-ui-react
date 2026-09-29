import { Drawer as DrawerBase } from './drawer'
import { DrawerClose } from './drawer-close'
import { DrawerContent } from './drawer-content'
import { DrawerDescription } from './drawer-description'
import { DrawerHeader } from './drawer-header'
import { DrawerPopup } from './drawer-popup'
import { DrawerProvider } from './drawer-provider'
import { DrawerTitle } from './drawer-title'
import { DrawerTrigger } from './drawer-trigger'

export const Drawer = Object.assign(DrawerBase, {
  Close: DrawerClose,
  Content: DrawerContent,
  Description: DrawerDescription,
  Provider: DrawerProvider,
  Trigger: DrawerTrigger,
  Popup: DrawerPopup,
  Title: DrawerTitle,
  Header: DrawerHeader,
})

export type {
  DrawerProps,
  DrawerCloseProps,
  DrawerContentProps,
  DrawerDescriptionProps,
  DrawerProviderProps,
  DrawerTriggerProps,
  DrawerPopupProps,
  DrawerTitleProps,
  DrawerHeaderProps,
} from './drawer.types'
export { DrawerClose } from './drawer-close'
export { DrawerContent } from './drawer-content'
export { DrawerDescription } from './drawer-description'
export { DrawerProvider } from './drawer-provider'
export { DrawerTrigger } from './drawer-trigger'
export { DrawerPopup } from './drawer-popup'
export { DrawerTitle } from './drawer-title'
export { DrawerHeader } from './drawer-header'
