import { cn } from '@/utils/cn'

import type { NavBarItemLabelProps } from './nav-bar.types'

export const NavBarItemLabel = ({ className, children, ref, ...props }: NavBarItemLabelProps) => {
  return (
    <span className={cn('', className)} ref={ref} {...props}>
      {children}
    </span>
  )
}
