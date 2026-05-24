import { CaretUpDownIcon } from '@phosphor-icons/react'
import {
  Select,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../select'
import { useCodeBlock } from './code-block'
import { cn } from '@/utils/cn'

import type { CodeBlockSelectProps } from './code-block.types'

export const CodeBlockSelect = ({ className, children, ref, ...props }: CodeBlockSelectProps) => {
  const { currentValue, setCurrentValue, items } = useCodeBlock()

  const handleChange = (value: unknown) => {
    const selectedValue = items.find((v) => v.id === value)
    if (selectedValue) {
      setCurrentValue(selectedValue)
    }
  }

  return (
    <Select value={currentValue.id} onValueChange={handleChange}>
      <SelectTrigger className={cn('', className)} ref={ref} {...props} variant={'ghost'}>
        <SelectValue>
          {(value: keyof typeof items) => items.find((item) => item.id === value)?.label}
        </SelectValue>
        <SelectIcon>
          <CaretUpDownIcon weight="bold" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPopup>
        <SelectList>
          {children}
          <SelectGroup>
            {items.map(({ label, id }) => (
              <SelectItem key={id} value={id}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectList>
      </SelectPopup>
    </Select>
  )
}
