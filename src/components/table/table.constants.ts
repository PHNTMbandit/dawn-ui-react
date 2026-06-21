import { z } from 'zod'

import type { FilterOperator, NumberOperator, SelectOperator, TextOperator } from './table.types'

export const textFilterOperators: Record<
  TextOperator,
  { fn: (rowValue: string, filterValue: string) => boolean }
> = {
  equals: {
    fn: (rowValue, filterValue) => rowValue === filterValue,
  },
  notEquals: {
    fn: (rowValue, filterValue) => rowValue !== filterValue,
  },
  contains: {
    fn: (rowValue, filterValue) =>
      String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase()),
  },
  notContains: {
    fn: (rowValue, filterValue) =>
      !String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase()),
  },
  startsWith: {
    fn: (rowValue, filterValue) =>
      String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()),
  },
  endsWith: {
    fn: (rowValue, filterValue) =>
      String(rowValue).toLowerCase().endsWith(String(filterValue).toLowerCase()),
  },
} as const

export const selectFilterOperators: Record<
  SelectOperator,
  { fn: (rowValue: string, filterValue: string | string[]) => boolean }
> = {
  equals: {
    fn: (rowValue, filterValue) => rowValue === filterValue,
  },
  notEquals: {
    fn: (rowValue, filterValue) => rowValue !== filterValue,
  },
  anyOf: {
    fn: (rowValue, filterValue) =>
      Array.isArray(filterValue) ? filterValue.includes(rowValue) : rowValue === filterValue,
  },
  noneOf: {
    fn: (rowValue, filterValue) =>
      Array.isArray(filterValue) ? !filterValue.includes(rowValue) : rowValue !== filterValue,
  },
} as const

export const numberFilterOperators: Record<
  NumberOperator,
  { fn: (rowValue: number, filterValue: number | [number, number]) => boolean }
> = {
  equals: {
    fn: (rowValue, filterValue) => rowValue === filterValue,
  },
  notEquals: {
    fn: (rowValue, filterValue) => rowValue !== filterValue,
  },
  greaterThan: {
    fn: (rowValue, filterValue) => {
      if (typeof filterValue === 'number') {
        return rowValue > filterValue
      }
      return false
    },
  },
  greaterThanOrEqual: {
    fn: (rowValue, filterValue) => {
      if (typeof filterValue === 'number') {
        return rowValue >= filterValue
      }
      return false
    },
  },
  lessThan: {
    fn: (rowValue, filterValue) => {
      if (typeof filterValue === 'number') {
        return rowValue < filterValue
      }
      return false
    },
  },
  lessThanOrEqual: {
    fn: (rowValue, filterValue) => {
      if (typeof filterValue === 'number') {
        return rowValue <= filterValue
      }
      return false
    },
  },
  between: {
    fn: (rowValue, filterValue) =>
      Array.isArray(filterValue) ? rowValue >= filterValue[0] && rowValue <= filterValue[1] : false,
  },
} as const

export const textOperatorKeys = Object.keys(textFilterOperators) as [
  TextOperator,
  ...TextOperator[],
]

export const selectOperatorKeys = Object.keys(selectFilterOperators) as [
  SelectOperator,
  ...SelectOperator[],
]

export const numberOperatorKeys = Object.keys(numberFilterOperators) as [
  NumberOperator,
  ...NumberOperator[],
]

export const filterDefinitions = {
  text: {
    operators: textOperatorKeys,
    schema: z.object({
      filterOperator: z.enum(textOperatorKeys),
      filterValue: z.string(),
    }),
    defaultOperator: 'contains' as const,
    defaultValue: '',
  },
  select: {
    operators: selectOperatorKeys,
    schema: z.object({
      filterOperator: z.enum(selectOperatorKeys),
      filterValue: z.union([z.string(), z.array(z.string())]),
    }),
    defaultOperator: 'equals' as const,
    defaultValue: '',
  },
  number: {
    operators: numberOperatorKeys,
    schema: z.object({
      filterOperator: z.enum(numberOperatorKeys),
      filterValue: z.union([z.number(), z.tuple([z.number(), z.number()])]),
    }),
    defaultOperator: 'equals' as const,
    defaultValue: 0,
  },
}

export const defaultOperatorLabels: Record<FilterOperator, string> = {
  equals: 'is',
  notEquals: 'is not',
  contains: 'contains',
  notContains: 'does not contain',
  startsWith: 'starts with',
  endsWith: 'ends with',
  empty: 'is empty',
  notEmpty: 'is not empty',
  greaterThan: 'is greater than',
  greaterThanOrEqual: 'is greater than or equal',
  lessThan: 'is less than',
  lessThanOrEqual: 'is less than or equal',
  before: 'is before',
  after: 'is after',
  between: 'is between',
  anyOf: 'is any of',
  noneOf: 'is none of',
}
