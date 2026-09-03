import chroma from 'chroma-js'
import { useColorPicker } from './color-picker'
import { colorPickerSwatchVariants, type ColorPickerPaletteSwatchProps } from './color-picker.types'
import { cn } from '@/index'

export const ColorPickerPaletteSwatch = ({
  size,
  color,
  className,
  children,
  ref,
  ...props
}: ColorPickerPaletteSwatchProps) => {
  const { setColor } = useColorPicker()

  const handleClick = () => {
    setColor(chroma(color))
  }

  return (
    <button
      onClick={handleClick}
      className={cn(colorPickerSwatchVariants({ size }), className)}
      ref={ref}
      style={{
        color: color,
      }}
      {...props}
    >
      {children}
      <div className="size-full" style={{ backgroundColor: color }} />
    </button>
  )
}
