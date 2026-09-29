import { Slider as BaseSlider } from '@base-ui/react'
import { SliderThumb } from './slider-thumb'
import { sliderVariants, type SliderProps } from './slider.types'
import { cn } from '@/utils/cn'

export const Slider = ({
  size,
  tone,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  showIndicator = true,
  showTooltip = true,
  showThumbOnHover = true,
  value,
  onValueChange,
  className,
  ref,
  ...props
}: SliderProps) => {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [value ?? defaultValue ?? min]

  const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, ...rootProps } = props

  return (
    <BaseSlider.Root
      className={cn(sliderVariants({ size, tone }), className)}
      defaultValue={defaultValue}
      data-slot="slider-root"
      max={max}
      min={min}
      onValueChange={onValueChange}
      ref={ref}
      step={step}
      value={value}
      {...rootProps}
    >
      <BaseSlider.Control
        className={
          'shrink-0 hover:cursor-pointer data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full'
        }
      >
        <BaseSlider.Track
          data-slot="slider-track"
          className={cn(
            'relative size-full rounded-full',
            !showThumbOnHover &&
              "**:data-[slot='slider-thumb']:opacity-0 hover:**:data-[slot='slider-thumb']:opacity-100 active:**:data-[slot='slider-thumb']:opacity-100 data-dragging:**:data-[slot='slider-thumb']:opacity-100",
          )}
        >
          <BaseSlider.Indicator
            data-slot="slider-indicator"
            className={cn('rounded-full', !showIndicator && 'opacity-0')}
          />
          {Array.from({ length: _values.length }, (_, index) => (
            <SliderThumb
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledby}
              index={index}
              key={index}
              hide={!showTooltip}
            />
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  )
}
