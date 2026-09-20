import { Slider as BaseSlider } from '@base-ui/react'
import React from 'react'
import { useSliderGroupContext } from './slider-group-context'
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
  const group = useSliderGroupContext()

  React.useEffect(() => {
    group?.registerConfig({ min, max, step, defaultValue })
  }, [group, min, max, step, defaultValue])

  const groupValue = group
    ? (group.value ??
      (Array.isArray(defaultValue)
        ? defaultValue
        : [(value as number) ?? (defaultValue as number) ?? min]))
    : undefined

  const _values = group
    ? groupValue!
    : Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
        ? defaultValue
        : [value ?? defaultValue ?? min]

  const handleValueChange = (...args: Parameters<NonNullable<SliderProps['onValueChange']>>) => {
    const next = args[0]
    group?.setValue(Array.isArray(next) ? [...next] : [next])
    onValueChange?.(...args)
  }

  return (
    <BaseSlider.Root
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuenow={_values[0]}
      className={cn(sliderVariants({ size, tone }), className)}
      defaultValue={group ? undefined : defaultValue}
      data-slot="slider-root"
      max={max}
      min={min}
      onValueChange={handleValueChange}
      ref={ref}
      role="slider"
      step={step}
      value={group ? groupValue : value}
      {...props}
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
            <SliderThumb index={index} key={index} hide={!showTooltip} />
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  )
}
