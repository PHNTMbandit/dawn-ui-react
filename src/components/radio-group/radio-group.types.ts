import { cva, type VariantProps } from 'class-variance-authority'

import type { Radio as BaseRadio, RadioGroup as BaseRadioGroup } from '@base-ui/react'

export const radioVariants = cva(
  'group flex size-sm shrink-0 items-center justify-center rounded-full outline outline-transparent transition-all hover:outline-border-strong data-checked:bg-brand-default data-checked:outline-brand-border-strong data-disabled:opacity-50',
  {
    variants: {
      variant: {
        elevated: 'bg-surface shadow-2xs',
        inSurface: 'bg-surface-low inset-shadow-2xs',
      },
    },
    defaultVariants: {
      variant: 'elevated',
    },
  },
)

export type RadioProps = React.ComponentProps<typeof BaseRadio.Root> &
  VariantProps<typeof radioVariants>
export type RadioGroupProps = React.ComponentProps<typeof BaseRadioGroup>
