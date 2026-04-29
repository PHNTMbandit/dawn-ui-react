import { type RadarPingProps, radarPingVariants } from './radar-ping.types'
import { cn } from '@/utils/cn'

export const RadarPing = ({
  hidePing = false,
  tone = 'brand',
  size = 'medium',
  className,
  children,
  ref,
  ...props
}: RadarPingProps) => {
  return (
    <div className={cn(radarPingVariants({ tone, size, className }))} ref={ref} {...props}>
      {!hidePing && (
        <span
          className="absolute inline-flex size-full animate-ping rounded-full opacity-75"
          data-radar-ping
        />
      )}
      <span
        className="relative flex items-center justify-center rounded-full text-surface"
        data-dot
      >
        {children}
      </span>
    </div>
  )
}
