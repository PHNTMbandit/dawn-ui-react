import { AlertDialog as BaseAlertDialog } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

export const alertDialogVariants = cva(
  'fixed top-1/2 left-1/2 z-999 max-w-[lg(100vw-3rem)] min-w-1/3 -translate-1/2 space-y-md overflow-hidden rounded-3xl bg-surface-3 p-md transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0',
  {
    variants: {
      tone: {
        brand: '[&_svg]:text-brand-default',
        accent: '[&_svg]:text-accent-default',
        neutral: '[&_svg]:text-neutral-default',
        error: '[&_svg]:text-error-default',
        info: '[&_svg]:text-info-default',
        success: '[&_svg]:text-success-default',
        warning: '[&_svg]:text-warning-default',
      },
    },
    defaultVariants: {
      tone: 'brand',
    },
  },
)

export type AlertDialogProps = React.ComponentProps<typeof BaseAlertDialog.Root>
export type AlertDialogTriggerProps = React.ComponentProps<typeof BaseAlertDialog.Trigger>
export type AlertDialogPopupProps = React.ComponentProps<typeof BaseAlertDialog.Popup> &
  VariantProps<typeof alertDialogVariants>
export type AlertDialogHeaderProps = React.ComponentProps<'div'>
export type AlertDialogTitleProps = React.ComponentProps<typeof BaseAlertDialog.Title>
export type AlertDialogDescriptionProps = React.ComponentProps<typeof BaseAlertDialog.Description>
export type AlertDialogCloseProps = React.ComponentProps<typeof BaseAlertDialog.Close>
export type AlertDialogFooterProps = React.ComponentProps<'div'>
export type AlertDialogConfirmProps = React.ComponentProps<typeof BaseAlertDialog.Close>
export type AlertDialogIconProps = React.ComponentProps<'div'>
export const alertDialogHandle = BaseAlertDialog.createHandle<React.ComponentType>()
