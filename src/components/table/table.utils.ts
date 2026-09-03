import { constructFilterFn } from '@tanstack/react-table'

import type {
  DateFilterOperator,
  NumberFilterOperator,
  StringFilterOperator,
  TableSelectFilterOption,
  TableSelectFilterValue,
} from './table.types'

export type DateFilterValue = {
  operator: DateFilterOperator
  date: [string, string]
}

export type StringFilterValue = {
  operator: StringFilterOperator
  value: string
}

export type NumberFilterValue = {
  operator: NumberFilterOperator
  number: [string, string]
}

export const selectFilterFn = constructFilterFn({
  filter: (dataValue: TableSelectFilterOption, filterValue: TableSelectFilterValue) =>
    filterValue.includes(dataValue),
  autoRemove: (value: TableSelectFilterValue) => !value?.length,
})

type ResolvedDateFilterValue = {
  operator: DateFilterOperator
  from: number | null
  to: number | null
}

const parseToTimestamp = (value: string): number | null => {
  if (!value) return null
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return null
  return Date.UTC(parsed.getFullYear(), parsed.getMonth(), parsed.getDate())
}

const normalizeDataValue = (value: unknown): number => {
  if (value instanceof Date) {
    return Date.UTC(value.getFullYear(), value.getMonth(), value.getDate())
  }
  if (typeof value === 'number') {
    const d = new Date(value)
    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())
  }
  if (typeof value === 'string') {
    const parsed = new Date(value)
    if (Number.isNaN(parsed.getTime())) return 0
    return Date.UTC(parsed.getFullYear(), parsed.getMonth(), parsed.getDate())
  }
  return 0
}

export const dateFilterFn = constructFilterFn({
  filter: (dataValue: number, filterValue: ResolvedDateFilterValue) => {
    const { operator, from, to } = filterValue

    switch (operator) {
      case 'equals':
        return from !== null && dataValue === from

      case 'notEquals':
        return from !== null && dataValue !== from

      case 'greaterThan':
        return from !== null && dataValue > from

      case 'lessThan':
        return from !== null && dataValue < from

      case 'between':
        return from !== null && to !== null && dataValue >= from && dataValue <= to

      default:
        return true
    }
  },
  resolveFilterValue: (value: DateFilterValue): ResolvedDateFilterValue => ({
    operator: value.operator,
    from: parseToTimestamp(value.date[0]),
    to: parseToTimestamp(value.date[1]),
  }),
  resolveDataValue: normalizeDataValue,
  autoRemove: (value: DateFilterValue) => !value || (!value.date[0] && !value.date[1]),
})

export const stringFilterFn = constructFilterFn({
  filter: (dataValue: string, filterValue: StringFilterValue) => {
    const { operator, value } = filterValue
    const normalizedDataValue = dataValue.toLocaleLowerCase()
    const normalizedFilterValue = value.toLocaleLowerCase()

    switch (operator) {
      case 'equals':
        return normalizedDataValue === normalizedFilterValue

      case 'notEquals':
        return normalizedDataValue !== normalizedFilterValue

      case 'contains':
        return normalizedDataValue.includes(normalizedFilterValue)

      case 'notContains':
        return !normalizedDataValue.includes(normalizedFilterValue)

      case 'startsWith':
        return normalizedDataValue.startsWith(normalizedFilterValue)

      case 'endsWith':
        return normalizedDataValue.endsWith(normalizedFilterValue)

      default:
        return true
    }
  },
  resolveDataValue: (value: unknown) =>
    typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean'
      ? String(value)
      : '',
  autoRemove: (value: StringFilterValue) => !value || value.value === '',
})

type ResolvedNumberFilterValue = {
  operator: NumberFilterOperator
  from: number | null
  to: number | null
}

const parseToNumber = (value: string): number | null => {
  if (value.trim() === '') return null
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

export const numberFilterFn = constructFilterFn({
  filter: (dataValue: number, filterValue: ResolvedNumberFilterValue) => {
    const { operator, from, to } = filterValue

    switch (operator) {
      case 'equals':
        return from !== null && dataValue === from

      case 'notEquals':
        return from !== null && dataValue !== from

      case 'greaterThan':
        return from !== null && dataValue > from

      case 'lessThan':
        return from !== null && dataValue < from

      case 'between':
        return (from === null || dataValue >= from) && (to === null || dataValue <= to)

      default:
        return true
    }
  },
  resolveFilterValue: (value: NumberFilterValue): ResolvedNumberFilterValue => {
    const from = parseToNumber(value.number[0])
    const to = parseToNumber(value.number[1])

    if (from !== null && to !== null && from > to) {
      return { operator: value.operator, from: to, to: from }
    }

    return { operator: value.operator, from, to }
  },
  resolveDataValue: (value: unknown) => Number(value),
  autoRemove: (value: NumberFilterValue) =>
    !value || (value.number[0] === '' && value.number[1] === ''),
})
