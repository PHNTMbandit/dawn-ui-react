import { cva } from 'class-variance-authority'

import type { Toggle, ToggleState } from '@base-ui/react'
import type { VariantProps } from 'class-variance-authority'

export const toggleVariants = cva(
  'flex items-center justify-center text-on-surface-variant transition-all hover:cursor-pointer disabled:opacity-70',
  {
    variants: {
      size: {
        iconSmall: 'size-md rounded-md [&>svg]:size-xs',
        iconMedium: 'size-lg rounded-lg [&>svg]:size-sm',
        iconLarge: 'size-xl rounded-xl [&>svg]:size-md',
        small: 'h-md gap-3xs rounded-md px-2xs style-text-default--2 [&>svg]:size-xs',
        medium: 'h-lg gap-2xs rounded-lg px-xs style-text-default--1 [&>svg]:size-sm',
        large: 'h-xl gap-xs rounded-xl px-sm style-text-default-0 [&>svg]:size-md',
      },
      tone: {
        brand:
          'hover:not-disabled:bg-brand-container hover:not-disabled:text-brand-on-container data-pressed:text-brand-default',
        accent:
          'hover:not-disabled:bg-accent-container hover:not-disabled:text-accent-on-container data-pressed:text-accent-default',
        neutral:
          'hover:not-disabled:bg-neutral-container-high hover:not-disabled:text-neutral-on-container data-pressed:text-neutral-default',
        error:
          'hover:not-disabled:bg-error-container hover:not-disabled:text-error-on-container data-pressed:text-error-default',
        info: 'hover:not-disabled:bg-info-container hover:not-disabled:text-info-on-container data-pressed:text-info-default',
        success:
          'hover:not-disabled:bg-success-container hover:not-disabled:text-success-on-container data-pressed:text-success-default',
        warning:
          'hover:not-disabled:bg-warning-container hover:not-disabled:text-warning-on-container data-pressed:text-warning-default',
      },
    },
    defaultVariants: {
      size: 'medium',
      tone: 'brand',
    },
  },
)

export type ToggleProps = Omit<React.ComponentProps<typeof Toggle>, 'children'> &
  VariantProps<typeof toggleVariants> & {
    children?: React.ReactNode | ((state: ToggleState) => React.ReactNode)
  }
