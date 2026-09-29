import { SliderDescription } from './slider-description'
import { SliderGroup as SliderGroupBase } from './slider-group'
import { SliderGroupSlider } from './slider-group-slider'
import { SliderIcon } from './slider-icon'
import { SliderInput } from './slider-input'
import { SliderLabel } from './slider-label'
import { SliderValue } from './slider-value'

export const SliderGroup = Object.assign(SliderGroupBase, {
  Slider: SliderGroupSlider,
  Input: SliderInput,
  Value: SliderValue,
  Label: SliderLabel,
  Description: SliderDescription,
  Icon: SliderIcon,
})

export { SliderGroupSlider } from './slider-group-slider'
export { SliderInput } from './slider-input'
export { SliderValue } from './slider-value'
export { SliderLabel } from './slider-label'
export { SliderDescription } from './slider-description'
export { SliderIcon } from './slider-icon'
export { useSliderGroupContext } from './slider-group-context'
export type {
  SliderGroupProps,
  SliderGroupSliderProps,
  SliderInputProps,
  SliderValueProps,
  SliderLabelProps,
  SliderDescriptionProps,
  SliderIconProps,
} from './slider-group.types'
