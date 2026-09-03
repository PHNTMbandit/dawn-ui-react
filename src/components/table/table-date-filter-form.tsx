import { Radio, useTableContext } from '..'
import { Field } from '../field'
import { Form, useAppForm } from '../form'
import {
  dateFilterOperators,
  dateFilterSchema,
  defaultFilterOperatorLabels,
  type TableDateFilterFormProps,
} from './table.types'
import { cn } from '@/utils/cn'

import type { DateFilterValue } from './table.utils'
import type { RowData } from '@tanstack/react-table'

export const TableDateFilterForm = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableDateFilterFormProps<TData>) => {
  const table = useTableContext()
  const filterOperatorLabels = table.options.meta?.translations?.filterOperatorLabels
  const buttonLabels = table.options.meta?.translations?.buttonLabels ?? {
    reset: 'Reset',
    apply: 'Apply',
  }
  const currentFilter = column.getFilterValue() as DateFilterValue | undefined
  const form = useAppForm({
    defaultValues: {
      filterOperator: currentFilter?.operator ?? 'equals',
      filterValueFrom: currentFilter?.date[0] ?? '',
      filterValueTo: currentFilter?.date[1] ?? '',
    },
    validators: {
      onSubmit: dateFilterSchema,
    },
    onSubmit: ({ value }) => {
      column.setFilterValue({
        operator: value.filterOperator,
        date: [value.filterValueFrom, value.filterValueTo],
      } satisfies DateFilterValue)
    },
  })

  const onReset = () => {
    column.setFilterValue(undefined)
    form.reset()
  }

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()
        e.stopPropagation()
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
          <form.FormSetHeading>
            <form.FormSetContent>
              <Field>
                <form.AppField name="filterOperator">
                  {(field) => (
                    <Field>
                      <field.FieldErrors />
                      <field.FieldRadioGroup>
                        {dateFilterOperators.map((operator) => (
                          <field.FieldSet key={operator}>
                            <Radio value={operator} variant={'inSurface'}>
                              {filterOperatorLabels?.[operator] ??
                                defaultFilterOperatorLabels[operator]}
                            </Radio>
                            {field.state.value === operator && (
                              <>
                                <form.AppField name="filterValueFrom">
                                  {(valueField) => (
                                    <Field>
                                      <valueField.FieldErrors />
                                      <valueField.FieldInput type="date" variant="secondary" />
                                    </Field>
                                  )}
                                </form.AppField>
                                {operator === 'between' && (
                                  <form.AppField name="filterValueTo">
                                    {(valueField) => (
                                      <Field>
                                        <valueField.FieldErrors />
                                        <valueField.FieldInput type="date" variant="secondary" />
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
              </Field>
            </form.FormSetContent>
          </form.FormSetHeading>
        </form.FormSet>
        <form.FormFooter>
          <form.FormReset>{buttonLabels.reset}</form.FormReset>
          <form.FormSubmit>{buttonLabels.apply}</form.FormSubmit>
        </form.FormFooter>
      </form.AppForm>
    </Form>
  )
}
