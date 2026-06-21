import { Menu as BaseMenu } from '@base-ui/react/menu'
import { CheckIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { MenuCheckboxItemProps } from './menu.types'

export const MenuCheckboxItem = ({ className, children, ref, ...props }: MenuCheckboxItemProps) => {
  return (
    <BaseMenu.CheckboxItem
      className={cn(
        'rounded-md',
        'grid cursor-default grid-cols-[1fr_2rem] items-center px-2xs py-3xs style-text-default-0 outline-none select-none before:absolute before:inset-[0px] before:z-[-1] before:rounded-md before:content-[""] hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-on-container data-highlighted:before:bg-neutral-container-high',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="col-start-1 flex items-center gap-2xs">{children}</span>
      <BaseMenu.CheckboxItemIndicator className="col-start-2 flex items-center justify-center place-self-end self-center">
        <CheckIcon className="size-sm" weight="bold" />
      </BaseMenu.CheckboxItemIndicator>
    </BaseMenu.CheckboxItem>
  )
}
