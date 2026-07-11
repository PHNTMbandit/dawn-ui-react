import { navigationMenuLinkVariants, type NavigationMenuLinkProps } from './navigation-menu.types'
import { cn } from '@/utils/cn'

export const NavigationMenuLink = ({
  tone,
  className,
  children,
  ref,
  ...props
}: NavigationMenuLinkProps) => {
  return (
    <div
      className={cn(
        navigationMenuLinkVariants({
          tone,
          className,
        }),
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
