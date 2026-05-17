import { cn } from 'dawn-ui-react'

import type { ProfileContentProps } from './profile.types'

export const ProfileContent = ({
  compact,
  className,
  children,
  ref,
  ...props
}: ProfileContentProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-start justify-start gap-3xs',
        compact && 'hidden',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
