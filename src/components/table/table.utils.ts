import {
  numberFilterOperators,
  selectFilterOperators,
  textFilterOperators,
} from './table.constants'

import type { NumberFilterValue, SelectFilterValue, TextFilterValue } from './table.types'
import type { FilterFn } from '@tanstack/react-table'

export const textFilterFn: FilterFn<any> = (row, columnId, filter: TextFilterValue) => {
  const rowValue = row.getValue(columnId) as string
  const operatorFn = textFilterOperators[filter.filterOperator]?.fn
  if (!operatorFn) return true
  return operatorFn(rowValue, filter.filterValue)
}

export const selectFilterFn: FilterFn<any> = (row, columnId, filter: SelectFilterValue) => {
  const rowValue = row.getValue(columnId) as string
  const operatorFn = selectFilterOperators[filter.filterOperator]?.fn
  if (!operatorFn) return true
  return operatorFn(rowValue, filter.filterValue)
}

export const numberFilterFn: FilterFn<any> = (row, columnId, filter: NumberFilterValue) => {
  const rowValue = row.getValue(columnId) as number
  const operatorFn = numberFilterOperators[filter.filterOperator]?.fn
  if (!operatorFn) return true

  const filterValue = Array.isArray(filter.filterValue)
    ? ([Number(filter.filterValue[0]), Number(filter.filterValue[1])] as [number, number])
    : Number(filter.filterValue)

  return operatorFn(rowValue, filterValue)
}
