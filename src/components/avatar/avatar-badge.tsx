import { avatarBadgeVariants, type AvatarBadgeProps } from './avatar.types'
import { cn } from '@/utils/cn'

export const AvatarBadge = ({
  tone,
  position,
  className,
  children,
  ref,
  ...props
}: AvatarBadgeProps) => {
  return (
    <div
      data-slot="avatar-badge"
      className={cn(avatarBadgeVariants({ tone, position, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
