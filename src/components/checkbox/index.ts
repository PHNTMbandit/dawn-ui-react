import { Checkbox as CheckboxBase } from './checkbox'
import { CheckboxIndicator } from './checkbox-indicator'

export const Checkbox = Object.assign(CheckboxBase, {
  Indicator: CheckboxIndicator,
})

export type { CheckboxIndicatorProps, CheckboxRootProps } from './checkbox.types'
export { CheckboxIndicator } from './checkbox-indicator'
