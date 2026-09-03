import { PlusIcon } from '@phosphor-icons/react'
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
    <button
      onClick={handleClick}
      className={cn(
        'flex size-md items-center justify-center rounded-lg border border-border-strong text-border-strong hover:cursor-pointer [&>svg]:size-xs',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <PlusIcon weight="bold" />
    </button>
  )
}
