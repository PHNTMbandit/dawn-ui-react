import { Slider as BaseSlider } from '@base-ui/react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import { cn } from '@/utils/cn'

import type { SliderThumbProps } from './slider.types'

export const SliderThumb = ({ className, children, ref, ...props }: SliderThumbProps) => {
  const [isHovering, setIsHovering] = React.useState(false)
  const [isDragging, setIsDragging] = React.useState(false)

  React.useEffect(() => {
    if (!isDragging) return
    const handlePointerUp = () => setIsDragging(false)
    window.addEventListener('pointerup', handlePointerUp)
    return () => window.removeEventListener('pointerup', handlePointerUp)
  }, [isDragging])

  return (
    <Tooltip open={isHovering || isDragging} trackCursorAxis="x">
      <TooltipTrigger
        delay={0}
        render={
          <BaseSlider.Thumb
            className={cn(
              'absolute aspect-square size-sm rounded-full border-2 border-brand-border-strong bg-surface shadow-xs transition-[width,height] outline-none hover:cursor-pointer data-dragging:size-md data-dragging:cursor-grabbing data-dragging:shadow-sm',
              className,
            )}
            onPointerDown={() => setIsDragging(true)}
            onPointerEnter={() => setIsHovering(true)}
            onPointerLeave={() => setIsHovering(false)}
            ref={ref}
            {...props}
          >
            {children}
          </BaseSlider.Thumb>
        }
      />
      <TooltipContent sideOffset={10}>
        <BaseSlider.Value />
      </TooltipContent>
    </Tooltip>
  )
}
