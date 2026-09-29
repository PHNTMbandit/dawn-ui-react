import { Meter as BaseMeter } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { MeterTrackProps } from './meter.types'

export const MeterTrack = ({ className, children, ref, ...props }: MeterTrackProps) => {
  return (
    <BaseMeter.Track
      className={cn('w-full self-center rounded-full bg-surface-low inset-shadow-2xs', className)}
      data-track
      ref={ref}
      {...props}
    >
      {children}
    </BaseMeter.Track>
  )
}
