import { Slider as SliderBase } from './slider'
import { SliderThumb } from './slider-thumb'

export const Slider = Object.assign(SliderBase, {
  Thumb: SliderThumb,
})

export { SliderThumb } from './slider-thumb'
export type { SliderProps, SliderThumbProps } from './slider.types'
