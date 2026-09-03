import { Menu as BaseMenu } from '@base-ui/react/menu'
import { cn } from '@/utils/cn'

import type { MenuTriggerProps } from './menu.types'

export const MenuTrigger = ({ className, children, ref, ...props }: MenuTriggerProps) => {
  return (
    <BaseMenu.Trigger
      className={cn('data-popup-open:pointer-events-none', className)}
      ref={ref}
      {...props}
      render={children as React.ReactElement}
    />
  )
}
