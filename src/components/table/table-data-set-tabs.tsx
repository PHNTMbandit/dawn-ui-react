import { Tabs, TabsIndicator, TabsList, TabsTab } from '../tabs'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableDataSetTabsProps } from './table.types'

export const TableDataSetTabs = ({ className, children, ref, ...props }: TableDataSetTabsProps) => {
  const { dataSets, currentDataSet, setCurrentDataSet } = useTable()

  const handleValueChange = (value: unknown) => {
    const selectedDataSet = dataSets?.find((dataSet) => dataSet.label === value)
    if (selectedDataSet && setCurrentDataSet) {
      setCurrentDataSet(selectedDataSet)
    }
  }

  return (
    <Tabs
      className={cn('', className)}
      ref={ref}
      value={currentDataSet?.label}
      onValueChange={handleValueChange}
      {...props}
    >
      <TabsList>
        {dataSets?.map(({ id, label }) => (
          <TabsTab key={id} value={label}>
            {label}
          </TabsTab>
        ))}
        <TabsIndicator />
      </TabsList>
      {children}
    </Tabs>
  )
}
