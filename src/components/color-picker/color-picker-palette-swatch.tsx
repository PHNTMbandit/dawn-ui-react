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
    setColor(color)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(colorPickerSwatchVariants({ size }), className)}
      ref={ref}
      style={{
        color: color.css(),
      }}
      {...props}
    >
      {children}
      <div className="size-full" style={{ backgroundColor: color.css() }} />
    </button>
  )
}
