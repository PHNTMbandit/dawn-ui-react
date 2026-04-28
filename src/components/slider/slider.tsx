import { Slider as BaseSlider } from '@base-ui/react'
import { SliderThumb } from './slider-thumb'
import { cn } from '@/utils/cn'

import type { SliderProps } from './slider.types'

export const Slider = ({
  defaultValue,
  description,
  label,
  leadingIcon: LeadingIcon,
  max = 100,
  min = 0,
  showMax = false,
  showMin = false,
  trailingIcon: TrailingIcon,
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
    <div className="flex flex-col gap-xs">
      {label && <span className="style-text-default-0">{label}</span>}
      <BaseSlider.Root
        aria-label={label}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={Array.isArray(value) ? value[0] : (value ?? defaultValue ?? min)}
        className={cn('flex h-xs items-center gap-sm', className)}
        defaultValue={defaultValue}
        max={max}
        min={min}
        ref={ref}
        role="slider"
        value={value}
        {...props}
      >
        {LeadingIcon && <LeadingIcon className="size-sm shrink-0" weight="fill" />}
        {showMin && <span className="style-text-default-0">{min}</span>}
        <BaseSlider.Control className={'shrink-0 grow hover:cursor-pointer'}>
          <BaseSlider.Track
            className={'relative h-2xs rounded-full bg-surface-low inset-shadow-2xs'}
          >
            <BaseSlider.Indicator className={'rounded-full bg-brand-default'} />
            {Array.from({ length: _values.length }, (_, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: For simplicity in this case
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
