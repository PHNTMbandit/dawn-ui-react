import { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import { avatarVariants, type AvatarProps } from './avatar.types'
import { cn } from '@/utils/cn'

export const Avatar = ({ size = 'medium', className, children, ref, ...props }: AvatarProps) => {
  return (
    <BaseAvatar.Root
      className={cn(avatarVariants({ className, size }))}
      data-size={size}
      data-slot="avatar"
      ref={ref}
      {...props}
    >
      {children}
    </BaseAvatar.Root>
  )
}
