import type { AvatarBadgeProps, AvatarProps } from '../avatar'
import type { ComponentProps } from 'react'
import type { ReactNode } from 'react'

export type ProfileProps = ComponentProps<'div'> & {
  imageUrl?: string
  fallbackText?: string
  profileName: string
  profileEmail?: string
  compact?: boolean
  hideEmail?: boolean
  avatarAlt?: string
  avatarSize?: AvatarProps['size']
  showBadge?: boolean
  badgeTone?: AvatarBadgeProps['tone']
  badgePosition?: AvatarBadgeProps['position']
  badgeContent?: ReactNode
}
