import { Menu as BaseMenu } from '@base-ui/react/menu'

import type { MenuSubmenuProps } from './menu.types'

export const MenuSubmenu = ({ children, ...props }: MenuSubmenuProps) => {
  return <BaseMenu.SubmenuRoot {...props}>{children}</BaseMenu.SubmenuRoot>
}
