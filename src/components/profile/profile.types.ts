import type { ComponentProps } from 'react'

export type ProfileProps = ComponentProps<'div'>
export type ProfileContentProps = React.ComponentProps<'div'> & {
  compact?: boolean
}
export type ProfileActionProps = React.ComponentProps<'div'>
export type ProfileNameProps = React.ComponentProps<'span'>
export type ProfileSubnameProps = React.ComponentProps<'span'>
