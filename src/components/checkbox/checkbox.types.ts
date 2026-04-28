import { cva, type VariantProps } from 'class-variance-authority'

import type { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox'
import type { ComponentProps, ReactNode } from 'react'

export const checkboxVariants = cva(
  'group flex size-md items-center justify-center rounded-sm shadow-2xs outline outline-transparent transition-colors not-indeterminate:text-accent-on-default indeterminate:text-accent-default enabled:hover:cursor-pointer enabled:hover:outline-accent-border disabled:cursor-not-allowed disabled:hover:cursor-not-allowed data-checked:bg-accent-default [&:not([data-checked])]:enabled:hover:outline-border-strong',
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
