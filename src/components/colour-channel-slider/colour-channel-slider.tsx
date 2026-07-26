import { Slider as BaseSlider } from '@base-ui/react'
import { colourChannelSliderVariants } from './colour-channel-slider.types'
import { cn } from '@/utils/cn'

import type { ColourChannelSliderProps } from './colour-channel-slider.types'

export const ColourChannelSlider = ({
  size,
  trackStyle,
  className,
  children,
  ref,
  ...props
}: ColourChannelSliderProps) => {
  return (
    <BaseSlider.Root
      className={cn(colourChannelSliderVariants({ size }), className)}
      data-slot="slider-root"
      thumbAlignment="edge"
      ref={ref}
      role="slider"
      {...props}
    >
      {props.value}
      <BaseSlider.Control
        className={
          'shrink-0 hover:cursor-pointer data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full'
        }
      >
        <BaseSlider.Track
          data-slot="slider-track"
          className={cn('relative size-full rounded-full')}
          style={{
            backgroundImage: trackStyle.some(
              (color: string) =>
                color.includes('rgba') || color.includes('hsla') || color.includes('a('),
            )
              ? [
                  `linear-gradient(to right, ${trackStyle.join(', ')})`,
                  'linear-gradient(45deg, #d4d4d8 25%, transparent 25%, transparent 75%, #d4d4d8 75%, #d4d4d8)',
                  'linear-gradient(45deg, #d4d4d8 25%, transparent 25%, transparent 75%, #d4d4d8 75%, #d4d4d8)',
                ].join(', ')
              : `linear-gradient(to right, ${trackStyle.join(', ')})`,
            backgroundSize: trackStyle.some(
              (color: string) =>
                color.includes('rgba') || color.includes('hsla') || color.includes('a('),
            )
              ? '100% 100%, 10px 10px, 10px 10px'
              : 'auto',
            backgroundPosition: trackStyle.some(
              (color: string) =>
                color.includes('rgba') || color.includes('hsla') || color.includes('a('),
            )
              ? '0 0, 0 0, 5px 5px'
              : 'auto',
            backgroundColor: '#ffffff',
          }}
        >
          {children}
          <BaseSlider.Indicator data-slot="slider-indicator" className={'rounded-full'} />
          <BaseSlider.Thumb
            data-slot="slider-thumb"
            className={cn(
              'absolute aspect-square rounded-full border-on-surface/60 outline-surface-background transition-[width,height,opacity] data-dragging:cursor-grabbing hover:[&:not([data-dragging])]:cursor-pointer',
            )}
            render={(thumbProps, state) => (
              <div
                {...thumbProps}
                style={{
                  ...thumbProps.style,
                  backgroundColor: trackStyle[state.values[0]],
                }}
              />
            )}
          />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  )
}
