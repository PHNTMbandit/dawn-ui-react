import { cva } from 'class-variance-authority'

import type { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import type { VariantProps } from 'class-variance-authority'

export type ContextMenuProps = React.ComponentProps<typeof BaseContextMenu.Root>
export type ContextMenuTriggerProps = React.ComponentProps<typeof BaseContextMenu.Trigger>
export type ContextMenuPopupProps = React.ComponentProps<typeof BaseContextMenu.Popup>
export type ContextMenuSeparatorProps = React.ComponentProps<typeof BaseContextMenu.Separator>
export type ContextMenuSubmenuProps = React.ComponentProps<typeof BaseContextMenu.SubmenuRoot>
export type ContextMenuShortcutProps = React.ComponentProps<'div'>
export type ContextMenuGroupProps = React.ComponentProps<typeof BaseContextMenu.Group>
export type ContextMenuGroupLabelProps = React.ComponentProps<typeof BaseContextMenu.GroupLabel>
export type ContextMenuCheckboxItemProps = React.ComponentProps<
  typeof BaseContextMenu.CheckboxItem
> &
  VariantProps<typeof contextMenuItemVariants>
export type ContextMenuRadioItemProps = React.ComponentProps<typeof BaseContextMenu.RadioItem> &
  VariantProps<typeof contextMenuItemVariants>
export type ContextMenuRadioGroupProps = React.ComponentProps<typeof BaseContextMenu.RadioGroup>

export const contextMenuItemVariants = cva(
  'flex cursor-default items-center px-sm py-3xs style-text-default-0 outline-none select-none before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md',
  {
    variants: {
      tone: {
        brand:
          'text-brand-default data-highlighted:text-brand-on-container data-highlighted:before:bg-brand-container',
        accent:
          'text-accent-default data-highlighted:text-accent-on-container data-highlighted:before:bg-accent-container',
        neutral:
          'text-on-surface data-highlighted:text-neutral-on-container data-highlighted:before:bg-neutral-container-high',
        error:
          'text-error-default data-highlighted:text-error-on-container data-highlighted:before:bg-error-container',
        info: 'text-info-default data-highlighted:text-info-on-container data-highlighted:before:bg-info-container',
        success:
          'text-success-default data-highlighted:text-success-on-container data-highlighted:before:bg-success-container',
        warning:
          'text-warning-default data-highlighted:text-warning-on-container data-highlighted:before:bg-warning-container',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  },
)

export const contextMenuSubmenuTriggerVariants = cva(
  'grid cursor-default grid-cols-[1fr_2rem] items-center px-sm py-3xs style-text-default-0 outline-none select-none before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-popup-open:relative data-popup-open:z-0 data-popup-open:before:absolute data-popup-open:before:inset-x-3xs data-popup-open:before:inset-y-[0px] data-popup-open:before:z-[-1] data-popup-open:before:rounded-sm',
  {
    variants: {
      tone: {
        brand:
          'text-brand-default data-highlighted:text-brand-on-container data-highlighted:before:bg-brand-container data-popup-open:text-brand-on-container data-popup-open:before:bg-brand-container data-[highlighted]:data-[popup-open]:before:bg-brand-container',
        accent:
          'text-accent-default data-highlighted:text-accent-on-container data-highlighted:before:bg-accent-container data-popup-open:text-accent-on-container data-popup-open:before:bg-accent-container data-[highlighted]:data-[popup-open]:before:bg-accent-container',
        neutral:
          'text-on-surface data-highlighted:text-neutral-on-container data-highlighted:before:bg-neutral-container-high data-popup-open:text-neutral-on-container data-popup-open:before:bg-neutral-container-high data-[highlighted]:data-[popup-open]:before:bg-neutral-container-high',
        error:
          'text-error-default data-highlighted:text-error-on-container data-highlighted:before:bg-error-container data-popup-open:text-error-on-container data-popup-open:before:bg-error-container data-[highlighted]:data-[popup-open]:before:bg-error-container',
        info: 'text-info-default data-highlighted:text-info-on-container data-highlighted:before:bg-info-container data-popup-open:text-info-on-container data-popup-open:before:bg-info-container data-[highlighted]:data-[popup-open]:before:bg-info-container',
        success:
          'text-success-default data-highlighted:text-success-on-container data-highlighted:before:bg-success-container data-popup-open:text-success-on-container data-popup-open:before:bg-success-container data-[highlighted]:data-[popup-open]:before:bg-success-container',
        warning:
          'text-warning-default data-highlighted:text-warning-on-container data-highlighted:before:bg-warning-container data-popup-open:text-warning-on-container data-popup-open:before:bg-warning-container data-[highlighted]:data-[popup-open]:before:bg-warning-container',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  },
)

export type ContextMenuItemProps = React.ComponentProps<typeof BaseContextMenu.Item> &
  VariantProps<typeof contextMenuItemVariants>

export type ContextMenuSubmenuTriggerProps = React.ComponentProps<
  typeof BaseContextMenu.SubmenuTrigger
> &
  VariantProps<typeof contextMenuSubmenuTriggerVariants>
