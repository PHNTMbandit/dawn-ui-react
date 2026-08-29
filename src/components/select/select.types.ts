import { cva, type VariantProps } from 'class-variance-authority'

import type { Select as BaseSelect } from '@base-ui/react/select'

export const selectVariants = cva(
  'flex items-center justify-between outline outline-transparent transition-all hover:cursor-pointer aria-invalid:bg-error-container aria-invalid:text-error-on-container aria-invalid:outline-error-border data-disabled:cursor-not-allowed [&_[data-value]]:min-w-0 [&_[data-value]]:flex-1',
  {
    variants: {
      variant: {
        primary: 'bg-surface shadow-2xs hover:outline-border-strong',
        secondary: 'bg-neutral-container hover:outline-border-strong',
        ghost: 'bg-transparent hover:bg-neutral-container',
      },
      size: {
        small:
          'h-lg gap-md rounded-lg px-xs style-text-default--1 [&_[data-value]]:gap-3xs [&_svg]:size-xs',
        medium:
          'h-xl gap-lg rounded-xl px-sm style-text-default-0 [&_[data-value]]:gap-2xs [&_svg]:size-sm',
        large:
          'h-2xl gap-xl rounded-2xl px-md style-text-default-1 [&_[data-value]]:gap-xs [&_svg]:size-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
)

export type SelectProps = React.ComponentProps<typeof BaseSelect.Root>
export type SelectTriggerProps = React.ComponentProps<typeof BaseSelect.Trigger> &
  VariantProps<typeof selectVariants>
export type SelectValueProps = React.ComponentProps<typeof BaseSelect.Value>
export type SelectIconProps = React.ComponentProps<typeof BaseSelect.Icon>
export type SelectPopupProps = React.ComponentProps<typeof BaseSelect.Positioner>
export type SelectItemProps = React.ComponentProps<typeof BaseSelect.Item>
export type SelectListProps = React.ComponentProps<typeof BaseSelect.List>
export type SelectGroupProps = React.ComponentProps<typeof BaseSelect.Group>
export type SelectGroupLabelProps = React.ComponentProps<typeof BaseSelect.GroupLabel>
export type SelectDescriptionProps = React.ComponentProps<'span'>
export type SelectTitleProps = React.ComponentProps<'span'>
export type SelectFilter = {
  id: number
  label: string
  value: string
}
