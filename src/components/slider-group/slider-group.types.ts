import type { Input } from '../input'
import type { SliderProps } from '../slider'

export type SliderGroupProps = Omit<React.ComponentProps<'div'>, 'defaultValue' | 'onChange'> & {
  defaultValue?: number | number[]
  value?: number | number[]
  onValueChange?: (value: number[]) => void
}
export type SliderGroupConfig = {
  min: number
  max: number
  step: number
  defaultValue?: number | readonly number[]
}
export type SliderGroupContextValue = {
  value: number[] | undefined
  setValue: (value: number[]) => void
  min: number
  max: number
  step: number
  // Lets the group-bound Slider publish its min/max/step (and seed the initial value) to the group.
  registerConfig: (config: SliderGroupConfig) => void
}
export type SliderGroupSliderProps = SliderProps
export type SliderDescriptionProps = React.ComponentProps<'p'>
export type SliderIconProps = React.ComponentProps<'div'>
export type SliderInputProps = Omit<
  React.ComponentProps<typeof Input>,
  'value' | 'onChange' | 'type'
>
export type SliderLabelProps = React.ComponentProps<'span'>
export type SliderValueProps = React.ComponentProps<'span'>
