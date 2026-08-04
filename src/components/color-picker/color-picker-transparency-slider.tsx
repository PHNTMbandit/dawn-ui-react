import React from 'react'
import { ColorChannelSlider } from '../color-channel-slider'
import { getTransparencyTrack } from '../color-channel-slider/color-channel-slider.utils'
import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerTransparencySliderProps } from './color-picker.types'

export const ColorPickerTransparencySlider = ({
  className,
  ref,
  ...props
}: ColorPickerTransparencySliderProps) => {
  const { color, setColor } = useColorPicker()
  const [alpha, setAlpha] = React.useState<number>(color.alpha())

  React.useEffect(() => {
    setAlpha(color.alpha())
  }, [color])

  const handleChange = (value: number | readonly number[]) => {
    const alpha = Array.isArray(value) ? value[0] : value
    setColor(color.alpha(alpha / 100))
  }

  return (
    <ColorChannelSlider
      {...props}
      min={0}
      max={100}
      value={alpha * 100}
      onValueChange={handleChange}
      trackStyle={getTransparencyTrack(color.hex())}
      className={cn('', className)}
      ref={ref}
    />
  )
}
