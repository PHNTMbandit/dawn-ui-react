import { cva, type VariantProps } from 'class-variance-authority'

export type LabelProps = React.ComponentProps<'label'> & VariantProps<typeof labelVariants>

export const labelVariants = cva('flex items-center gap-2xs select-none hover:cursor-pointer', {
  variants: {
    size: {
      small: 'style-text-default--1',
      medium: 'style-text-default-0',
      large: 'style-text-default-1',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})
