import { cva } from 'class-variance-authority'

import type { VariantProps } from 'class-variance-authority'

export const radarPingVariants = cva('absolute top-[0px] right-[0px] flex', {
  variants: {
    tone: {
      brand: '[&_[data-dot]]:bg-brand-default [&_[data-radar-ping]]:bg-brand-default',
      accent: '[&_[data-dot]]:bg-accent-default [&_[data-radar-ping]]:bg-accent-default',
      neutral: '[&_[data-dot]]:bg-neutral-default [&_[data-radar-ping]]:bg-neutral-default',
      info: '[&_[data-dot]]:bg-info-default [&_[data-radar-ping]]:bg-info-default',
      error: '[&_[data-dot]]:bg-error-default [&_[data-radar-ping]]:bg-error-default',
      success: '[&_[data-dot]]:bg-success-default [&_[data-radar-ping]]:bg-success-default',
      warning: '[&_[data-dot]]:bg-warning-default [&_[data-radar-ping]]:bg-warning-default',
    },
    size: {
      small: '-mt-3xs -mr-3xs style-text-default--2 [&_[data-dot]]:size-sm',
      medium: '-mt-2xs -mr-2xs style-text-default--1 [&_[data-dot]]:size-md',
      large: '-mt-xs -mr-xs style-text-default-0 [&_[data-dot]]:size-lg',
    },
  },
  defaultVariants: {
    tone: 'brand',
    size: 'medium',
  },
})

export type RadarPingProps = React.ComponentProps<'div'> &
  VariantProps<typeof radarPingVariants> & {
    hidePing?: boolean
  }
