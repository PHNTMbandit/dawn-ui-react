import { Menu as BaseMenu } from '@base-ui/react/menu'

import type { MenuProps } from './menu.types'

export const Menu = ({ children, ...props }: MenuProps) => {
  return <BaseMenu.Root {...props}>{children}</BaseMenu.Root>
}
