import React from 'react'
import { ColourChannelSlider } from '../colour-channel-slider'
import { getLightnessTrack } from '../colour-channel-slider/colour-channel-slider.utils'
import { useColourPicker } from './colour-picker'
import { cn } from '@/utils/cn'

import type { ColourPickerLightnessSliderProps } from './colour-picker.types'

export const ColourPickerLightnessSlider = ({
  className,
  ref,
  ...props
}: ColourPickerLightnessSliderProps) => {
  const { colour, setColour } = useColourPicker()
  const [lightness, setLightness] = React.useState<number>(colour.get('hsl.l'))

  React.useEffect(() => {
    const l = colour.get('hsl.l')
    setLightness(Number.isNaN(l) ? 0 : l)
  }, [colour])

  const handleChange = (value: number | readonly number[]) => {
    const lightness = Array.isArray(value) ? value[0] : value
    setColour(colour.set('hsl.l', lightness / 100))
  }

  return (
    <ColourChannelSlider
      {...props}
      min={0}
      max={100}
      value={lightness * 100}
      onValueChange={handleChange}
      trackStyle={getLightnessTrack(colour.hex())}
      className={cn('', className)}
      ref={ref}
    />
  )
}
