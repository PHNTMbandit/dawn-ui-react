import { cva, type VariantProps } from 'class-variance-authority'

import type { Menu as BaseMenu } from '@base-ui/react/menu'

export type MenuProps = React.ComponentProps<typeof BaseMenu.Root>
export type MenuTriggerProps = React.ComponentProps<typeof BaseMenu.Trigger>
export type MenuPopupProps = React.ComponentProps<typeof BaseMenu.Positioner>
export type MenuSeparatorProps = React.ComponentProps<typeof BaseMenu.Separator>
export type MenuCheckboxItemProps = React.ComponentProps<typeof BaseMenu.CheckboxItem>
export type MenuRadioGroupProps = React.ComponentProps<typeof BaseMenu.RadioGroup>
export type MenuRadioItemProps = React.ComponentProps<typeof BaseMenu.RadioItem>
export type MenuGroupProps = React.ComponentProps<typeof BaseMenu.Group>
export type MenuGroupLabelProps = React.ComponentProps<typeof BaseMenu.GroupLabel>
export type MenuSubmenuProps = React.ComponentProps<typeof BaseMenu.SubmenuRoot>
export type MenuShortcutProps = React.ComponentProps<'div'>

export const menuItemVariants = cva(
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

export const menuSubmenuTriggerVariants = cva(
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

export type MenuItemProps = React.ComponentProps<typeof BaseMenu.Item> &
  VariantProps<typeof menuItemVariants>
export type MenuSubmenuTriggerProps = React.ComponentProps<typeof BaseMenu.SubmenuTrigger> &
  VariantProps<typeof menuSubmenuTriggerVariants>
