import { cva } from 'class-variance-authority'

import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

export const badgeVariants = cva(
  'inline-flex items-center justify-center gap-3xs rounded-full style-text-default--2 whitespace-nowrap transition-all select-none',
  {
    variants: {
      size: {
        small: 'h-sm px-xs [&>svg]:size-2xs',
        medium: 'h-md px-xs [&>svg]:size-xs',
        large: 'h-lg px-xs [&>svg]:size-sm',
        iconSmall: 'size-sm [&>svg]:size-2xs',
        iconMedium: 'size-md [&>svg]:size-xs',
        iconLarge: 'size-lg [&>svg]:size-sm',
      },
      tone: {
        brand: '',
        accent: '',
        neutral: '',
        error: '',
        info: '',
        success: '',
        warning: '',
      },
      variant: {
        fill: 'shadow-2xs',
        outline: 'border',
        soft: 'border',
      },
    },
    defaultVariants: {
      size: 'medium',
      tone: 'brand',
      variant: 'fill',
    },
    compoundVariants: [
      {
        variant: 'fill',
        tone: 'brand',
        className: 'bg-brand-default text-brand-on-default',
      },
      {
        variant: 'fill',
        tone: 'accent',
        className: 'bg-accent-default text-accent-on-default',
      },
      {
        variant: 'fill',
        tone: 'neutral',
        className: 'bg-neutral-default text-neutral-on-default',
      },
      {
        variant: 'fill',
        tone: 'error',
        className: 'bg-error-default text-error-on-default',
      },
      {
        variant: 'fill',
        tone: 'info',
        className: 'bg-info-default text-info-on-default',
      },
      {
        variant: 'fill',
        tone: 'success',
        className: 'bg-success-default text-success-on-default',
      },
      {
        variant: 'fill',
        tone: 'warning',
        className: 'bg-warning-default text-warning-on-default',
      },
      {
        variant: 'outline',
        tone: 'brand',
        className: 'border-brand-default text-brand-default',
      },
      {
        variant: 'outline',
        tone: 'accent',
        className: 'border-accent-default text-accent-default',
      },
      {
        variant: 'outline',
        tone: 'neutral',
        className: 'border-neutral-default text-neutral-default',
      },
      {
        variant: 'outline',
        tone: 'error',
        className: 'border-error-default text-error-default',
      },
      {
        variant: 'outline',
        tone: 'info',
        className: 'border-info-default text-info-default',
      },
      {
        variant: 'outline',
        tone: 'success',
        className: 'border-success-default text-success-default',
      },
      {
        variant: 'outline',
        tone: 'warning',
        className: 'border-warning-default text-warning-default',
      },
      {
        variant: 'soft',
        tone: 'brand',
        className: 'border-brand-border bg-brand-container text-brand-on-container',
      },
      {
        variant: 'soft',
        tone: 'accent',
        className: 'border-accent-border bg-accent-container text-accent-on-container',
      },
      {
        variant: 'soft',
        tone: 'neutral',
        className: 'border-neutral-border bg-neutral-container text-neutral-on-container',
      },
      {
        variant: 'soft',
        tone: 'error',
        className: 'border-error-border bg-error-container text-error-on-container',
      },
      {
        variant: 'soft',
        tone: 'info',
        className: 'border-info-border bg-info-container text-info-on-container',
      },
      {
        variant: 'soft',
        tone: 'success',
        className: 'border-success-border bg-success-container text-success-on-container',
      },
      {
        variant: 'soft',
        tone: 'warning',
        className: 'border-warning-border bg-warning-container text-warning-on-container',
      },
    ],
  },
)

export type BadgeProps = ComponentProps<'div'> & VariantProps<typeof badgeVariants>
