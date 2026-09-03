import { Tabs, TabsIndicator, TabsList, TabsTab } from '../tabs'
import { useCodeBlock } from './code-block'
import { cn } from '@/utils/cn'

import type { CodeBlockTabsProps } from './code-block.types'

export const CodeBlockTabs = ({ className, children, ref, ...props }: CodeBlockTabsProps) => {
  const { currentValue, items, setCurrentValue } = useCodeBlock()

  const handleOnValueChange = (value: string) => {
    const selectedValue = items.find((v) => v.id === value)
    if (selectedValue) {
      setCurrentValue(selectedValue)
    }
  }

  return (
    <Tabs
      value={currentValue.id}
      onValueChange={handleOnValueChange}
      className={cn('', className)}
      variant={'ghost'}
      ref={ref}
      {...props}
    >
      <TabsList>
        {items.map(({ id, label }) => (
          <TabsTab key={id} value={id}>
            {label}
          </TabsTab>
        ))}
        <TabsIndicator />
      </TabsList>
      {children}
    </Tabs>
  )
}
