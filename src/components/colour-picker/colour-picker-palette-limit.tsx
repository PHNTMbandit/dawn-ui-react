import { useColourPicker } from './colour-picker'
import { cn } from '@/utils/cn'

import type { ColourPickerPaletteLimitProps } from './colour-picker.types'

export const ColourPickerPaletteLimit = ({
  className,
  children,
  ref,
  ...props
}: ColourPickerPaletteLimitProps) => {
  const { palette, paletteLimit } = useColourPicker()
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
