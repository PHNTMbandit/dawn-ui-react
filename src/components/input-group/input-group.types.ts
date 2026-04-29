import type { inputVariants } from '../input/input.types'
import type { Input as BaseInput } from '@base-ui/react/input'
import type { VariantProps } from 'class-variance-authority'

export type InputGroupAddonProps = React.ComponentProps<'div'>
export type InputGroupInputProps = React.ComponentProps<typeof BaseInput>
export type InputGroupProps = React.ComponentProps<'div'> & VariantProps<typeof inputVariants>
