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
    variant: {
      default:
        'space-y-2xs [&_[role=presentation]]:top-1/2 [&_[role=presentation]]:rounded-lg [&_[role=presentation]]:bg-brand-default [&_[role=tab]]:rounded-lg [&_[role=tab]]:px-sm [&_[role=tab]]:style-text-default-0 [&_[role=tab]]:data-active:text-brand-on-default [&_[role=tablist]]:h-xl [&_[role=tablist]]:gap-xs [&_[role=tablist]]:rounded-lg [&_[role=tablist]]:bg-surface-low [&_[role=tablist]]:p-3xs [&_[role=tab]]:hover:[&:not([data-active])]:text-brand-default',
      ghost:
        'space-y-2xs [&_[role=presentation]]:top-1/2 [&_[role=presentation]]:rounded-lg [&_[role=presentation]]:bg-brand-default [&_[role=tab]]:h-xl [&_[role=tab]]:rounded-lg [&_[role=tab]]:px-sm [&_[role=tab]]:style-text-default-0 [&_[role=tab]]:data-active:text-brand-on-default [&_[role=tablist]]:gap-xs [&_[role=tablist]]:rounded-lg [&_[role=tab]]:hover:[&:not([data-active])]:text-brand-default',
      underline:
        'space-y-2xs [&_[role=presentation]]:bg-brand-default [&_[role=tab]]:px-md [&_[role=tab]]:style-text-default-0 [&_[role=tab]]:data-active:text-brand-default [&_[role=tablist]]:h-xl [&_[role=tablist]]:gap-lg [&_[role=tablist]]:border-b-3 [&_[role=tablist]]:border-border **:[[role=presentation]]:bottom-[-4px] **:[[role=presentation]]:h-[3px] [&_[role=tab]]:hover:[&:not([data-active])]:text-brand-default',
    },
    fill: {
      true: '[&_[role=tab]]:grow [&_[role=tablist]]:w-full',
      false: '[&_[role=tablist]]:w-fit',
    },
  },
  defaultVariants: {
    variant: 'default',
    fill: true,
  },
})

export type TabsProps = React.ComponentProps<typeof BaseTabs.Root> &
  VariantProps<typeof tabsVariants>
