import { Popover as PopoverBase } from './popover'
import { PopoverButton } from './popover-button'
import { PopoverContent } from './popover-content'
import { PopoverDescription } from './popover-description'
import { PopoverHeader } from './popover-header'
import { PopoverPanel } from './popover-panel'
import { PopoverTitle } from './popover-title'
import { PopoverTrigger } from './popover-trigger'

export const Popover = Object.assign(PopoverBase, {
  Description: PopoverDescription,
  Panel: PopoverPanel,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
  Header: PopoverHeader,
  Content: PopoverContent,
  Button: PopoverButton,
})

export type {
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverHeaderProps,
  PopoverPanelProps,
  PopoverProps,
  PopoverTitleProps,
  PopoverTriggerProps,
  PopoverButtonProps,
} from './popover.types'
export { PopoverDescription } from './popover-description'
export { PopoverPanel } from './popover-panel'
export { PopoverTitle } from './popover-title'
export { PopoverTrigger } from './popover-trigger'
export { PopoverHeader } from './popover-header'
export { PopoverContent } from './popover-content'
export { PopoverButton } from './popover-button'
export { popoverHandle } from './popover.types'
