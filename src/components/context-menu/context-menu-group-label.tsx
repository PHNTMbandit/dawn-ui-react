import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { cn } from '@/utils/cn'

import type { ContextMenuGroupLabelProps } from './context-menu.types'

export const ContextMenuGroupLabel = ({
  className,
  children,
  ref,
  ...props
}: ContextMenuGroupLabelProps) => {
  return (
    <BaseContextMenu.GroupLabel
      className={cn(
        'cursor-default px-2xs py-3xs style-text-default--2 leading-xs text-on-surface-variant select-none',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseContextMenu.GroupLabel>
  )
}
