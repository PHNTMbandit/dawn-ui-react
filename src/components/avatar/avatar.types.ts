import { cva } from 'class-variance-authority'

import type { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

export const avatarVariants = cva(
  // oxlint-disable-next-line tailwindcss/no-unknown-classes
  'group/avatar relative inline-flex shrink-0 items-center justify-center rounded-full',
  {
    variants: {
      size: {
        small: 'size-lg style-text-default--1',
        medium: 'size-xl style-text-default-0',
        large: 'size-2xl style-text-default-1',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export const avatarBadgeVariants = cva(
  'absolute right-0 bottom-0 inline-flex items-center justify-center rounded-full outline-3 outline-surface-background group-data-[size=large]/avatar:size-md group-data-[size=medium]/avatar:size-sm group-data-[size=small]/avatar:size-xs group-data-[size=large]/avatar:[&_svg]:size-sm group-data-[size=medium]/avatar:[&_svg]:size-xs group-data-[size=small]/avatar:[&_svg]:size-2xs',
  {
    variants: {
      tone: {
        brand: 'bg-brand-default [&>svg]:text-brand-on-default',
        accent: 'bg-accent-default [&>svg]:text-accent-on-default',
        neutral: 'bg-neutral-default [&>svg]:text-neutral-on-default',
        error: 'bg-error-default [&>svg]:text-error-on-default',
        info: 'bg-info-default [&>svg]:text-info-on-default',
        success: 'bg-success-default [&>svg]:text-success-on-default',
        warning: 'bg-warning-default [&>svg]:text-warning-on-default',
      },
      position: {
        topLeft: 'top-0 left-0',
        topRight: 'top-0 right-0',
        bottomLeft: 'bottom-0 left-0',
        bottomRight: 'right-0 bottom-0',
      },
    },
    defaultVariants: {
      tone: 'success',
      position: 'bottomRight',
    },
  },
)

export type AvatarProps = ComponentProps<typeof BaseAvatar.Root> &
  VariantProps<typeof avatarVariants>
export type AvatarImageProps = ComponentProps<typeof BaseAvatar.Image>
export type AvatarFallbackProps = ComponentProps<typeof BaseAvatar.Fallback>
export type AvatarBadgeProps = ComponentProps<'div'> & VariantProps<typeof avatarBadgeVariants>
