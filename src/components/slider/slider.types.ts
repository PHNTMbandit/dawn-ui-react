import { cva, type VariantProps } from 'class-variance-authority'

import type { Slider as BaseSlider } from '@base-ui/react'
import type { Icon } from '@phosphor-icons/react'
import type { ComponentProps } from 'react'

export const sliderVariants = cva('flex flex-col gap-xs', {
  variants: {
    size: {
      small:
        "[&_[data-slot='slider-thumb']]:size-xs [&_[data-slot='slider-thumb']]:border [&_[data-slot='slider-thumb'][data-dragging]]:size-sm [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-3xs [&_[data-slot='slider-track'][data-orientation='vertical']]:w-3xs",
      medium:
        "[&_[data-slot='slider-thumb']]:size-sm [&_[data-slot='slider-thumb']]:border-2 [&_[data-slot='slider-thumb'][data-dragging]]:size-md [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-2xs [&_[data-slot='slider-track'][data-orientation='vertical']]:w-2xs",
      large:
        "[&_[data-slot='slider-thumb']]:size-md [&_[data-slot='slider-thumb']]:border-3 [&_[data-slot='slider-thumb'][data-dragging]]:size-lg [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-xs [&_[data-slot='slider-track'][data-orientation='vertical']]:w-xs",
    },
    tone: {
      brand:
        "[&_[data-slot='slider-thumb']]:border-brand-default [&_[data-slot=slider-indicator]]:bg-brand-default [&_[data-slot=slider-track]]:bg-brand-container-high",
      accent:
        "[&_[data-slot='slider-thumb']]:border-accent-default [&_[data-slot=slider-indicator]]:bg-accent-default [&_[data-slot=slider-track]]:bg-accent-container-high",
      neutral:
        "[&_[data-slot='slider-thumb']]:border-neutral-default [&_[data-slot=slider-indicator]]:bg-neutral-default [&_[data-slot=slider-track]]:bg-neutral-container-high",
      error:
        "[&_[data-slot='slider-thumb']]:border-error-default [&_[data-slot=slider-indicator]]:bg-error-default [&_[data-slot=slider-track]]:bg-error-container-high",
      info: "[&_[data-slot='slider-thumb']]:border-info-default [&_[data-slot=slider-indicator]]:bg-info-default [&_[data-slot=slider-track]]:bg-info-container-high",
      success:
        "[&_[data-slot='slider-thumb']]:border-success-default [&_[data-slot=slider-indicator]]:bg-success-default [&_[data-slot=slider-track]]:bg-success-container-high",
      warning:
        "[&_[data-slot='slider-thumb']]:border-warning-default [&_[data-slot=slider-indicator]]:bg-warning-default [&_[data-slot=slider-track]]:bg-warning-container-high",
    },
  },
  defaultVariants: {
    size: 'medium',
    tone: 'brand',
  },
})

export type SliderProps = ComponentProps<typeof BaseSlider.Root> &
  VariantProps<typeof sliderVariants> & {
    label?: string
    description?: string
    leadingIcon?: Icon
    trailingIcon?: Icon
    showMin?: boolean
    showMax?: boolean
    showThumbOnHover?: boolean
  }
export type SliderThumbProps = ComponentProps<typeof BaseSlider.Thumb>
