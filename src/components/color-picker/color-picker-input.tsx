import { PercentIcon } from '@phosphor-icons/react'
import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../input-group'
import { Separator } from '../separator'
import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerInputProps } from './color-picker.types'

export const ColorPickerInput = ({ className, children, ref, ...props }: ColorPickerInputProps) => {
  const { color, setColor, valueType } = useColorPicker()
  const [inputValue, setInputValue] = React.useState<string>(valueType.getValue(color))
  const [transparency, setTransparency] = React.useState<string>(
    Math.round(color.alpha() * 100).toString(),
  )

  const handleValueChange = (value: string) => {
    setInputValue(value)
  }

  const handleTransparencyChange = (value: string) => {
    setTransparency(value)
  }

  const handleValueBlur = () => {
    const newColor = valueType.parseValue(inputValue)
    if (newColor) {
      setColor(newColor)
    }
  }

  const handleTransparencyBlur = () => {
    const alpha = parseFloat(transparency)
    if (!Number.isNaN(alpha)) {
      setColor(color.alpha(alpha / 100))
    }
  }

  React.useEffect(() => {
    setInputValue(valueType.getValue(color))
    setTransparency(Math.round(color.alpha() * 100).toString())
  }, [color, valueType])

  return (
    <InputGroup variant={'secondary'} className={cn('', className)} ref={ref} {...props}>
      <InputGroupAddon
        style={{
          backgroundColor: color.hex(),
        }}
        className="aspect-square size-md rounded-lg"
      />
      <InputGroupInput
        value={inputValue}
        onValueChange={handleValueChange}
        onBlur={handleValueBlur}
        className="uppercase"
      />
      <Separator orientation="vertical" className="h-md" />
      <InputGroupAddon>
        <PercentIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput
        type="number"
        min={0}
        max={100}
        value={transparency}
        onValueChange={handleTransparencyChange}
        onBlur={handleTransparencyBlur}
        className="w-xl"
      />
      {children}
    </InputGroup>
  )
}
