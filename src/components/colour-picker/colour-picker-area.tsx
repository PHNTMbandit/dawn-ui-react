import chroma from 'chroma-js'
import { useColourPicker } from './colour-picker'
import { cn } from '@/utils/cn'

import type { ColourPickerAreaProps } from './colour-picker.types'

export const ColourPickerArea = ({ className, ref, ...props }: ColourPickerAreaProps) => {
  const { colour, hue, saturation, value, setSaturation, setValue } = useColourPicker()
  const hueColour = chroma.hsv(hue, 1, 1).hex()

  const updateColour = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const nextSaturation = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1)
    const nextValue = Math.min(Math.max(1 - (event.clientY - bounds.top) / bounds.height, 0), 1)

    setSaturation(nextSaturation)
    setValue(nextValue)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    updateColour(event)
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
          linear-gradient(to right, white, ${hueColour})
        `,
        ...props.style,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          updateColour(event)
        }
      }}
    >
      <div
        className="pointer-events-none absolute size-md -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-white"
        style={{
          left: `${saturation * 100}%`,
          top: `${(1 - value) * 100}%`,
          backgroundColor: colour.hex(),
        }}
      />
    </div>
  )
}
