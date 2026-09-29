import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { NavigationMenuListProps } from './navigation-menu.types'

export const NavigationMenuList = ({
  className,
  children,
  ref,
  ...props
}: NavigationMenuListProps) => {
  return (
    <BaseNavigationMenu.List className={cn('relative flex gap-px', className)} ref={ref} {...props}>
      {children}
    </BaseNavigationMenu.List>
  )
}
