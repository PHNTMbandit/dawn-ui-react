import { cva, type VariantProps } from 'class-variance-authority'

import type { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox'
import type { ComponentProps, ReactNode } from 'react'

export const checkboxVariants = cva(
  'group flex size-sm items-center justify-center rounded-sm shadow-2xs outline-2 outline-transparent transition-colors not-indeterminate:text-accent-on-default indeterminate:text-accent-default hover:cursor-pointer hover:outline-accent-border disabled:cursor-not-allowed disabled:hover:cursor-not-allowed data-checked:bg-accent-default [&_svg]:size-xs [&:not([data-checked])]:hover:outline-border-strong',
  {
    variants: {
      variant: {
        elevated: 'bg-surface shadow-2xs',
        inSurface: 'bg-surface-low shadow-none inset-shadow-2xs data-checked:inset-shadow-none',
      },
    },
    defaultVariants: {
      variant: 'elevated',
    },
  },
)

export type CheckboxRootProps = ComponentProps<typeof BaseCheckbox.Root> & {
  label?: ReactNode
} & VariantProps<typeof checkboxVariants>

export type CheckboxIndicatorProps = ComponentProps<typeof BaseCheckbox.Indicator>
