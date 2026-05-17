import { cn } from 'dawn-ui-react'

import type { ProfileSubnameProps } from './profile.types'

export const ProfileSubname = ({ className, children, ref, ...props }: ProfileSubnameProps) => {
  return (
    <span
      className={cn('style-text-default--2 text-on-surface-variant', className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  )
}
