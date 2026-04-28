import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { XIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { cn } from '@/utils/cn'

import type { ComboboxChipProps } from './combobox.types'

export const ComboboxChip = ({ className, children, ref, ...props }: ComboboxChipProps) => {
  return (
    <BaseCombobox.Chip
      className={cn(
        'inline-flex h-lg items-center justify-center gap-xs rounded-lg bg-neutral-container pr-3xs pl-xs style-text-default-0 text-neutral-on-container',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <BaseCombobox.ChipRemove
        aria-label="Remove"
        render={(e) => (
          <Button onClick={e.onClick} variant={'ghost'} tone="error" size="iconExtraSmall">
            <XIcon className="size-sm" weight="bold" />
          </Button>
        )}
      />
    </BaseCombobox.Chip>
  )
}
