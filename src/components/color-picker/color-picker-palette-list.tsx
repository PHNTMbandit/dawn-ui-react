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
        <li key={index} className="flex">
          <ColorPickerPaletteSwatch color={color.css()} size="medium" />
        </li>
      ))}
      {children && <li className="flex">{children}</li>}
    </ul>
  )
}
