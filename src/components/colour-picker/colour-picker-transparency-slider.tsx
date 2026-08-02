import React from 'react'
import { ColourChannelSlider } from '../colour-channel-slider'
import { getTransparencyTrack } from '../colour-channel-slider/colour-channel-slider.utils'
import { useColourPicker } from './colour-picker'
import { cn } from '@/utils/cn'

import type { ColourPickerTransparencySliderProps } from './colour-picker.types'

export const ColourPickerTransparencySlider = ({
  className,
  ref,
  ...props
}: ColourPickerTransparencySliderProps) => {
  const { colour, setColour } = useColourPicker()
  const [alpha, setAlpha] = React.useState<number>(colour.alpha())

  React.useEffect(() => {
    setAlpha(colour.alpha())
  }, [colour])

  const handleChange = (value: number | readonly number[]) => {
    const alpha = Array.isArray(value) ? value[0] : value
    setColour(colour.alpha(alpha / 100))
  }

  return (
    <ColourChannelSlider
      {...props}
      min={0}
      max={100}
      value={alpha * 100}
      onValueChange={handleChange}
      trackStyle={getTransparencyTrack(colour.hex())}
      className={cn('', className)}
      ref={ref}
    />
  )
}
