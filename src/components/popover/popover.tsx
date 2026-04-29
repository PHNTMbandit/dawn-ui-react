import { Popover as BasePopover } from '@base-ui/react/popover'

import type { PopoverProps } from './popover.types'

export const Popover = ({ children, ...props }: PopoverProps) => {
  return <BasePopover.Root {...props}>{children}</BasePopover.Root>
}
