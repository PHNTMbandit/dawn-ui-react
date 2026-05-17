import { cn } from 'dawn-ui-react'

import type { ProfileActionProps } from './profile.types'

export const ProfileAction = ({ className, children, ref, ...props }: ProfileActionProps) => {
  return (
    <div
      className={cn('ml-auto text-on-surface-variant [&>svg]:size-sm', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
