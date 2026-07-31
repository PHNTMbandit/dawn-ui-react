import { PercentIcon } from '@phosphor-icons/react'
import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../input-group'
import { Separator } from '../separator'
import { useColourPicker } from './colour-picker'
import { cn } from '@/utils/cn'

import type { ColourPickerInputProps } from './colour-picker.types'

export const ColourPickerInput = ({
  className,
  children,
  ref,
  ...props
}: ColourPickerInputProps) => {
  const { colour, setColour, valueType } = useColourPicker()
  const [inputValue, setInputValue] = React.useState<string>(valueType.getValue(colour))
  const [transparency, setTransparency] = React.useState<string>(
    Math.round(colour.alpha() * 100).toString(),
  )

  const handleValueChange = (value: string) => {
    setInputValue(value)
  }

  const handleTransparencyChange = (value: string) => {
    setTransparency(value)
  }

  const handleValueBlur = () => {
    const newColour = valueType.parseValue(inputValue)
    if (newColour) {
      setColour(newColour)
    }
  }

  const handleTransparencyBlur = () => {
    const alpha = parseFloat(transparency)
    if (!Number.isNaN(alpha)) {
      setColour(colour.alpha(alpha / 100))
    }
  }

  React.useEffect(() => {
    setInputValue(valueType.getValue(colour))
    setTransparency(Math.round(colour.alpha() * 100).toString())
  }, [colour, valueType])

  return (
    <InputGroup variant={'secondary'} className={cn('', className)} ref={ref} {...props}>
      <InputGroupAddon
        style={{
          backgroundColor: colour.hex(),
        }}
        className="aspect-square size-md rounded-full"
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
