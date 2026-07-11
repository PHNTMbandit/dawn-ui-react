import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { NavigationMenuIconProps } from './navigation-menu.types'

export const NavigationMenuIcon = ({
  className,
  children,
  ref,
  ...props
}: NavigationMenuIconProps) => {
  return (
    <BaseNavigationMenu.Icon
      className={cn(
        'transition-transform duration-200 ease-[ease] data-popup-open:rotate-180',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseNavigationMenu.Icon>
  )
}
