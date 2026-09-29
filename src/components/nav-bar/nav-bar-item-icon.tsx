import { cn } from '@/utils/cn'

import type { NavBarItemIconProps } from './nav-bar.types'

export const NavBarItemIcon = ({ className, children, ref, ...props }: NavBarItemIconProps) => {
  return (
    <div className={cn('', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
