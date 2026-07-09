import { cn } from '@/utils/cn'

import type { NavigationMenuLinkProps } from './navigation-menu.types'

export const NavigationMenuLink = ({
  className,
  children,
  ref,
  ...props
}: NavigationMenuLinkProps) => {
  return (
    <div
      className={cn(
        'rounded-lg px-sm py-xs transition-colors hover:cursor-pointer hover:bg-neutral-container hover:text-neutral-on-container',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
