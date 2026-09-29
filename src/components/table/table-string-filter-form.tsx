import { Radio, useTableContext } from '..'
import { Field } from '../field'
import { Form, useAppForm } from '../form'
import {
  defaultFilterOperatorLabels,
  stringFilterOperators,
  stringFilterSchema,
  type TableStringFilterFormProps,
} from './table.types'
import { cn } from '@/utils/cn'

import type { StringFilterValue } from './table.utils'
import type { RowData } from '@tanstack/react-table'

export const TableStringFilterForm = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableStringFilterFormProps<TData>) => {
  const table = useTableContext()
  const filterOperatorLabels = table.options.meta?.translations?.filterOperatorLabels
  const buttonLabels = table.options.meta?.translations?.buttonLabels ?? {
    reset: 'Reset',
    apply: 'Apply',
  }
  const currentFilter = column.getFilterValue() as StringFilterValue | undefined
  const form = useAppForm({
    defaultValues: {
      filterOperator: currentFilter?.operator ?? 'contains',
      filterValue: currentFilter?.value ?? '',
    },
    validators: {
      onSubmit: stringFilterSchema,
    },
    onSubmit: ({ value }) => {
      column.setFilterValue({
        operator: value.filterOperator,
        value: value.filterValue,
      } satisfies StringFilterValue)
    },
  })

  const onReset = () => {
    column.setFilterValue(undefined)
    form.reset({ filterOperator: 'contains', filterValue: '' })
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
                    {stringFilterOperators.map((operator) => (
                      <field.FieldSet key={operator}>
                        <Radio value={operator} variant="inSurface">
                          {filterOperatorLabels?.[operator] ??
                            defaultFilterOperatorLabels[operator]}
                        </Radio>
                        {field.state.value === operator && (
                          <form.AppField name="filterValue">
                            {(valueField) => (
                              <Field>
                                <valueField.FieldErrors />
                                <valueField.FieldInput
                                  aria-label={`${column.id} filter value`}
                                  variant="secondary"
                                />
                              </Field>
                            )}
                          </form.AppField>
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
