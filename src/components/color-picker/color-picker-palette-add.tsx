import { Button } from '../button'
import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerPaletteAddProps } from './color-picker.types'

export const ColorPickerPaletteAdd = ({
  className,
  children,
  ref,
  ...props
}: ColorPickerPaletteAddProps) => {
  const { color, addPaletteColor } = useColorPicker()

  const handleClick = () => {
    addPaletteColor(color)
  }

  return (
    <Button onClick={handleClick} className={cn('', className)} ref={ref} {...props}>
      {children}
    </Button>
  )
}
