import type { Button } from '../button'

export type FormProps = React.ComponentProps<'form'>
export type FormSubmitProps = React.ComponentProps<typeof Button>
export type FormResetProps = React.ComponentProps<typeof Button>
export type FormErrorsProps = React.ComponentProps<'div'> & {
  headerLabel?: string
}
