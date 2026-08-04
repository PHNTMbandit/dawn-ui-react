import { ColorChannelSlider } from '../color-channel-slider'
import { getHueTrack } from '../color-channel-slider/color-channel-slider.utils'
import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerHueSliderProps } from './color-picker.types'

export const ColorPickerHueSlider = ({ className, ref, ...props }: ColorPickerHueSliderProps) => {
  const { hue, setHue } = useColorPicker()

  const handleChange = (value: number | readonly number[]) => {
    setHue(Array.isArray(value) ? value[0] : value)
  }

  return (
    <ColorChannelSlider
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
