import { Radio } from './radio'
import { RadioGroup as RadioGroupBase } from './radio-group'

export const RadioGroup = Object.assign(RadioGroupBase, {
  Radio,
})

export { Radio } from './radio'
export type { RadioGroupProps, RadioProps } from './radio-group.types'
