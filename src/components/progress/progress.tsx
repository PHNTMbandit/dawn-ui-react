import { useId } from 'react'
import { cn } from '@/utils/cn'

import type { ProgressProps } from './progress.types'

export const Progress = ({ currentIndex, className, children, ref, ...props }: ProgressProps) => {
  const uid = useId().replace(/:/g, '')
  const scope = `progress-${uid}`
  const current = currentIndex

  return (
    <>
      <style>
        {`
      .${scope} > :nth-child(${current}) [data-slot='progress-indicator'] {
			background-color: var(--color-accent-container);
			border: 1px solid var(--color-accent-border-strong);
			color: var(--color-accent-on-container);
		  }
      .${scope} > :nth-child(-n+${current - 1}) [data-slot='progress-indicator'] {
			background-color: var(--color-accent-default);
			border: none;
			color: var(--color-accent-on-default);
			box-shadow: none;
		  }
      .${scope} > :nth-child(-n+${current - 1}) [data-slot='progress-bar'] {
      background-color: var(--color-accent-default);
      }
		`}
      </style>

      <div
        className={cn('flex w-full items-center justify-center gap-2xs', scope, className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </>
  )
}
