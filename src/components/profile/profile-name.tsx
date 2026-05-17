import { cn } from 'dawn-ui-react'

import type { ProfileNameProps } from './profile.types'

export const ProfileName = ({ className, children, ref, ...props }: ProfileNameProps) => {
  return (
    <span
      className={cn('flex items-center gap-xs style-text-default-0 [&>svg]:size-md', className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  )
}
