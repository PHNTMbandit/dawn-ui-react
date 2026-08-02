import type { Button } from '../button'

export type FormProps = React.ComponentProps<'form'>
export type FormSubmitProps = React.ComponentProps<typeof Button>
export type FormResetProps = React.ComponentProps<typeof Button>
export type FormErrorsProps = React.ComponentProps<'div'> & {
  headerLabel?: string
}
export type FormSetProps = React.ComponentProps<'div'>
export type FormSetHeadingProps = React.ComponentProps<'span'>
export type FormSetContentProps = React.ComponentProps<'div'>
export type FormFooterProps = React.ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical'
}
