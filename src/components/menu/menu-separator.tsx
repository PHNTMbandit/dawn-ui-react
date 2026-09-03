import { Menu as BaseMenu } from '@base-ui/react/menu'
import { cn } from '@/utils/cn'

import type { MenuSeparatorProps } from './menu.types'

export const MenuSeparator = ({ className, ref, ...props }: MenuSeparatorProps) => {
  return (
    <BaseMenu.Separator
      className={cn('mx-2xs my-3xs h-px bg-border-strong', className)}
      ref={ref}
      {...props}
    />
  )
}
