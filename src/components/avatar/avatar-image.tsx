import { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import { cn } from '@/utils/cn'

import type { AvatarImageProps } from './avatar.types'

export const AvatarImage = ({ className, ref, ...props }: AvatarImageProps) => {
  return (
    <BaseAvatar.Image
      className={cn('size-full rounded-full object-cover', className)}
      data-slot="avatar-image"
      ref={ref}
      {...props}
    />
  )
}
