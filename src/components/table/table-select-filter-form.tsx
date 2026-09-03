import { CaretUpDownIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '../button'
import { Form, FormFooter } from '../form'
import {
  Select,
  SelectIcon,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectTitle,
  SelectTrigger,
  SelectValue,
} from '../select'
import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type {
  TableSelectFilterFormProps,
  TableSelectFilterOption,
  TableSelectFilterValue,
} from './table.types'
import type { RowData } from '@tanstack/react-table'

const isSelectFilterOption = (value: unknown): value is TableSelectFilterOption =>
  typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'

const isSelectFilterValue = (value: unknown): value is TableSelectFilterValue =>
  Array.isArray(value) && value.every(isSelectFilterOption)

export const TableSelectFilterForm = <TData extends RowData>({
  column,
  className,
  children,
  ref,
  ...props
}: TableSelectFilterFormProps<TData>) => {
  const table = useTableContext()
  const currentFilter = column.getFilterValue()
  const buttonLabels = table.options.meta?.translations?.buttonLabels ?? {
    reset: 'Reset',
    apply: 'Apply',
  }
  const [filterValue, setFilterValue] = useState<TableSelectFilterValue>(
    isSelectFilterValue(currentFilter) ? currentFilter : [],
  )
  const options = Array.from(column.getFacetedUniqueValues().keys())
    .filter(isSelectFilterOption)
    .sort((left, right) => String(left).localeCompare(String(right)))

  return (
    <Form
      className={cn('', className)}
      onReset={() => {
        column.setFilterValue(undefined)
        setFilterValue([])
      }}
      onSubmit={(event) => {
        event.preventDefault()
        event.stopPropagation()

        if (filterValue.length > 0) {
          column.setFilterValue(filterValue)
        }
      }}
      ref={ref}
      {...props}
    >
      {children}
      <Select
        multiple
        value={filterValue}
        onValueChange={(value) => {
          if (isSelectFilterValue(value)) {
            setFilterValue(value)
          }
        }}
      >
        <SelectTrigger aria-label={`${column.id} filter value`} variant="secondary">
          <SelectValue placeholder="Select values">
            {(value) =>
              isSelectFilterValue(value) ? value.map(String).join(', ') : 'Select values'
            }
          </SelectValue>
          <SelectIcon>
            <CaretUpDownIcon weight="bold" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPopup alignItemWithTrigger={false} sideOffset={8}>
          <SelectList>
            {options.map((option) => (
              <SelectItem key={`${typeof option}:${String(option)}`} value={option}>
                <SelectTitle>{String(option)}</SelectTitle>
              </SelectItem>
            ))}
          </SelectList>
        </SelectPopup>
      </Select>
      <FormFooter>
        <Button className="w-full" tone="neutral" type="reset" variant="outline">
          {buttonLabels.reset}
        </Button>
        <Button className="w-full" disabled={filterValue.length === 0} type="submit">
          {buttonLabels.apply}
        </Button>
      </FormFooter>
    </Form>
  )
}
