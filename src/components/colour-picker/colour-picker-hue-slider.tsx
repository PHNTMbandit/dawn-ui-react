import { ColourChannelSlider } from '../colour-channel-slider'
import { getHueTrack } from '../colour-channel-slider/colour-channel-slider.utils'
import { useColourPicker } from './colour-picker'
import { cn } from '@/utils/cn'

import type { ColourPickerHueSliderProps } from './colour-picker.types'

export const ColourPickerHueSlider = ({ className, ref, ...props }: ColourPickerHueSliderProps) => {
  const { hue, setHue } = useColourPicker()

  const handleChange = (value: number | readonly number[]) => {
    setHue(Array.isArray(value) ? value[0] : value)
  }

  return (
    <ColourChannelSlider
      {...props}
      min={0}
      max={360}
      value={hue}
      onValueChange={handleChange}
      trackStyle={getHueTrack()}
      className={cn('', className)}
      ref={ref}
    />
  )
}
