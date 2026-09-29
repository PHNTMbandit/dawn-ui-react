import { cva, type VariantProps } from 'class-variance-authority'

import type { Button } from '../button'

export type FormProps = React.ComponentProps<'form'>
export type FormSubmitProps = React.ComponentProps<typeof Button>
export type FormResetProps = React.ComponentProps<typeof Button>
export type FormErrorsProps = React.ComponentProps<'div'> & {
  headerLabel?: string
}
export type FormSetProps = React.ComponentProps<'div'>
export type FormSetHeadingProps = React.ComponentProps<'span'> &
  VariantProps<typeof formSetHeadingVariants>
export type FormSetContentProps = React.ComponentProps<'div'>
export type FormFooterProps = React.ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical'
}

export const formSetHeadingVariants = cva('', {
  variants: {
    size: {
      small: 'style-text-strong-0',
      medium: 'style-text-strong-1',
      large: 'style-text-strong-2',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})
