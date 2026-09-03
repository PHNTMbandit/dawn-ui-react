import chroma from 'chroma-js'
import { useColorPicker } from './color-picker'
import { cn } from '@/utils/cn'

import type { ColorPickerAreaProps } from './color-picker.types'

export const ColorPickerArea = ({ className, ref, ...props }: ColorPickerAreaProps) => {
  const { color, hue, saturation, value, setSaturationValue } = useColorPicker()
  const hueColor = chroma.hsv(hue, 1, 1).hex()

  const updateColor = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const nextSaturation = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1)
    const nextValue = Math.min(Math.max(1 - (event.clientY - bounds.top) / bounds.height, 0), 1)

    setSaturationValue(nextSaturation, nextValue)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    updateColor(event)
  }

  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        'relative aspect-square grow touch-none rounded-lg active:cursor-grabbing',
        className,
      )}
      style={{
        background: `
          linear-gradient(to top, black, transparent),
          linear-gradient(to right, white, ${hueColor})
        `,
        ...props.style,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          updateColor(event)
        }
      }}
    >
      <div
        className="pointer-events-none absolute size-md -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-white"
        style={{
          left: `${saturation * 100}%`,
          top: `${(1 - value) * 100}%`,
          backgroundColor: color.hex(),
        }}
      />
    </div>
  )
}
