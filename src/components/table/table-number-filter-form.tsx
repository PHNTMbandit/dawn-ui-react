import { Radio, useTableContext } from '..'
import { Field } from '../field'
import { Form, useAppForm } from '../form'
import {
  defaultFilterOperatorLabels,
  numberFilterOperators,
  numberFilterSchema,
  type TableNumberFilterFormProps,
} from './table.types'
import { cn } from '@/utils/cn'

import type { NumberFilterValue } from './table.utils'
import type { RowData } from '@tanstack/react-table'

export const TableNumberFilterForm = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableNumberFilterFormProps<TData>) => {
  const table = useTableContext()
  const filterOperatorLabels = table.options.meta?.translations?.filterOperatorLabels
  const buttonLabels = table.options.meta?.translations?.buttonLabels ?? {
    reset: 'Reset',
    apply: 'Apply',
  }
  const currentFilter = column.getFilterValue() as NumberFilterValue | undefined
  const form = useAppForm({
    defaultValues: {
      filterOperator: currentFilter?.operator ?? 'equals',
      filterValueFrom: currentFilter?.number[0] ?? '',
      filterValueTo: currentFilter?.number[1] ?? '',
    },
    validators: {
      onSubmit: numberFilterSchema,
    },
    onSubmit: ({ value }) => {
      column.setFilterValue({
        operator: value.filterOperator,
        number: [value.filterValueFrom, value.filterValueTo],
      } satisfies NumberFilterValue)
    },
  })

  const onReset = () => {
    column.setFilterValue(undefined)
    form.reset({ filterOperator: 'equals', filterValueFrom: '', filterValueTo: '' })
  }

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault()
        event.stopPropagation()
        await form.handleSubmit()
      }}
      onReset={onReset}
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      <form.AppForm>
        {children}
        <form.FormErrors />
        <form.FormSet>
          <form.FormSetContent>
            <form.AppField name="filterOperator">
              {(field) => (
                <Field>
                  <field.FieldErrors />
                  <field.FieldRadioGroup>
                    {numberFilterOperators.map((operator) => (
                      <field.FieldSet key={operator}>
                        <Radio value={operator} variant="inSurface">
                          {filterOperatorLabels?.[operator] ??
                            defaultFilterOperatorLabels[operator]}
                        </Radio>
                        {field.state.value === operator && (
                          <>
                            <form.AppField name="filterValueFrom">
                              {(valueField) => (
                                <Field>
                                  <valueField.FieldErrors />
                                  <valueField.FieldInput
                                    aria-label={`${column.id} filter value`}
                                    type="number"
                                    variant="secondary"
                                  />
                                </Field>
                              )}
                            </form.AppField>
                            {operator === 'between' && (
                              <form.AppField name="filterValueTo">
                                {(valueField) => (
                                  <Field>
                                    <valueField.FieldErrors />
                                    <valueField.FieldInput
                                      aria-label={`${column.id} maximum filter value`}
                                      type="number"
                                      variant="secondary"
                                    />
                                  </Field>
                                )}
                              </form.AppField>
                            )}
                          </>
                        )}
                      </field.FieldSet>
                    ))}
                  </field.FieldRadioGroup>
                </Field>
              )}
            </form.AppField>
          </form.FormSetContent>
        </form.FormSet>
        <form.FormFooter>
          <form.FormReset>{buttonLabels.reset}</form.FormReset>
          <form.FormSubmit>{buttonLabels.apply}</form.FormSubmit>
        </form.FormFooter>
      </form.AppForm>
    </Form>
  )
}
