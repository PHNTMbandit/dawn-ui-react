import { CaretUpDownIcon } from '@phosphor-icons/react'
import {
  Select,
  SelectIcon,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../select'
import { useColourPicker } from './colour-picker'
import { VALUE_TYPES, type ColourPickerValueTypeProps } from './colour-picker.types'
import { cn } from '@/utils/cn'

export const ColourPickerValueType = ({
  className,
  children,
  ref,
  ...props
}: ColourPickerValueTypeProps) => {
  const { valueType, setValueType } = useColourPicker()

  const handleChange = (value: unknown) => {
    setValueType(VALUE_TYPES.find((type) => type.value === value) ?? VALUE_TYPES[0])
  }

  return (
    <Select value={valueType.value} onValueChange={handleChange}>
      <SelectTrigger variant={'secondary'} className={cn('', className)} ref={ref} {...props}>
        {children}
        <SelectValue>
          {(value: string) => VALUE_TYPES.find((type) => type.value === value)?.label ?? value}
        </SelectValue>
        <SelectIcon>
          <CaretUpDownIcon weight="bold" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPopup sideOffset={8}>
        <SelectList>
          {VALUE_TYPES.map(({ label, value }) => (
            <SelectItem key={label} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
  )
}
