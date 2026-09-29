import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'

import type { ContextMenuSubmenuProps } from './context-menu.types'

export const ContextMenuSubmenu = ({ children, ...props }: ContextMenuSubmenuProps) => {
  return <BaseContextMenu.SubmenuRoot {...props}>{children}</BaseContextMenu.SubmenuRoot>
}
