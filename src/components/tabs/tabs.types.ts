import { cva, type VariantProps } from 'class-variance-authority'

import type { Tabs as BaseTabs } from '@base-ui/react/tabs'
import type { ComponentProps } from 'react'
import type React from 'react'

export type TabsPanelProps = ComponentProps<typeof BaseTabs.Panel>
export type TabsTabProps = ComponentProps<typeof BaseTabs.Tab>
export type TabsIndicatorProps = ComponentProps<typeof BaseTabs.Indicator>
export type TabsListProps = ComponentProps<typeof BaseTabs.List>

export const tabsVariants = cva('', {
  variants: {
    size: {
      small: '',
      medium: '',
      large: '',
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
      default:
        'space-y-2xs [&_[role=presentation]]:top-1/2 [&_[role=presentation]]:rounded-full [&_[role=tab]]:rounded-full [&_[role=tablist]]:rounded-full [&_[role=tablist]]:bg-surface-low',
      ghost:
        'space-y-2xs [&_[role=presentation]]:top-1/2 [&_[role=presentation]]:rounded-full [&_[role=presentation]]:border [&_[role=tab]]:rounded-full [&_[role=tablist]]:rounded-full',
      underline: 'space-y-2xs [&_[role=tablist]]:border-border',
    },
    fill: {
      true: '[&_[role=tab]]:grow [&_[role=tablist]]:w-full',
      false: '[&_[role=tablist]]:w-fit',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      tone: 'brand',
      class:
        '[&_[role=presentation]]:bg-brand-default [&_[role=tab]]:data-active:text-brand-on-default [&_[role=tab]]:hover:[&:not([data-active])]:text-brand-default',
    },
    {
      variant: 'default',
      tone: 'accent',
      class:
        '[&_[role=presentation]]:bg-accent-default [&_[role=tab]]:data-active:text-accent-on-default [&_[role=tab]]:hover:[&:not([data-active])]:text-accent-default',
    },
    {
      variant: 'default',
      tone: 'neutral',
      class:
        '[&_[role=presentation]]:bg-neutral-default [&_[role=tab]]:data-active:text-neutral-on-default [&_[role=tab]]:hover:[&:not([data-active])]:text-neutral-default',
    },
    {
      variant: 'default',
      tone: 'error',
      class:
        '[&_[role=presentation]]:bg-error-default [&_[role=tab]]:data-active:text-error-on-default [&_[role=tab]]:hover:[&:not([data-active])]:text-error-default',
    },
    {
      variant: 'default',
      tone: 'neutral',
      class:
        '[&_[role=presentation]]:bg-neutral-default [&_[role=tab]]:data-active:text-neutral-on-default [&_[role=tab]]:hover:[&:not([data-active])]:text-neutral-default',
    },
    {
      variant: 'default',
      tone: 'info',
      class:
        '[&_[role=presentation]]:bg-info-default [&_[role=tab]]:data-active:text-info-on-default [&_[role=tab]]:hover:[&:not([data-active])]:text-info-default',
    },
    {
      variant: 'default',
      tone: 'success',
      class:
        '[&_[role=presentation]]:bg-success-default [&_[role=tab]]:data-active:text-success-on-default [&_[role=tab]]:hover:[&:not([data-active])]:text-success-default',
    },
    {
      variant: 'default',
      tone: 'warning',
      class:
        '[&_[role=presentation]]:bg-warning-default [&_[role=tab]]:data-active:text-warning-on-default [&_[role=tab]]:hover:[&:not([data-active])]:text-warning-default',
    },
    {
      variant: 'ghost',
      tone: 'brand',
      class:
        '[&_[role=presentation]]:border-brand-border [&_[role=presentation]]:bg-brand-container [&_[role=tab]]:data-active:text-brand-on-container [&_[role=tab]]:hover:[&:not([data-active])]:text-brand-default',
    },
    {
      variant: 'ghost',
      tone: 'accent',
      class:
        '[&_[role=presentation]]:border-accent-border [&_[role=presentation]]:bg-accent-container [&_[role=tab]]:data-active:text-accent-on-container [&_[role=tab]]:hover:[&:not([data-active])]:text-accent-default',
    },
    {
      variant: 'ghost',
      tone: 'neutral',
      class:
        '[&_[role=presentation]]:border-neutral-border [&_[role=presentation]]:bg-neutral-container [&_[role=tab]]:data-active:text-neutral-on-container [&_[role=tab]]:hover:[&:not([data-active])]:text-neutral-default',
    },
    {
      variant: 'ghost',
      tone: 'error',
      class:
        '[&_[role=presentation]]:border-error-border [&_[role=presentation]]:bg-error-container [&_[role=tab]]:data-active:text-error-on-container [&_[role=tab]]:hover:[&:not([data-active])]:text-error-default',
    },
    {
      variant: 'ghost',
      tone: 'info',
      class:
        '[&_[role=presentation]]:border-info-border [&_[role=presentation]]:bg-info-container [&_[role=tab]]:data-active:text-info-on-container [&_[role=tab]]:hover:[&:not([data-active])]:text-info-default',
    },
    {
      variant: 'ghost',
      tone: 'success',
      class:
        '[&_[role=presentation]]:border-success-border [&_[role=presentation]]:bg-success-container [&_[role=tab]]:data-active:text-success-on-container [&_[role=tab]]:hover:[&:not([data-active])]:text-success-default',
    },
    {
      variant: 'ghost',
      tone: 'warning',
      class:
        '[&_[role=presentation]]:border-warning-border [&_[role=presentation]]:bg-warning-container [&_[role=tab]]:data-active:text-warning-on-container [&_[role=tab]]:hover:[&:not([data-active])]:text-warning-default',
    },
    {
      variant: 'underline',
      tone: 'brand',
      class:
        '[&_[role=presentation]]:bg-brand-default [&_[role=tab]]:data-active:text-brand-default [&_[role=tab]]:hover:[&:not([data-active])]:text-brand-default',
    },
    {
      variant: 'underline',
      tone: 'accent',
      class:
        '[&_[role=presentation]]:bg-accent-default [&_[role=tab]]:data-active:text-accent-default [&_[role=tab]]:hover:[&:not([data-active])]:text-accent-default',
    },
    {
      variant: 'underline',
      tone: 'neutral',
      class:
        '[&_[role=presentation]]:bg-neutral-default [&_[role=tab]]:data-active:text-neutral-default [&_[role=tab]]:hover:[&:not([data-active])]:text-neutral-default',
    },
    {
      variant: 'underline',
      tone: 'error',
      class:
        '[&_[role=presentation]]:bg-error-default [&_[role=tab]]:data-active:text-error-default [&_[role=tab]]:hover:[&:not([data-active])]:text-error-default',
    },
    {
      variant: 'underline',
      tone: 'info',
      class:
        '[&_[role=presentation]]:bg-info-default [&_[role=tab]]:data-active:text-info-default [&_[role=tab]]:hover:[&:not([data-active])]:text-info-default',
    },
    {
      variant: 'underline',
      tone: 'success',
      class:
        '[&_[role=presentation]]:bg-success-default [&_[role=tab]]:data-active:text-success-default [&_[role=tab]]:hover:[&:not([data-active])]:text-success-default',
    },
    {
      variant: 'underline',
      tone: 'warning',
      class:
        '[&_[role=presentation]]:bg-warning-default [&_[role=tab]]:data-active:text-warning-default [&_[role=tab]]:hover:[&:not([data-active])]:text-warning-default',
    },
    {
      size: 'small',
      variant: 'default',
      class:
        '[&_[role=tab]]:h-lg [&_[role=tab]]:px-sm [&_[role=tab]]:style-text-default--1 [&_[role=tablist]]:gap-2xs [&_[role=tablist]]:p-3xs',
    },
    {
      size: 'medium',
      variant: 'default',
      class:
        '[&_[role=tab]]:h-xl [&_[role=tab]]:px-md [&_[role=tab]]:style-text-default-0 [&_[role=tablist]]:gap-xs [&_[role=tablist]]:p-2xs',
    },
    {
      size: 'large',
      variant: 'default',
      class:
        '[&_[role=tab]]:h-2xl [&_[role=tab]]:px-lg [&_[role=tab]]:style-text-default-1 [&_[role=tablist]]:gap-sm [&_[role=tablist]]:p-xs',
    },
    {
      size: 'small',
      variant: 'ghost',
      class:
        '[&_[role=tab]]:h-lg [&_[role=tab]]:px-sm [&_[role=tab]]:style-text-default--1 [&_[role=tablist]]:gap-2xs [&_[role=tablist]]:p-3xs',
    },
    {
      size: 'medium',
      variant: 'ghost',
      class:
        '[&_[role=tab]]:h-xl [&_[role=tab]]:px-md [&_[role=tab]]:style-text-default-0 [&_[role=tablist]]:gap-xs',
    },
    {
      size: 'large',
      variant: 'ghost',
      class:
        '[&_[role=tab]]:h-2xl [&_[role=tab]]:px-lg [&_[role=tab]]:style-text-default-1 [&_[role=tablist]]:gap-sm [&_[role=tablist]]:p-xs',
    },
    {
      size: 'small',
      variant: 'underline',
      class:
        '[&_[role=tab]]:px-lg [&_[role=tab]]:pb-sm [&_[role=tab]]:style-text-default--1 [&_[role=tablist]]:h-lg [&_[role=tablist]]:gap-md [&_[role=tablist]]:border-b-2 **:[[role=presentation]]:bottom-[-3px] **:[[role=presentation]]:h-[2px]',
    },
    {
      size: 'medium',
      variant: 'underline',
      class:
        '[&_[role=tab]]:px-xl [&_[role=tab]]:pb-xs [&_[role=tab]]:style-text-default-0 [&_[role=tablist]]:h-xl [&_[role=tablist]]:gap-lg [&_[role=tablist]]:border-b-3 **:[[role=presentation]]:bottom-[-4px] **:[[role=presentation]]:h-[3px]',
    },
    {
      size: 'large',
      variant: 'underline',
      class:
        '[&_[role=tab]]:px-2xl [&_[role=tab]]:pb-2xs [&_[role=tab]]:style-text-default-1 [&_[role=tablist]]:h-2xl [&_[role=tablist]]:gap-xl [&_[role=tablist]]:border-b-4 **:[[role=presentation]]:bottom-[-5px] **:[[role=presentation]]:h-[4px]',
    },
  ],
  defaultVariants: {
    fill: false,
    size: 'medium',
    tone: 'brand',
    variant: 'default',
  },
})

export type TabsProps = React.ComponentProps<typeof BaseTabs.Root> &
  VariantProps<typeof tabsVariants>
export type TabsTabValue = TabsTabProps['value']
