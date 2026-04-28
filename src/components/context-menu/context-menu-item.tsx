import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { contextMenuItemVariants, type ContextMenuItemProps } from './context-menu.types'
import { cn } from '@/utils/cn'

export const ContextMenuItem = ({
  className,
  tone,
  children,
  ref,
  ...props
}: ContextMenuItemProps) => {
  return (
    <BaseContextMenu.Item
      className={cn(contextMenuItemVariants({ tone }), className)}
      ref={ref}
      {...props}
    >
      <div className="flex w-full items-center gap-2xs [&>svg]:size-sm">{children}</div>
    </BaseContextMenu.Item>
  )
}
