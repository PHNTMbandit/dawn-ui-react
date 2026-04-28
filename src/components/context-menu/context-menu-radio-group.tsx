import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { cn } from '@/utils/cn'

import type { ContextMenuRadioGroupProps } from './context-menu.types'

export const ContextMenuRadioGroup = ({
  className,
  children,
  ref,
  ...props
}: ContextMenuRadioGroupProps) => {
  return (
    <BaseContextMenu.RadioGroup className={cn('', className)} ref={ref} {...props}>
      {children}
    </BaseContextMenu.RadioGroup>
  )
}
