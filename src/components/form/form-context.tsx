import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { lazy } from 'react'

const FieldDescription = lazy(() =>
  import('../field/field-description').then((m) => ({
    default: m.FieldDescription,
  })),
)
const FieldErrors = lazy(() =>
  import('../field/field-errors').then((m) => ({
    default: m.FieldErrors,
  })),
)
const FieldInput = lazy(() =>
  import('../field/field-input').then((m) => ({
    default: m.FieldInput,
  })),
)
const FieldInputGroup = lazy(() =>
  import('../field/field-input-group').then((m) => ({
    default: m.FieldInputGroup,
  })),
)
const FieldInputGroupInput = lazy(() =>
  import('../field/field-input-group-input').then((m) => ({
    default: m.FieldInputGroupInput,
  })),
)
const FieldLabel = lazy(() =>
  import('../field/field-label').then((m) => ({
    default: m.FieldLabel,
  })),
)
const FieldSelect = lazy(() =>
  import('../field/field-select').then((m) => ({
    default: m.FieldSelect,
  })),
)
const FieldSlider = lazy(() =>
  import('../field/field-slider').then((m) => ({
    default: m.FieldSlider,
  })),
)

import { FormErrors } from './form-errors'
import { FormReset } from './form-reset'
import { FormSubmit } from './form-submit'

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts()

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
  },
  formContext,
  formComponents: {
    FormErrors,
    FormReset,
    FormSubmit,
  },
})
