import { Avatar as AvatarBase } from './avatar'
import { AvatarBadge } from './avatar-badge'
import { AvatarFallback } from './avatar-fallback'
import { AvatarImage } from './avatar-image'

export const Avatar = Object.assign(AvatarBase, {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Badge: AvatarBadge,
})

export type {
  AvatarBadgeProps,
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps,
} from './avatar.types'
export { AvatarFallback } from './avatar-fallback'
export { AvatarImage } from './avatar-image'
export { AvatarBadge } from './avatar-badge'
