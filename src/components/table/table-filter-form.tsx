import { CaretUpDownIcon, MinusIcon } from '@phosphor-icons/react'
import { FieldSet, Input, Radio } from '..'
import { Field } from '../field'
import { Form, useAppForm } from '../form'
import {
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../select'
import { filterDefinitions } from './table.constants'
import { cn } from '@/utils/cn'

import type { FilterValue, TableFilterFormProps } from './table.types'

export const TableFilterForm = <TData, TValue, TFilterType extends keyof typeof filterDefinitions>({
  column,
  filterType,
  operatorLabels = {},
  clearLabel = 'Clear',
  submitLabel = 'Submit',
  renderClearButton,
  renderSubmitButton,
  className,
  children,
  ref,
  ...props
}: TableFilterFormProps<TData, TValue, TFilterType>) => {
  const currentFilter = column.getFilterValue() as FilterValue<TFilterType> | undefined
  const filterDefinition = filterDefinitions[filterType]
  const uniqueColumnValues = Array.from(column.getFacetedUniqueValues().keys())

  const form = useAppForm({
    defaultValues: {
      filterOperator: currentFilter?.filterOperator ?? filterDefinition.defaultOperator,
      filterValue: currentFilter?.filterValue ?? filterDefinition.defaultValue,
    },
    validators: {
      onSubmit: ({ value }) => {
        filterDefinition.schema.safeParse({
          filterOperator: value.filterOperator,
          filterValue: value.filterValue,
        })
      },
    },
    onSubmit: (data) => {
      column.setFilterValue({
        filterOperator: data.value.filterOperator,
        filterValue: data.value.filterValue,
      })
      form.reset({
        filterOperator: data.value.filterOperator,
        filterValue: data.value.filterValue,
      })
    },
  })

  const onReset = () => {
    column.setFilterValue(undefined)
    form.reset()
  }

  return (
    <Form
      action={() => form.handleSubmit()}
      className={cn('w-[300px]', className)}
      ref={ref}
      {...props}
    >
      <form.AppForm>
        {children}
        <form.FormErrors />
        <form.AppField name="filterOperator">
          {(field) => (
            <Field>
              <field.FieldErrors />
              <field.FieldRadioGroup>
                {filterDefinition.operators.map((operator) => (
                  <FieldSet key={operator}>
                    <Radio value={operator} variant="inSurface">
                      {operatorLabels?.[operator] ?? operator}
                    </Radio>
                    {field.state.value === operator && (
                      <form.AppField name="filterValue">
                        {(valueField) =>
                          (() => {
                            switch (filterType) {
                              case 'text':
                                return <valueField.FieldInput variant="secondary" />
                              case 'select':
                                return (
                                  <valueField.FieldSelect
                                    items={uniqueColumnValues}
                                    multiple={operator !== 'equals' && operator !== 'notEquals'}
                                    required
                                  >
                                    <SelectTrigger variant={'primary'} className={'w-full'}>
                                      <SelectValue />
                                      <SelectIcon>
                                        <CaretUpDownIcon weight="bold" />
                                      </SelectIcon>
                                    </SelectTrigger>
                                    <SelectPopup alignItemWithTrigger={false} sideOffset={8}>
                                      <SelectList>
                                        <SelectGroup>
                                          {uniqueColumnValues.map((item) => (
                                            <SelectItem key={item} value={item}>
                                              {item}
                                            </SelectItem>
                                          ))}
                                        </SelectGroup>
                                      </SelectList>
                                    </SelectPopup>
                                  </valueField.FieldSelect>
                                )
                              case 'number':
                                if (operator === 'between') {
                                  const value = valueField.state.value
                                  const [min, max] = Array.isArray(value) ? value : [0, 0]
                                  return (
                                    <div className="flex items-center gap-xs">
                                      <Input
                                        variant="secondary"
                                        type="number"
                                        value={min}
                                        onChange={(e) => {
                                          const current = valueField.state.value
                                          const [, currentMax] = Array.isArray(current)
                                            ? current
                                            : [0, 0]
                                          valueField.handleChange([
                                            Number(e.target.value),
                                            Number(currentMax),
                                          ] as [number, number])
                                        }}
                                      />
                                      <MinusIcon weight="bold" className="size-md" />
                                      <Input
                                        variant="secondary"
                                        type="number"
                                        value={max}
                                        onChange={(e) => {
                                          const current = valueField.state.value
                                          const [currentMin] = Array.isArray(current)
                                            ? current
                                            : [0, 0]
                                          valueField.handleChange([
                                            Number(currentMin),
                                            Number(e.target.value),
                                          ] as [number, number])
                                        }}
                                      />
                                    </div>
                                  )
                                }
                                return <valueField.FieldInput variant="secondary" type="number" />
                              default:
                                return null
                            }
                          })()
                        }
                      </form.AppField>
                    )}
                  </FieldSet>
                ))}
              </field.FieldRadioGroup>
            </Field>
          )}
        </form.AppField>
        <div className="flex items-center gap-3xs">
          {(() => {
            const defaultClearButton = (
              <form.FormReset tone="error" variant="ghost" onClick={onReset}>
                {clearLabel}
              </form.FormReset>
            )
            const defaultSubmitButton = <form.FormSubmit>{submitLabel}</form.FormSubmit>

            return (
              <>
                {renderClearButton ? renderClearButton(defaultClearButton) : defaultClearButton}
                {renderSubmitButton ? renderSubmitButton(defaultSubmitButton) : defaultSubmitButton}
              </>
            )
          })()}
        </div>
      </form.AppForm>
    </Form>
  )
}
