import type { Dialog as BaseDialog } from '@base-ui/react/dialog'
import type { ComponentProps } from 'react'

export type DialogProps = ComponentProps<typeof BaseDialog.Root>

export type DialogTriggerProps = ComponentProps<typeof BaseDialog.Trigger>

export type DialogPopupProps = ComponentProps<typeof BaseDialog.Popup>

export type DialogTitleProps = ComponentProps<typeof BaseDialog.Title>

export type DialogDescriptionProps = ComponentProps<typeof BaseDialog.Description>

export type DialogCloseProps = ComponentProps<typeof BaseDialog.Close>
export type DialogContentProps = React.ComponentProps<'div'>
export type DialogHeaderProps = React.ComponentProps<'div'>
export type DialogFooterProps = React.ComponentProps<'div'>
