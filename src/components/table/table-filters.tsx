import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverPanel,
  PopoverTitle,
  PopoverTrigger,
} from '../popover'
import { useTable } from './table'
import { TableFilterForm } from './table-filter-form'
import { defaultOperatorLabels } from './table.constants'
import { cn } from '@/utils/cn'

import type { TableFiltersProps } from './table.types'
import type { ColumnFilter } from '@tanstack/react-table'

const formatFilterValue = (value: unknown): string => {
  if (value instanceof Date) {
    return value.toLocaleDateString()
  }
  if (Array.isArray(value)) {
    return value.join(', ')
  }
  return String(value)
}

export const TableFilters = ({
  operatorLabels = defaultOperatorLabels,
  className,
  children,
  ref,
  ...props
}: TableFiltersProps) => {
  const { table } = useTable()
  const mergedLabels = { ...defaultOperatorLabels, ...operatorLabels }

  const getLabel = (filter: ColumnFilter) => {
    if (
      typeof filter.value === 'object' &&
      filter.value !== null &&
      'filterOperator' in filter.value &&
      'filterValue' in filter.value
    ) {
      const { filterOperator, filterValue } = filter.value as {
        filterOperator: string
        filterValue: unknown
      }
      const operatorLabel =
        mergedLabels[filterOperator as keyof typeof mergedLabels] ?? filterOperator

      if (filterOperator === 'between' && Array.isArray(filterValue)) {
        return (
          <p>
            <span className="font-medium">{filter.id}</span>{' '}
            <span className="text-on-surface-variant">{operatorLabel}</span>{' '}
            <span>
              {filterValue[0]} - {filterValue[1]}
            </span>
          </p>
        )
      }

      const valueStr = formatFilterValue(filterValue)

      return (
        <p>
          <span className="font-medium">{filter.id}</span>{' '}
          <span className="text-on-surface-variant">{operatorLabel}</span> <span>{valueStr}</span>
        </p>
      )
    }

    if (
      typeof filter.value === 'object' &&
      filter.value !== null &&
      'operator' in filter.value &&
      'value' in filter.value
    ) {
      const { operator, value, valueTo } = filter.value as {
        operator: string
        value: unknown
        valueTo?: unknown
      }
      const operatorLabel = mergedLabels[operator as keyof typeof mergedLabels] ?? operator
      const valueStr = formatFilterValue(value)
      const valueToStr = valueTo !== undefined ? ` - ${formatFilterValue(valueTo)}` : ''

      return (
        <p>
          <span className="font-medium">{filter.id}</span>{' '}
          <span className="text-on-surface-variant">{operatorLabel}</span>{' '}
          <span>
            {valueStr}
            {valueToStr}
          </span>
        </p>
      )
    }

    if (
      typeof filter.value === 'object' &&
      filter.value !== null &&
      ('min' in filter.value || 'max' in filter.value)
    ) {
      const { min, max } = filter.value as { min?: number; max?: number }
      let rangeStr = ''
      if (min !== undefined && max !== undefined) {
        rangeStr = `${min} - ${max}`
      } else if (min !== undefined) {
        rangeStr = `≥ ${min}`
      } else if (max !== undefined) {
        rangeStr = `≤ ${max}`
      }

      return (
        <p>
          <span className="font-medium">{filter.id}</span> <span>{rangeStr}</span>
        </p>
      )
    }

    return (
      <p>
        <span className="font-medium">{filter.id}</span>{' '}
        <span>{formatFilterValue(filter.value)}</span>
      </p>
    )
  }

  return (
    <ul className={cn('flex flex-wrap items-center gap-xs', className)} ref={ref} {...props}>
      {table.getState().columnFilters.map((filter) => {
        const column = table.getColumn(filter.id)
        if (!column) return null
        const filterType = column.columnDef.meta?.filterType ?? 'text'

        return (
          <Popover key={filter.id}>
            <PopoverTrigger>
              <button className="inline-flex items-center justify-center gap-xs rounded-lg border border-transparent bg-neutral-container py-3xs pr-2xs pl-xs style-text-prose--1 transition-colors hover:cursor-pointer hover:border-border-strong">
                {getLabel(filter)}
              </button>
            </PopoverTrigger>
            <PopoverPanel
              side="bottom"
              className={cn('', className)}
              onKeyDownCapture={(event) => event.stopPropagation()}
            >
              <PopoverHeader>
                <PopoverTitle>{column.id}</PopoverTitle>
              </PopoverHeader>
              <PopoverContent>
                <TableFilterForm
                  column={column}
                  operatorLabels={operatorLabels}
                  filterType={filterType}
                />
              </PopoverContent>
            </PopoverPanel>
          </Popover>
        )
      })}
      {children}
    </ul>
  )
}
