import { cva, type VariantProps } from 'class-variance-authority'

export const alertVariants = cva(
  'group flex items-center justify-start gap-sm rounded-xl border px-md py-sm transition-all [&>svg]:size-lg',
  {
    variants: {
      tone: {
        brand:
          'border-brand-border bg-brand-container [&_[data-description]]:text-brand-on-container-muted [&_[data-title]]:text-brand-on-container [&_svg]:text-brand-on-container',
        accent:
          'border-accent-border bg-accent-container [&_[data-description]]:text-accent-on-container-muted [&_[data-title]]:text-accent-on-container [&_svg]:text-accent-on-container',
        neutral:
          'border-neutral-border bg-neutral-container [&_[data-description]]:text-neutral-on-container-muted [&_[data-title]]:text-neutral-on-container [&_svg]:text-neutral-on-container',
        error:
          'border-error-border bg-error-container [&_[data-description]]:text-error-on-container-muted [&_[data-title]]:text-error-on-container [&_svg]:text-error-on-container',
        info: 'border-info-border bg-info-container [&_[data-description]]:text-info-on-container-muted [&_[data-title]]:text-info-on-container [&_svg]:text-info-on-container',
        success:
          'border-success-border bg-success-container [&_[data-description]]:text-success-on-container-muted [&_[data-title]]:text-success-on-container [&_svg]:text-success-on-container',
        warning:
          'border-warning-border bg-warning-container [&_[data-description]]:text-warning-on-container-muted [&_[data-title]]:text-warning-on-container [&_svg]:text-warning-on-container',
      },
    },
    defaultVariants: {
      tone: 'brand',
    },
  },
)

export type AlertProps = React.ComponentProps<'div'> & VariantProps<typeof alertVariants>
export type AlertTitleProps = React.ComponentProps<'div'>
export type AlertDescriptionProps = React.ComponentProps<'div'>
export type AlertContentProps = React.ComponentProps<'div'>
export type AlertActionsProps = React.ComponentProps<'div'>
