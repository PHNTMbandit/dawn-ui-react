import { Slider as BaseSlider } from '@base-ui/react'
import { SliderThumb } from './slider-thumb'
import { sliderVariants, type SliderProps } from './slider.types'
import { cn } from '@/utils/cn'

export const Slider = ({
  size,
  tone,
  defaultValue,
  description,
  label,
  leadingIcon: LeadingIcon,
  max = 100,
  min = 0,
  showMax = false,
  showMin = false,
  trailingIcon: TrailingIcon,
  showThumbOnHover = true,
  value,
  className,
  ref,
  ...props
}: SliderProps) => {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max]

  return (
    <div className={cn(sliderVariants({ size, tone }), className)}>
      {label && <span className="style-text-default-0">{label}</span>}
      <BaseSlider.Root
        aria-label={label}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={Array.isArray(value) ? value[0] : (value ?? defaultValue ?? min)}
        className={cn('flex items-center gap-sm', className)}
        defaultValue={defaultValue}
        data-slot="slider-root"
        max={max}
        min={min}
        ref={ref}
        role="slider"
        value={value}
        {...props}
      >
        {LeadingIcon && <LeadingIcon className="size-sm shrink-0" weight="fill" />}
        {showMin && <span className="style-text-default-0">{min}</span>}
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
            <BaseSlider.Indicator data-slot="slider-indicator" className={'rounded-full'} />
            {Array.from({ length: _values.length }, (_, index) => (
              <SliderThumb index={index} key={index} />
            ))}
          </BaseSlider.Track>
        </BaseSlider.Control>
        {showMax && <span className="style-text-default-0">{max}</span>}
        {TrailingIcon && <TrailingIcon className="size-sm shrink-0" weight="fill" />}
      </BaseSlider.Root>
      {description && (
        <span className="style-text-prose--1 text-on-surface-variant">{description}</span>
      )}
    </div>
  )
}
