import { useColorPicker } from './color-picker'
import { ColorPickerPaletteSwatch } from './color-picker-palette-swatch'
import { cn } from '@/utils/cn'

import type { ColorPickerPaletteListProps } from './color-picker.types'

export const ColorPickerPaletteList = ({
  className,
  children,
  ref,
  ...props
}: ColorPickerPaletteListProps) => {
  const { palette } = useColorPicker()

  return (
    <ul
      className={cn('flex flex-wrap items-center justify-start gap-2xs', className)}
      ref={ref}
      {...props}
    >
      {palette.map((color, index) => (
        <ColorPickerPaletteSwatch key={index} color={color.css()} size="medium" />
      ))}
      {children}
    </ul>
  )
}
