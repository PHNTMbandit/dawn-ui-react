import { cva, type VariantProps } from 'class-variance-authority'

import type { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import type React from 'react'

export type AccordionProps = React.ComponentProps<typeof BaseAccordion.Root> &
  VariantProps<typeof accordionVariants> & {
    withSeparator?: boolean
  }

export type AccordionPanelProps = React.ComponentProps<typeof BaseAccordion.Panel>

export const accordionVariants = cva('flex flex-col justify-center', {
  variants: {
    variant: {
      ghost: 'bg-transparent',
      surface: 'overflow-hidden rounded-xl bg-surface shadow-2xs',
    },
  },
  defaultVariants: {
    variant: 'surface',
  },
})

export const accordionItemVariants = cva(
  'group transition-all data-disabled:pointer-events-none data-disabled:opacity-50',
  {
    variants: {
      tone: {
        brand:
          '[&_[data-slot=accordion-icon]]:text-brand-default [&_[data-slot=accordion-subtitle]]:text-brand-muted [&_[data-slot=accordion-title]]:text-brand-default [&:not([data-open])]:hover:bg-brand-container [&:not([data-open])]:hover:[&_[data-slot=accordion-icon]]:text-brand-on-container [&:not([data-open])]:hover:[&_[data-slot=accordion-subtitle]]:text-brand-on-container-muted [&:not([data-open])]:hover:[&_[data-slot=accordion-title]]:text-brand-on-container',
        accent:
          '[&_[data-slot=accordion-icon]]:text-accent-default [&_[data-slot=accordion-subtitle]]:text-accent-muted [&_[data-slot=accordion-title]]:text-accent-default [&:not([data-open])]:hover:bg-accent-container [&:not([data-open])]:hover:[&_[data-slot=accordion-icon]]:text-accent-on-container [&:not([data-open])]:hover:[&_[data-slot=accordion-subtitle]]:text-accent-on-container-muted [&:not([data-open])]:hover:[&_[data-slot=accordion-title]]:text-accent-on-container',
        neutral:
          '[&_[data-slot=accordion-icon]]:text-neutral-default [&_[data-slot=accordion-subtitle]]:text-neutral-muted [&_[data-slot=accordion-title]]:text-neutral-default [&:not([data-open])]:hover:bg-neutral-container [&:not([data-open])]:hover:[&_[data-slot=accordion-icon]]:text-neutral-on-container [&:not([data-open])]:hover:[&_[data-slot=accordion-subtitle]]:text-neutral-on-container-muted [&:not([data-open])]:hover:[&_[data-slot=accordion-title]]:text-neutral-on-container',
        error:
          '[&_[data-slot=accordion-icon]]:text-error-default [&_[data-slot=accordion-subtitle]]:text-error-muted [&_[data-slot=accordion-title]]:text-error-default [&:not([data-open])]:hover:bg-error-container [&:not([data-open])]:hover:[&_[data-slot=accordion-icon]]:text-error-on-container [&:not([data-open])]:hover:[&_[data-slot=accordion-subtitle]]:text-error-on-container-muted [&:not([data-open])]:hover:[&_[data-slot=accordion-title]]:text-error-on-container',
        info: '[&_[data-slot=accordion-icon]]:text-info-default [&_[data-slot=accordion-subtitle]]:text-info-muted [&_[data-slot=accordion-title]]:text-info-default [&:not([data-open])]:hover:bg-info-container [&:not([data-open])]:hover:[&_[data-slot=accordion-icon]]:text-info-on-container [&:not([data-open])]:hover:[&_[data-slot=accordion-subtitle]]:text-info-on-container-muted [&:not([data-open])]:hover:[&_[data-slot=accordion-title]]:text-info-on-container',
        success:
          '[&_[data-slot=accordion-icon]]:text-success-default [&_[data-slot=accordion-subtitle]]:text-success-muted [&_[data-slot=accordion-title]]:text-success-default [&:not([data-open])]:hover:bg-success-container [&:not([data-open])]:hover:[&_[data-slot=accordion-icon]]:text-success-on-container [&:not([data-open])]:hover:[&_[data-slot=accordion-subtitle]]:text-success-on-container-muted [&:not([data-open])]:hover:[&_[data-slot=accordion-title]]:text-success-on-container',
        warning:
          '[&_[data-slot=accordion-icon]]:text-warning-default [&_[data-slot=accordion-subtitle]]:text-warning-muted [&_[data-slot=accordion-title]]:text-warning-default [&:not([data-open])]:hover:bg-warning-container [&:not([data-open])]:hover:[&_[data-slot=accordion-icon]]:text-warning-on-container [&:not([data-open])]:hover:[&_[data-slot=accordion-subtitle]]:text-warning-on-container-muted [&:not([data-open])]:hover:[&_[data-slot=accordion-title]]:text-warning-on-container',
      },
    },
    defaultVariants: {
      tone: 'brand',
    },
  },
)

export type AccordionItemProps = React.ComponentProps<typeof BaseAccordion.Item> &
  VariantProps<typeof accordionItemVariants>
export type AccordionHeaderProps = React.ComponentProps<typeof BaseAccordion.Header>
export type AccordionTitleProps = React.ComponentProps<'div'>
export type AccordionSubtitleProps = React.ComponentProps<'div'>
export type AccordionIconProps = React.ComponentProps<'div'>
