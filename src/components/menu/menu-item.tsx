import { Menu as BaseMenu } from '@base-ui/react/menu'
import { menuItemVariants, type MenuItemProps } from './menu.types'
import { cn } from '@/utils/cn'

export const MenuItem = ({ tone, className, children, ref, ...props }: MenuItemProps) => {
  return (
    <BaseMenu.Item className={cn(menuItemVariants({ tone }), className)} ref={ref} {...props}>
      <div className="flex w-full items-center gap-2xs [&>svg]:size-sm">{children}</div>
    </BaseMenu.Item>
  )
}
