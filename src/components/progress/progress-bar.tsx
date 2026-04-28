import { cn } from '@/utils/cn'

import type { ProgressBarProps } from './progress.types'

export const ProgressBar = ({ className, children, ref, ...props }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div
        className={cn(
          'h-3xs w-full grow rounded-full bg-accent-default/20 transition-colors ease-in-out',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
