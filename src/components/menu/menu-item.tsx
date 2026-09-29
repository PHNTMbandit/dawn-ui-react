import { Menu as BaseMenu } from '@base-ui/react/menu'
import { menuItemVariants, type MenuItemProps } from './menu.types'
import { cn } from '@/utils/cn'

export const MenuItem = ({ tone, className, children, ref, ...props }: MenuItemProps) => {
  return (
    <BaseMenu.Item
      className={cn(menuItemVariants({ tone }), className)}
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
