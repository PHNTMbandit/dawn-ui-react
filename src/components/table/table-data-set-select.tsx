import { CaretUpDownIcon } from '@phosphor-icons/react'
import { SelectIcon, SelectItem, SelectList, SelectPopup, SelectValue, useTable } from '..'
import { Select, SelectGroup, SelectTrigger } from '../select'
import { cn } from '@/utils/cn'

import type { TableDataSetSelectProps } from './table.types'

export const TableDataSetSelect = ({
  className,
  children,
  ref,
  ...props
}: TableDataSetSelectProps) => {
  const { dataSets, currentDataSet, setCurrentDataSet } = useTable()

  const handleValueChange = (value: unknown) => {
    const selectedDataSet = dataSets?.find((dataSet) => dataSet.label === value)
    if (selectedDataSet && setCurrentDataSet) {
      setCurrentDataSet(selectedDataSet)
    }
  }

  return (
    <Select value={currentDataSet?.label} onValueChange={handleValueChange}>
      <SelectTrigger className={cn('', className)} ref={ref} {...props}>
        <SelectValue />
        <SelectIcon>
          <CaretUpDownIcon weight="bold" />
        </SelectIcon>
        {children}
      </SelectTrigger>
      <SelectPopup>
        <SelectList>
          <SelectGroup>
            {dataSets?.map(({ id, label }) => (
              <SelectItem key={id} value={label}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectList>
      </SelectPopup>
    </Select>
  )
}
