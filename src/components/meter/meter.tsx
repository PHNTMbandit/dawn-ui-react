import { Meter as BaseMeter } from '@base-ui/react'
import { type MeterProps, meterVariants } from './meter.types'
import { cn } from '@/utils/cn'

export const Meter = ({
  orientation,
  size,
  tone,
  className,
  children,
  ref,
  ...props
}: MeterProps) => {
  return (
    <BaseMeter.Root
      className={cn(meterVariants({ orientation, size, tone, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </BaseMeter.Root>
  )
}
