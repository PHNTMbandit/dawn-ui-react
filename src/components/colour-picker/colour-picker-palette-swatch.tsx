import { useColourPicker } from './colour-picker'
import {
  colourPickerSwatchVariants,
  type ColourPickerPaletteSwatchProps,
} from './colour-picker.types'
import { cn } from '@/index'

export const ColourPickerPaletteSwatch = ({
  size,
  colour,
  className,
  children,
  ref,
  ...props
}: ColourPickerPaletteSwatchProps) => {
  const { setColour } = useColourPicker()

  const handleClick = () => {
    setColour(colour)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(colourPickerSwatchVariants({ size }), className)}
      ref={ref}
      style={{
        color: colour.css(),
      }}
      {...props}
    >
      {children}
      <div className="size-full" style={{ backgroundColor: colour.css() }} />
    </button>
  )
}
