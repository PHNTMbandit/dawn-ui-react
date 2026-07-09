import { cva, type VariantProps } from 'class-variance-authority'

import type { inputVariants } from '../input/input.types'
import type { Input as BaseInput } from '@base-ui/react/input'

export const inputGroupAddonVariants = cva(
  'inline-flex items-center gap-2xs text-on-surface-variant group-aria-invalid:text-error-on-container',
  {
    variants: {
      size: {
        small: 'style-text-default--1 [&>svg]:size-xs',
        medium: 'style-text-default-0 [&>svg]:size-sm',
        large: 'style-text-default-1 [&>svg]:size-md',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export type InputGroupAddonProps = React.ComponentProps<'div'> &
  VariantProps<typeof inputGroupAddonVariants>
export type InputGroupInputProps = React.ComponentProps<typeof BaseInput>
export type InputGroupProps = React.ComponentProps<'div'> & VariantProps<typeof inputVariants>
