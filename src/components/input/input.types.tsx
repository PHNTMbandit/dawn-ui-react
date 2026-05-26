import { cva } from 'class-variance-authority'

import type { Input as BaseInput } from '@base-ui/react/input'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

export const inputVariants = cva(
  'group flex w-full items-center rounded-full leading-0 text-ellipsis caret-brand-border-strong outline outline-transparent transition-all placeholder:opacity-60 focus-within:outline-brand-border-strong not-focus-within:hover:outline-border-strong disabled:cursor-not-allowed aria-invalid:bg-error-container aria-invalid:text-error-on-container aria-invalid:caret-error-border-strong aria-invalid:outline-error-border aria-invalid:focus-within:outline-error-border-strong aria-invalid:not-focus-within:hover:outline-error-border data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-surface shadow-2xs',
        secondary: 'bg-surface-low',
      },
      size: {
        small: 'h-lg gap-3xs px-xs style-text-prose--1',
        medium: 'h-xl gap-2xs px-sm style-text-prose-0',
        large: 'h-2xl gap-xs px-md style-text-prose-1',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
)

export type InputProps = VariantProps<typeof inputVariants> &
  Omit<ComponentProps<typeof BaseInput>, 'size'>
