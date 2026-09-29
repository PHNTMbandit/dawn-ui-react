import { navBarVariants, type NavBarProps } from './nav-bar.types'
import { cn } from '@/utils/cn'

export const NavBar = ({
  itemOrientation,
  size,
  variant,
  className,
  children,
  ref,
  ...props
}: NavBarProps) => {
  return (
    <div
      className={cn(navBarVariants({ itemOrientation, size, variant }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
