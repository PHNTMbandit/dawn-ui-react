import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '../avatar'
import { cn } from '@/utils/cn'

import type { ProfileProps } from './profile.types'

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

export const Profile = ({
  className,
  imageUrl,
  fallbackText,
  profileName,
  profileEmail,
  compact = false,
  hideEmail = false,
  avatarAlt,
  avatarSize = 'medium',
  showBadge = false,
  badgeTone = 'success',
  badgePosition = 'bottomRight',
  badgeContent,
  children,
  ref,
  ...props
}: ProfileProps) => {
  const initials = fallbackText ?? getInitials(profileName)

  return (
    <div
      className={cn('flex w-full items-center justify-between gap-3xl rounded-full', className)}
      ref={ref}
      {...props}
    >
      <div className="flex items-center gap-xs">
        <Avatar size={avatarSize}>
          {imageUrl ? <AvatarImage alt={avatarAlt ?? profileName} src={imageUrl} /> : null}
          <AvatarFallback>{initials}</AvatarFallback>
          {showBadge ? (
            <AvatarBadge position={badgePosition} tone={badgeTone}>
              {badgeContent}
            </AvatarBadge>
          ) : null}
        </Avatar>
        <div className={cn('flex flex-col items-start justify-start', compact && 'hidden')}>
          <span className="style-text-default-0">{profileName}</span>
          {!hideEmail && profileEmail ? (
            <span className="style-text-default--2 text-on-surface-variant">{profileEmail}</span>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  )
}
