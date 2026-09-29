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
      nativeButton
      ref={ref}
      render={(renderProps) => (
        <button
          type="button"
          {...renderProps}
          className={cn('w-full gap-2xs [&>svg]:size-sm', renderProps.className)}
        >
          {children}
        </button>
      )}
      {...props}
    />
  )
}
