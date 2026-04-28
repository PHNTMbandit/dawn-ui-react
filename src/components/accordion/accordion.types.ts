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
  'group transition-all data-disabled:pointer-events-none data-disabled:opacity-50 [&_[data-trigger]]:[&>svg]:transition-colors',
  {
    variants: {
      tone: {
        brand:
          '[&_[data-subtitle]]:text-brand-muted [&_[data-title]]:text-brand-default [&:not([data-open])]:hover:bg-brand-container [&:not([data-open])]:hover:[&_[data-subtitle]]:text-brand-on-container-muted [&:not([data-open])]:hover:[&_[data-title]]:text-brand-on-container [&_[data-trigger]]:[&>svg]:text-brand-default [&:not([data-open])]:hover:[&_[data-trigger]]:[&>svg]:text-brand-on-container',
        accent:
          '[&_[data-subtitle]]:text-accent-muted [&_[data-title]]:text-accent-default [&:not([data-open])]:hover:bg-accent-container [&:not([data-open])]:hover:[&_[data-subtitle]]:text-accent-on-container-muted [&:not([data-open])]:hover:[&_[data-title]]:text-accent-on-container [&_[data-trigger]]:[&>svg]:text-accent-default [&:not([data-open])]:hover:[&_[data-trigger]]:[&>svg]:text-accent-on-container',
        neutral:
          '[&_[data-subtitle]]:text-neutral-muted [&_[data-title]]:text-neutral-default [&:not([data-open])]:hover:bg-neutral-container [&:not([data-open])]:hover:[&_[data-subtitle]]:text-neutral-on-container-muted [&:not([data-open])]:hover:[&_[data-title]]:text-neutral-on-container [&_[data-trigger]]:[&>svg]:text-neutral-default [&:not([data-open])]:hover:[&_[data-trigger]]:[&>svg]:text-neutral-on-container',
        error:
          '[&_[data-subtitle]]:text-error-muted [&_[data-title]]:text-error-default [&:not([data-open])]:hover:bg-error-container [&:not([data-open])]:hover:[&_[data-subtitle]]:text-error-on-container-muted [&:not([data-open])]:hover:[&_[data-title]]:text-error-on-container [&_[data-trigger]]:[&>svg]:text-error-default [&:not([data-open])]:hover:[&_[data-trigger]]:[&>svg]:text-error-on-container',
        info: '[&_[data-subtitle]]:text-info-muted [&_[data-title]]:text-info-default [&:not([data-open])]:hover:bg-info-container [&:not([data-open])]:hover:[&_[data-subtitle]]:text-info-on-container-muted [&:not([data-open])]:hover:[&_[data-title]]:text-info-on-container [&_[data-trigger]]:[&>svg]:text-info-default [&:not([data-open])]:hover:[&_[data-trigger]]:[&>svg]:text-info-on-container',
        success:
          '[&_[data-subtitle]]:text-success-muted [&_[data-title]]:text-success-default [&:not([data-open])]:hover:bg-success-container [&:not([data-open])]:hover:[&_[data-subtitle]]:text-success-on-container-muted [&:not([data-open])]:hover:[&_[data-title]]:text-success-on-container [&_[data-trigger]]:[&>svg]:text-success-default [&:not([data-open])]:hover:[&_[data-trigger]]:[&>svg]:text-success-on-container',
        warning:
          '[&_[data-subtitle]]:text-warning-muted [&_[data-title]]:text-warning-default [&:not([data-open])]:hover:bg-warning-container [&:not([data-open])]:hover:[&_[data-subtitle]]:text-warning-on-container-muted [&:not([data-open])]:hover:[&_[data-title]]:text-warning-on-container [&_[data-trigger]]:[&>svg]:text-warning-default [&:not([data-open])]:hover:[&_[data-trigger]]:[&>svg]:text-warning-on-container',
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
export type AccordionTriggerProps = React.ComponentProps<typeof BaseAccordion.Trigger>
