import { PlusIcon } from '@phosphor-icons/react'
import { useColourPicker } from './colour-picker'
import { cn } from '@/utils/cn'

import type { ColourPickerPaletteListProps } from './colour-picker.types'

export const ColourPickerPaletteList = ({
  className,
  children,
  ref,
  ...props
}: ColourPickerPaletteListProps) => {
  const { palette, colour, addPaletteColour } = useColourPicker()

  const handleClick = () => {
    addPaletteColour(colour)
  }

  return (
    <ul
      className={cn('flex flex-wrap items-center justify-start gap-2xs', className)}
      ref={ref}
      {...props}
    >
      {children ? palette.map((colour, index) => children({ colour, index })) : null}
      <button
        type="button"
        onClick={handleClick}
        className="flex size-md items-center justify-center rounded-full border border-border-strong text-border-strong hover:cursor-pointer [&>svg]:size-xs"
      >
        <PlusIcon weight="bold" />
      </button>
    </ul>
  )
}
