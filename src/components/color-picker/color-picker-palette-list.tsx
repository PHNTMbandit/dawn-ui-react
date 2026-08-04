import { PlusIcon } from '@phosphor-icons/react'
import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerPaletteListProps } from './color-picker.types'

export const ColorPickerPaletteList = ({
  className,
  children,
  ref,
  ...props
}: ColorPickerPaletteListProps) => {
  const { palette, color, addPaletteColor } = useColorPicker()

  const handleClick = () => {
    addPaletteColor(color)
  }

  return (
    <ul
      className={cn('flex flex-wrap items-center justify-start gap-2xs', className)}
      ref={ref}
      {...props}
    >
      {children ? palette.map((color, index) => children({ color, index })) : null}
      <button
        type="button"
        onClick={handleClick}
        className="flex size-md items-center justify-center rounded-lg border border-border-strong text-border-strong hover:cursor-pointer [&>svg]:size-xs"
      >
        <PlusIcon weight="bold" />
      </button>
    </ul>
  )
}
