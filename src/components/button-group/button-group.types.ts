import { cva } from 'class-variance-authority'

import type { VariantProps } from 'class-variance-authority'

export const buttonGroupVariants = cva(
  'inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full whitespace-nowrap transition-all select-none *:rounded-none *:bg-transparent disabled:pointer-events-none disabled:opacity-50 [&>button]:text-inherit',
  {
    variants: {
      size: {
        large:
          '*:style-text-default-2 [&>button]:h-2xl [&>button]:px-md [&>button]:[&>svg]:size-lg',
        medium:
          '*:style-text-default-0 [&>button]:h-xl [&>button]:px-sm [&>button]:[&>svg]:size-md',
        small:
          '*:style-text-default--1 [&>button]:h-lg [&>button]:px-xs [&>button]:[&>svg]:size-sm',
        extraSmall:
          '*:style-text-default--2 [&>button]:h-md [&>button]:px-2xs [&>button]:[&>svg]:size-xs',
        iconLarge: '*:size-2xl [&>button]:size-2xl [&>button]:p-[0px] [&>button]:[&>svg]:size-lg',
        iconMedium: '*:size-xl [&>button]:size-xl [&>button]:p-[0px] [&>button]:[&>svg]:size-md',
        iconSmall: '*:size-lg [&>button]:size-lg [&>button]:p-[0px] [&>button]:[&>svg]:size-sm',
        iconExtraSmall:
          '*:size-md [&>button]:size-md [&>button]:p-[0px] [&>button]:[&>svg]:size-xs',
      },
      variant: {
        fill: '',
        outline: 'border',
        ghost: '',
        soft: 'border',
        elevated: 'shadow-xs *:active:scale-100!',
      },
      tone: {
        brand: '[&>*+*]:before:bg-brand-border',
        accent: '[&>*+*]:before:bg-accent-border',
        neutral: '[&>*+*]:before:bg-neutral-border',
        error: '[&>*+*]:before:bg-error-border',
        info: '[&>*+*]:before:bg-info-border',
        success: '[&>*+*]:before:bg-success-border',
        warning: '',
      },
      orientation: {
        horizontal:
          '[&>*+*]:relative [&>*+*]:before:absolute [&>*+*]:before:top-1/2 [&>*+*]:before:left-0 [&>*+*]:before:h-1/2 [&>*+*]:before:w-px [&>*+*]:before:-translate-y-1/2 [&>*+*]:before:content-[""]',
        vertical:
          'flex-col [&>*+*]:relative [&>*+*]:before:absolute [&>*+*]:before:top-0 [&>*+*]:before:left-1/2 [&>*+*]:before:h-px [&>*+*]:before:w-1/2 [&>*+*]:before:-translate-x-1/2 [&>*+*]:before:content-[""]',
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'fill',
      tone: 'brand',
      orientation: 'horizontal',
    },
    compoundVariants: [
      {
        variant: 'fill',
        tone: 'brand',
        className: 'bg-brand-default text-brand-on-default [&>button:hover]:bg-brand-muted',
      },
      {
        variant: 'fill',
        tone: 'accent',
        className: 'bg-accent-default text-accent-on-default [&>button:hover]:bg-accent-muted',
      },
      {
        variant: 'fill',
        tone: 'neutral',
        className: 'bg-neutral-default text-neutral-on-default [&>button:hover]:bg-neutral-muted',
      },
      {
        variant: 'fill',
        tone: 'error',
        className: 'bg-error-default text-error-on-default [&>button:hover]:bg-error-muted',
      },
      {
        variant: 'fill',
        tone: 'info',
        className: 'bg-info-default text-info-on-default [&>button:hover]:bg-info-muted',
      },
      {
        variant: 'fill',
        tone: 'success',
        className: 'bg-success-default text-success-on-default [&>button:hover]:bg-success-muted',
      },
      {
        variant: 'fill',
        tone: 'warning',
        className: 'bg-warning-default text-warning-on-default [&>button:hover]:bg-warning-muted',
      },
      {
        variant: 'outline',
        tone: 'brand',
        className:
          'border-brand-border text-brand-default [&>button:hover]:bg-brand-subtle [&>button:hover]:text-brand-on-container',
      },
      {
        variant: 'outline',
        tone: 'accent',
        className:
          'border-accent-border text-accent-default [&>button:hover]:bg-accent-subtle [&>button:hover]:text-accent-on-container',
      },
      {
        variant: 'outline',
        tone: 'neutral',
        className:
          'border-neutral-border text-neutral-default [&>button:hover]:bg-neutral-subtle [&>button:hover]:text-neutral-on-container',
      },
      {
        variant: 'outline',
        tone: 'error',
        className:
          'border-error-border text-error-default [&>button:hover]:bg-error-subtle [&>button:hover]:text-error-on-container',
      },
      {
        variant: 'outline',
        tone: 'info',
        className:
          'border-info-border text-info-default [&>button:hover]:bg-info-subtle [&>button:hover]:text-info-on-container',
      },
      {
        variant: 'outline',
        tone: 'success',
        className:
          'border-success-border text-success-default [&>button:hover]:bg-success-subtle [&>button:hover]:text-success-on-container',
      },
      {
        variant: 'outline',
        tone: 'warning',
        className:
          'border-warning-border text-warning-default [&>button:hover]:bg-warning-subtle [&>button:hover]:text-warning-on-container',
      },
      {
        variant: 'ghost',
        tone: 'brand',
        className:
          'text-brand-default [&>button:hover]:bg-brand-subtle [&>button:hover]:text-brand-on-container',
      },
      {
        variant: 'ghost',
        tone: 'accent',
        className:
          'text-accent-default [&>button:hover]:bg-accent-subtle [&>button:hover]:text-accent-on-container',
      },
      {
        variant: 'ghost',
        tone: 'neutral',
        className:
          'text-neutral-default [&>button:hover]:bg-neutral-subtle [&>button:hover]:text-neutral-on-container',
      },
      {
        variant: 'ghost',
        tone: 'error',
        className:
          'text-error-default [&>button:hover]:bg-error-subtle [&>button:hover]:text-error-on-container',
      },
      {
        variant: 'ghost',
        tone: 'info',
        className:
          'text-info-default [&>button:hover]:bg-info-subtle [&>button:hover]:text-info-on-container',
      },
      {
        variant: 'ghost',
        tone: 'success',
        className:
          'text-success-default [&>button:hover]:bg-success-subtle [&>button:hover]:text-success-on-container',
      },
      {
        variant: 'ghost',
        tone: 'warning',
        className:
          'text-warning-default [&>button:hover]:bg-warning-subtle [&>button:hover]:text-warning-on-container',
      },
      {
        variant: 'soft',
        tone: 'brand',
        className:
          'border-brand-border bg-brand-container text-brand-on-container [&>button:hover]:bg-brand-container-high',
      },
      {
        variant: 'soft',
        tone: 'accent',
        className:
          'border-accent-border bg-accent-container text-accent-on-container [&>button:hover]:bg-accent-container-high',
      },
      {
        variant: 'soft',
        tone: 'neutral',
        className:
          'border-neutral-border bg-neutral-container text-neutral-on-container [&>button:hover]:bg-neutral-container-high',
      },
      {
        variant: 'soft',
        tone: 'error',
        className:
          'border-error-border bg-error-container text-error-on-container [&>button:hover]:bg-error-container-high',
      },
      {
        variant: 'soft',
        tone: 'info',
        className:
          'border-info-border bg-info-container text-info-on-container [&>button:hover]:bg-info-container-high',
      },
      {
        variant: 'soft',
        tone: 'success',
        className:
          'border-success-border bg-success-container text-success-on-container [&>button:hover]:bg-success-container-high',
      },
      {
        variant: 'soft',
        tone: 'warning',
        className:
          'border-warning-border bg-warning-container text-warning-on-container [&>button:hover]:bg-warning-container-high',
      },
      {
        variant: 'elevated',
        tone: 'brand',
        className:
          'bg-brand-container text-brand-on-container [&>button]:not-active:hover:bg-brand-container-high [&>button]:active:bg-brand-container',
      },
      {
        variant: 'elevated',
        tone: 'accent',
        className:
          'bg-accent-container text-accent-on-container [&>button]:not-active:hover:bg-accent-container-high [&>button]:active:bg-accent-container',
      },
      {
        variant: 'elevated',
        tone: 'neutral',
        className:
          'bg-surface text-on-surface [&>button]:not-active:hover:bg-neutral-container [&>button]:not-active:hover:text-neutral-on-container [&>button]:active:bg-surface',
      },
      {
        variant: 'elevated',
        tone: 'error',
        className:
          'bg-error-container text-error-on-container [&>button]:not-active:hover:bg-error-container-high [&>button]:active:bg-error-container',
      },
      {
        variant: 'elevated',
        tone: 'info',
        className:
          'bg-info-container text-info-on-container [&>button]:not-active:hover:bg-info-container-high [&>button]:active:bg-info-container',
      },
      {
        variant: 'elevated',
        tone: 'success',
        className:
          'bg-success-container text-success-on-container [&>button]:not-active:hover:bg-success-container-high [&>button]:active:bg-success-container',
      },
      {
        variant: 'elevated',
        tone: 'warning',
        className:
          'bg-warning-container text-warning-on-container [&>button]:not-active:hover:bg-warning-container-high [&>button]:active:bg-warning-container',
      },
    ],
  },
)

export type ButtonGroupProps = React.ComponentProps<'div'> &
  VariantProps<typeof buttonGroupVariants>
