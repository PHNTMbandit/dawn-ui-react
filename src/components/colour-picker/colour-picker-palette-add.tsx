import { Button } from '../button'
import { useColourPicker } from './colour-picker'
import { cn } from '@/utils/cn'

import type { ColourPickerPaletteAddProps } from './colour-picker.types'

export const ColourPickerPaletteAdd = ({
  className,
  children,
  ref,
  ...props
}: ColourPickerPaletteAddProps) => {
  const { colour, addPaletteColour } = useColourPicker()

  const handleClick = () => {
    addPaletteColour(colour)
  }

  return (
    <Button onClick={handleClick} className={cn('', className)} ref={ref} {...props}>
      {children}
    </Button>
  )
}
