import { Slider as BaseSlider } from '@base-ui/react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { cn } from '@/utils/cn'

import type { SliderThumbProps } from './slider.types'

export const SliderThumb = ({ className, children, ref, hide, ...props }: SliderThumbProps) => {
  const [isHovering, setIsHovering] = React.useState(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const thumbRef = React.useRef<HTMLDivElement>(null)

  const setRefs = React.useCallback(
    (node: HTMLDivElement | null) => {
      thumbRef.current = node
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ;(ref as { current: HTMLDivElement | null }).current = node
      }
    },
    [ref],
  )

  React.useEffect(() => {
    const node = thumbRef.current
    if (!node) return
    const update = () => setIsDragging(node.hasAttribute('data-dragging'))
    update()
    const observer = new MutationObserver(update)
    observer.observe(node, { attributes: true, attributeFilter: ['data-dragging'] })
    return () => observer.disconnect()
  }, [])

  return (
    <Tooltip open={isHovering || isDragging} trackCursorAxis="x" disabled={hide}>
      <TooltipTrigger delay={0}>
        <BaseSlider.Thumb
          data-slot="slider-thumb"
          className={cn(
            'absolute aspect-square rounded-full bg-surface transition-[width,height,opacity] outline-none data-dragging:cursor-grabbing data-dragging:shadow-sm hover:[&:not([data-dragging])]:cursor-pointer',
            className,
          )}
          onPointerEnter={() => setIsHovering(true)}
          onPointerLeave={() => setIsHovering(false)}
          ref={setRefs}
          {...props}
        >
          {children}
        </BaseSlider.Thumb>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <BaseSlider.Value />
      </TooltipContent>
    </Tooltip>
  )
}
