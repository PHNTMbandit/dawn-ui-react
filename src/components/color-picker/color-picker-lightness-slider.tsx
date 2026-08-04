import React from 'react'
import { ColorChannelSlider } from '../color-channel-slider'
import { getLightnessTrack } from '../color-channel-slider/color-channel-slider.utils'
import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerLightnessSliderProps } from './color-picker.types'

export const ColorPickerLightnessSlider = ({
  className,
  ref,
  ...props
}: ColorPickerLightnessSliderProps) => {
  const { color, setColor } = useColorPicker()
  const [lightness, setLightness] = React.useState<number>(color.get('hsl.l'))

  React.useEffect(() => {
    const l = color.get('hsl.l')
    setLightness(Number.isNaN(l) ? 0 : l)
  }, [color])

  const handleChange = (value: number | readonly number[]) => {
    const lightness = Array.isArray(value) ? value[0] : value
    setColor(color.set('hsl.l', lightness / 100))
  }

  return (
    <ColorChannelSlider
      {...props}
      min={0}
      max={100}
      value={lightness * 100}
      onValueChange={handleChange}
      trackStyle={getLightnessTrack(color.hex())}
      className={cn('', className)}
      ref={ref}
    />
  )
}
