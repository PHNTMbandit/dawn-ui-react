import { Fragment } from 'react'
import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerPaletteListProps } from './color-picker.types'

export const ColorPickerPaletteList = ({
  className,
  children,
  ref,
  ...props
}: ColorPickerPaletteListProps) => {
  const { palette } = useColorPicker()

  const items = Array.isArray(children) ? children : [children]

  return (
    <ul
      className={cn('flex flex-wrap items-center justify-start gap-2xs', className)}
      ref={ref}
      {...props}
    >
      {items.map((child, index) => (
        <Fragment key={index}>
          {typeof child === 'function'
            ? palette.map((color, colorIndex) => child({ color, index: colorIndex }))
            : child}
        </Fragment>
      ))}
    </ul>
  )
}
