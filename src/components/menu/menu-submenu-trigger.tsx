import { Menu as BaseMenu } from '@base-ui/react/menu'
import { CaretRightIcon } from '@phosphor-icons/react'
import { menuSubmenuTriggerVariants, type MenuSubmenuTriggerProps } from './menu.types'
import { cn } from '@/utils/cn'

export const MenuSubmenuTrigger = ({
  tone,
  className,
  children,
  ref,
  ...props
}: MenuSubmenuTriggerProps) => {
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(menuSubmenuTriggerVariants({ tone }), className)}
      ref={ref}
      {...props}
    >
      <span className="col-start-1 min-w-3xl pr-2xl">{children}</span>
      <CaretRightIcon className="col-start-2 size-xs place-self-end self-center" weight="bold" />
    </BaseMenu.SubmenuTrigger>
  )
}
