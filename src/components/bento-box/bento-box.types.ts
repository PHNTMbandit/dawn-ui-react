import { cva, type VariantProps } from 'class-variance-authority'

export const bentoBoxVariants = cva(
  'group/box flex size-full min-h-0 flex-col overflow-hidden bg-surface',
  {
    variants: {
      size: {
        small: 'gap-xs rounded-xl p-xs shadow-2xs',
        medium: 'gap-sm rounded-2xl p-sm shadow-xs',
        large: 'gap-md rounded-3xl p-md shadow-sm',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export type BentoBoxProps = React.ComponentProps<'div'> & VariantProps<typeof bentoBoxVariants>
export type BentoBoxHeaderProps = React.ComponentProps<'div'>
export type BentoBoxTitleProps = React.ComponentProps<'span'>
export type BentoBoxContentProps = React.ComponentProps<'div'>
export type BentoBoxDescriptionProps = React.ComponentProps<'span'>
export type BentoBoxActionProps = React.ComponentProps<'div'>
export type BentoBoxFooterProps = React.ComponentProps<'div'>
