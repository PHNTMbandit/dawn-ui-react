import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'

import type { ContextMenuProps } from './context-menu.types'

export const ContextMenu = ({ children, ...props }: ContextMenuProps) => {
  return <BaseContextMenu.Root {...props}>{children}</BaseContextMenu.Root>
}
