import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerPaletteLimitProps } from './color-picker.types'

export const ColorPickerPaletteLimit = ({
  className,
  children,
  ref,
  ...props
}: ColorPickerPaletteLimitProps) => {
  const { palette, paletteLimit } = useColorPicker()
  const isAtLimit = paletteLimit && palette.length >= paletteLimit

  if (!paletteLimit) {
    return null
  }

  return (
    <span
      className={cn(
        'style-text-prose--2',
        isAtLimit ? 'text-error-default' : 'text-on-surface-variant',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      {palette.length} / {paletteLimit}
    </span>
  )
}
