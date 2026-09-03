import { cva, type VariantProps } from 'class-variance-authority'

import type { Checkbox } from '../checkbox'
import type { Input } from '../input'
import type { InputGroup, InputGroupInput } from '../input-group'
import type { Radio, RadioGroup } from '../radio-group'
import type { Select } from '../select'
import type { Slider } from '../slider'
import type { Switch } from '../switch'
import type { TextArea } from '../text-area'
import type { Toggle } from '../toggle'

export type FieldDescriptionProps = React.ComponentProps<'p'>
export type FieldErrorProps = React.ComponentProps<'ul'>
export type FieldInputGroupProps = React.ComponentProps<typeof InputGroup>
export type FieldInputGroupInputProps = React.ComponentProps<typeof InputGroupInput>
export type FieldInputProps = React.ComponentProps<typeof Input>
export type FieldLabelProps = React.ComponentProps<'div'> &
  VariantProps<typeof fieldLabelVariants> & {
    showRequired?: boolean
  }
export type FieldSelectProps = React.ComponentProps<typeof Select>
export type FieldSliderProps = React.ComponentProps<typeof Slider>
export type FieldTextAreaProps = React.ComponentProps<typeof TextArea>
export type FieldCheckboxProps = React.ComponentProps<typeof Checkbox>
export type FieldRadioProps = React.ComponentProps<typeof Radio>
export type FieldRadioGroupProps = React.ComponentProps<typeof RadioGroup>
export type FieldSwitchProps = React.ComponentProps<typeof Switch>
export type FieldToggleProps = React.ComponentProps<typeof Toggle>
export type FieldProps = React.ComponentProps<'div'>
export type FieldSetProps = React.ComponentProps<'div'>
export type FieldRowProps = React.ComponentProps<'div'>

export const fieldLabelVariants = cva('whitespace-nowrap', {
  variants: {
    size: {
      small: 'style-text-default--1',
      medium: 'style-text-default-0',
      large: 'style-text-default-1',
    },
    variant: {
      primary: 'text-on-surface',
      secondary: 'text-on-surface-variant',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})
