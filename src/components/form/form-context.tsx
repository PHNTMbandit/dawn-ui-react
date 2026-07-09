import { createFormHook } from '@tanstack/react-form'
import {
  FieldCheckbox,
  FieldDescription,
  FieldErrors,
  FieldInput,
  FieldInputGroup,
  FieldInputGroupInput,
  FieldLabel,
  FieldRadio,
  FieldRadioGroup,
  FieldSelect,
  FieldSet,
  FieldSlider,
  FieldSwitch,
  FieldToggle,
} from '../field'
import { fieldContext, formContext } from './form-contexts'
import { FormErrors } from './form-errors'
import { FormReset } from './form-reset'
import { FormSubmit } from './form-submit'

export { fieldContext, formContext, useFieldContext, useFormContext } from './form-contexts'

export const { useAppForm, withFieldGroup, withForm, useTypedAppFormContext } = createFormHook({
  fieldContext,
  fieldComponents: {
    FieldDescription,
    FieldErrors,
    FieldInput,
    FieldInputGroup,
    FieldInputGroupInput,
    FieldLabel,
    FieldSelect,
    FieldSlider,
    FieldCheckbox,
    FieldRadio,
    FieldRadioGroup,
    FieldSwitch,
    FieldToggle,
    FieldSet,
  },
  formContext,
  formComponents: {
    FormErrors,
    FormReset,
    FormSubmit,
  },
})
