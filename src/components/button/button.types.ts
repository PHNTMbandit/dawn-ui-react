import { cva, type VariantProps } from 'class-variance-authority'

import type { Button as BaseButton } from '@base-ui/react'

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition-all select-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      tone: {
        brand: '',
        accent: '',
        neutral: '',
        error: '',
        info: '',
        warning: '',
        success: '',
      },
      variant: {
        fill: 'active:scale-[0.98]',
        outline: 'border active:scale-[0.98]',
        ghost: 'active:scale-[0.98]',
        soft: 'border active:scale-[0.98]',
        elevated: 'shadow-xs not-active:hover:shadow-md',
      },
      size: {
        large: 'h-2xl gap-xs rounded-2xl px-md style-text-default-2 [&>svg]:size-md',
        medium: 'h-xl gap-2xs rounded-xl px-sm style-text-default-0 [&>svg]:size-sm',
        small: 'h-lg gap-3xs rounded-lg px-xs style-text-default--1 [&>svg]:size-xs',
        extraSmall: 'h-md gap-3xs rounded-md px-2xs style-text-default--2 [&>svg]:size-xs',
        iconLarge: 'size-2xl rounded-2xl p-[0px] [&>svg]:size-md',
        iconMedium: 'size-xl rounded-xl p-[0px] [&>svg]:size-sm',
        iconSmall: 'size-lg rounded-lg p-[0px] [&>svg]:size-xs',
        iconExtraSmall: 'size-md rounded-md p-[0px] [&>svg]:size-xs',
      },
    },
    defaultVariants: {
      tone: 'brand',
      variant: 'fill',
      size: 'medium',
    },
    compoundVariants: [
      {
        variant: 'fill',
        tone: 'brand',
        className: 'bg-brand-default text-brand-on-default hover:bg-brand-muted',
      },
      {
        variant: 'fill',
        tone: 'accent',
        className: 'bg-accent-default text-accent-on-default hover:bg-accent-muted',
      },
      {
        variant: 'fill',
        tone: 'neutral',
        className: 'bg-neutral-default text-neutral-on-default hover:bg-neutral-muted',
      },
      {
        variant: 'fill',
        tone: 'error',
        className: 'bg-error-default text-error-on-default hover:bg-error-muted',
      },
      {
        variant: 'fill',
        tone: 'info',
        className: 'bg-info-default text-info-on-default hover:bg-info-muted',
      },
      {
        variant: 'fill',
        tone: 'success',
        className: 'bg-success-default text-success-on-default hover:bg-success-muted',
      },
      {
        variant: 'fill',
        tone: 'warning',
        className: 'bg-warning-default text-warning-on-default hover:bg-warning-muted',
      },
      {
        variant: 'outline',
        tone: 'brand',
        className:
          'border-brand-border text-brand-default hover:bg-brand-subtle hover:text-brand-on-container',
      },
      {
        variant: 'outline',
        tone: 'accent',
        className:
          'border-accent-border text-accent-default hover:bg-accent-subtle hover:text-accent-on-container',
      },
      {
        variant: 'outline',
        tone: 'neutral',
        className:
          'border-neutral-border text-neutral-default hover:bg-neutral-subtle hover:text-neutral-on-container',
      },
      {
        variant: 'outline',
        tone: 'error',
        className:
          'border-error-border text-error-default hover:bg-error-subtle hover:text-error-on-container',
      },
      {
        variant: 'outline',
        tone: 'info',
        className:
          'border-info-border text-info-default hover:bg-info-subtle hover:text-info-on-container',
      },
      {
        variant: 'outline',
        tone: 'success',
        className:
          'border-success-border text-success-default hover:bg-success-subtle hover:text-success-on-container',
      },
      {
        variant: 'outline',
        tone: 'warning',
        className:
          'border-warning-border text-warning-default hover:bg-warning-subtle hover:text-warning-on-container',
      },
      {
        variant: 'ghost',
        tone: 'brand',
        className: 'text-brand-default hover:bg-brand-subtle hover:text-brand-on-container',
      },
      {
        variant: 'ghost',
        tone: 'accent',
        className: 'text-accent-default hover:bg-accent-subtle hover:text-accent-on-container',
      },
      {
        variant: 'ghost',
        tone: 'neutral',
        className: 'text-neutral-default hover:bg-neutral-subtle hover:text-neutral-on-container',
      },
      {
        variant: 'ghost',
        tone: 'error',
        className: 'text-error-default hover:bg-error-subtle hover:text-error-on-container',
      },
      {
        variant: 'ghost',
        tone: 'info',
        className: 'text-info-default hover:bg-info-subtle hover:text-info-on-container',
      },
      {
        variant: 'ghost',
        tone: 'success',
        className: 'text-success-default hover:bg-success-subtle hover:text-success-on-container',
      },
      {
        variant: 'ghost',
        tone: 'warning',
        className: 'text-warning-default hover:bg-warning-subtle hover:text-warning-on-container',
      },
      {
        variant: 'soft',
        tone: 'brand',
        className:
          'border-brand-border bg-brand-container text-brand-on-container hover:border-brand-border-strong hover:bg-brand-container-high',
      },
      {
        variant: 'soft',
        tone: 'accent',
        className:
          'border-accent-border bg-accent-container text-accent-on-container hover:border-accent-border-strong hover:bg-accent-container-high',
      },
      {
        variant: 'soft',
        tone: 'neutral',
        className:
          'border-neutral-border bg-neutral-container text-neutral-on-container hover:border-neutral-border-strong hover:bg-neutral-container-high',
      },
      {
        variant: 'soft',
        tone: 'error',
        className:
          'border-error-border bg-error-container text-error-on-container hover:border-error-border-strong hover:bg-error-container-high',
      },
      {
        variant: 'soft',
        tone: 'info',
        className:
          'border-info-border bg-info-container text-info-on-container hover:border-info-border-strong hover:bg-info-container-high',
      },
      {
        variant: 'soft',
        tone: 'success',
        className:
          'border-success-border bg-success-container text-success-on-container hover:border-success-border-strong hover:bg-success-container-high',
      },
      {
        variant: 'soft',
        tone: 'warning',
        className:
          'border-warning-border bg-warning-container text-warning-on-container hover:border-warning-border-strong hover:bg-warning-container-high',
      },
      {
        variant: 'elevated',
        tone: 'brand',
        className:
          'bg-brand-container text-brand-on-container not-active:hover:bg-brand-container-high',
      },
      {
        variant: 'elevated',
        tone: 'accent',
        className:
          'bg-accent-container text-accent-on-container not-active:hover:bg-accent-container-high',
      },
      {
        variant: 'elevated',
        tone: 'neutral',
        className: 'bg-surface-2 text-on-surface not-active:hover:bg-surface-3',
      },
      {
        variant: 'elevated',
        tone: 'error',
        className:
          'bg-error-container text-error-on-container not-active:hover:bg-error-container-high',
      },
      {
        variant: 'elevated',
        tone: 'info',
        className:
          'bg-info-container text-info-on-container not-active:hover:bg-info-container-high',
      },
      {
        variant: 'elevated',
        tone: 'success',
        className:
          'bg-success-container text-success-on-container not-active:hover:bg-success-container-high',
      },
      {
        variant: 'elevated',
        tone: 'warning',
        className:
          'bg-warning-container text-warning-on-container not-active:hover:bg-warning-container-high',
      },
    ],
  },
)

export type ButtonProps = React.ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants>
