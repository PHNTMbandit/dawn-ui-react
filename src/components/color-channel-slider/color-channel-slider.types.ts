import { Slider as BaseSlider } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

export type ColorChannelSliderProps = React.ComponentProps<typeof BaseSlider.Root> &
  VariantProps<typeof colorChannelSliderVariants> & {
    trackStyle: string[]
  }

export const colorChannelSliderVariants = cva('flex flex-col gap-xs', {
  variants: {
    size: {
      small:
        "[&_[data-slot='slider-thumb']]:size-sm [&_[data-slot='slider-thumb']]:border-4 [&_[data-slot='slider-thumb'][data-dragging]]:size-sm [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-xs [&_[data-slot='slider-track'][data-orientation='vertical']]:w-3xs",
      medium:
        "[&_[data-slot='slider-thumb']]:size-md [&_[data-slot='slider-thumb']]:border-4 [&_[data-slot='slider-thumb'][data-dragging]]:size-md [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-sm [&_[data-slot='slider-track'][data-orientation='vertical']]:w-2xs",
      large:
        "[&_[data-slot='slider-thumb']]:size-lg [&_[data-slot='slider-thumb']]:border-4 [&_[data-slot='slider-thumb'][data-dragging]]:size-lg [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-md [&_[data-slot='slider-track'][data-orientation='vertical']]:w-xs",
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})
