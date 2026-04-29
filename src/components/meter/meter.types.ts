import { cva } from 'class-variance-authority'

import type { Meter as BaseMeter } from '@base-ui/react'
import type { VariantProps } from 'class-variance-authority'

export type MeterProps = React.ComponentProps<typeof BaseMeter.Root> &
  VariantProps<typeof meterVariants>
export type MeterLabelProps = React.ComponentProps<typeof BaseMeter.Label>
export type MeterValueProps = React.ComponentProps<typeof BaseMeter.Value>
export type MeterTrackProps = React.ComponentProps<typeof BaseMeter.Track>
export type MeterIndicatorProps = React.ComponentProps<typeof BaseMeter.Indicator>
export type MeterHeaderProps = React.ComponentProps<'div'>
export type MeterFooterProps = React.ComponentProps<'div'>
export type MeterSubtitleProps = React.ComponentProps<'span'>

export const meterVariants = cva('', {
  variants: {
    orientation: {
      horizontal:
        'flex items-center justify-between gap-xs [&_[data-track]]:w-full [&_button]:shrink-0',
      vertical: 'flex flex-col space-y-3xs',
    },
    size: {
      small: '[&_[data-track]]:h-3xs',
      medium: '[&_[data-track]]:h-2xs',
      large: '[&_[data-track]]:h-xs',
    },
    tone: {
      brand: '[&_[data-indicator]]:bg-brand-default',
      accent: '[&_[data-indicator]]:bg-accent-default',
      neutral: '[&_[data-indicator]]:bg-neutral-default',
      error: '[&_[data-indicator]]:bg-error-default',
      info: '[&_[data-indicator]]:bg-info-default',
      success: '[&_[data-indicator]]:bg-success-default',
      warning: '[&_[data-indicator]]:bg-warning-default',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    size: 'medium',
    tone: 'brand',
  },
})
