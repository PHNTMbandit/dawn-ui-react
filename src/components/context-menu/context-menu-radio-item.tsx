import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { CheckIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { ContextMenuRadioItemProps } from './context-menu.types'

export const ContextMenuRadioItem = ({
  className,
  children,
  ref,
  ...props
}: ContextMenuRadioItemProps) => {
  return (
    <BaseContextMenu.RadioItem
      className={cn(
        'grid cursor-default grid-cols-[1fr_2rem] items-center rounded-md px-2xs py-3xs style-text-default-0 leading-md outline-none select-none before:absolute before:inset-[0px] before:z-[-1] before:rounded-md before:content-[""] hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-neutral-on-container data-highlighted:before:bg-neutral-container-high',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="col-start-1 flex min-w-3xl items-center gap-2xs [&>svg]:size-sm">
        {children}
      </span>
      <BaseContextMenu.RadioItemIndicator className="col-start-2 flex items-center justify-center place-self-end self-center">
        <CheckIcon className="size-sm" weight="bold" />
      </BaseContextMenu.RadioItemIndicator>
    </BaseContextMenu.RadioItem>
  )
}
