import { Menu as BaseMenu } from '@base-ui/react/menu'
import { cn } from '@/utils/cn'

import type { MenuRadioGroupProps } from './menu.types'

export const MenuRadioGroup = ({ className, children, ref, ...props }: MenuRadioGroupProps) => {
  return (
    <BaseMenu.RadioGroup className={cn('', className)} ref={ref} {...props}>
      {children}
    </BaseMenu.RadioGroup>
  )
}
