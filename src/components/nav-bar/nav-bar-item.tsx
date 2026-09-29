import { navBarItemVariants, type NavBarItemProps } from './nav-bar.types'
import { cn } from '@/utils/cn'

export const NavBarItem = ({
  isActive = false,
  tone,
  className,
  children,
  ref,
  ...props
}: NavBarItemProps) => {
  return (
    <button
      data-active={isActive}
      data-nav-bar-item
      className={cn(navBarItemVariants({ tone }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
}
