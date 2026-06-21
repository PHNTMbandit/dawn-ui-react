import { cva } from 'class-variance-authority'

import type { NumberField as BaseNumberField } from '@base-ui/react/number-field'
import type { VariantProps } from 'class-variance-authority'

export const numberFieldVariants = cva(
  'flex flex-col data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&_[role="group"]]:rounded-full [&_[role="group"]]:bg-surface [&_[role="group"]]:shadow-2xs [&_[role="group"]]:outline [&_[role="group"]]:outline-transparent [&_[role="group"]]:transition-all aria-invalid:[&_[role="group"]]:bg-error-container aria-invalid:[&_[role="group"]]:outline-error-border aria-invalid:[&_[role="group"]]:focus-within:outline-error-border-strong aria-invalid:[&_[role="group"]]:not-focus-within:hover:outline-error-border data-[disabled]:[&_[role="group"]]:cursor-not-allowed data-[invalid]:[&_[role="group"]]:bg-error-container data-[invalid]:[&_[role="group"]]:outline-error-border data-[invalid]:[&_[role="group"]]:focus-within:outline-error-border-strong data-[invalid]:[&_[role="group"]]:not-focus-within:hover:outline-error-border aria-invalid:[&_input]:text-error-on-container aria-invalid:[&_input]:caret-error-border-strong data-[invalid]:[&_input]:text-error-on-container data-[invalid]:[&_input]:caret-error-border-strong',
  {
    variants: {
      size: {
        small: 'h-lg [&_input]:style-text-default--1',
        medium: 'h-xl [&_input]:style-text-default-0',
        large: 'h-2xl [&_input]:style-text-default-1',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export type NumberFieldTypesProps = React.ComponentProps<typeof BaseNumberField.Root> &
  VariantProps<typeof numberFieldVariants> & {
    label?: string
  }
