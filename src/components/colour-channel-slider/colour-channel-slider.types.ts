import { Slider as BaseSlider } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

export type ColourChannelSliderProps = React.ComponentProps<typeof BaseSlider.Root> &
  VariantProps<typeof colourChannelSliderVariants> & {
    trackStyle: string[]
  }

export const colourChannelSliderVariants = cva('flex flex-col gap-xs', {
  variants: {
    size: {
      small:
        "[&_[data-slot='slider-thumb']]:size-xs [&_[data-slot='slider-thumb']]:border-2 [&_[data-slot='slider-thumb']]:outline-2 [&_[data-slot='slider-thumb'][data-dragging]]:size-xs [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-2xs [&_[data-slot='slider-track'][data-orientation='vertical']]:w-3xs",
      medium:
        "[&_[data-slot='slider-thumb']]:size-md [&_[data-slot='slider-thumb']]:border-3 [&_[data-slot='slider-thumb']]:outline-4 [&_[data-slot='slider-thumb'][data-dragging]]:size-md [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-sm [&_[data-slot='slider-track'][data-orientation='vertical']]:w-2xs",
      large:
        "[&_[data-slot='slider-thumb']]:size-md [&_[data-slot='slider-thumb']]:border-4 [&_[data-slot='slider-thumb']]:outline-6 [&_[data-slot='slider-thumb'][data-dragging]]:size-lg [&_[data-slot='slider-track'][data-orientation='horizontal']]:h-md [&_[data-slot='slider-track'][data-orientation='vertical']]:w-xs",
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})
