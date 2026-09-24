import React from 'react'
import { Slider } from '../slider'
import { useSliderGroupContext, useStableNumberArray } from './slider-group-context'

import type { SliderGroupSliderProps } from './slider-group.types'

// The group-bound Slider: it reads/writes the shared value from SliderGroup and
// publishes its min/max/step so siblings (SliderInput, SliderValue) stay in sync.
export const SliderGroupSlider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue,
  value,
  onValueChange,
  ...props
}: SliderGroupSliderProps) => {
  const group = useSliderGroupContext()

  React.useEffect(() => {
    group?.registerConfig({ min, max, step, defaultValue })
  }, [group, min, max, step, defaultValue])

  const groupValue = useStableNumberArray(
    group
      ? (group.value ??
          (Array.isArray(defaultValue)
            ? [...defaultValue]
            : [(value as number) ?? (defaultValue as number) ?? min]))
      : undefined,
  )

  const handleValueChange = (
    ...args: Parameters<NonNullable<SliderGroupSliderProps['onValueChange']>>
  ) => {
    const next = args[0]
    group?.setValue(Array.isArray(next) ? [...next] : [next])
    onValueChange?.(...args)
  }

  return (
    <Slider
      min={min}
      max={max}
      step={step}
      value={groupValue}
      onValueChange={handleValueChange}
      {...props}
    />
  )
}
