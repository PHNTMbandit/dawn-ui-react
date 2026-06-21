import { Select as BaseSelect } from '@base-ui/react/select'
import { CheckIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { SelectItemProps } from './select.types'

export const SelectItem = ({ className, children, ref, ...props }: SelectItemProps) => {
  return (
    <BaseSelect.Item
      className={cn(
        'grid h-lg cursor-default grid-cols-[1fr_0.75rem] items-center gap-xs rounded-md px-xs style-text-default-0 outline-none select-none group-data-[side=none]:pr-xs group-data-[side=none]:leading-lg hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:bg-neutral-container-high data-highlighted:text-neutral-on-container data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-selected:bg-neutral-default data-selected:text-neutral-on-default pointer-coarse:py-xs [&_svg]:size-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      <BaseSelect.ItemText className={'flex items-center gap-2xs'}>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="place-self-end self-center">
        <CheckIcon weight="bold" />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  )
}
