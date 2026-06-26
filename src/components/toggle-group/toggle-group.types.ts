import { cva, type VariantProps } from 'class-variance-authority'

import type { ToggleGroup } from '@base-ui/react/toggle-group'

export const toggleGroupVariants = cva('group flex w-fit items-center justify-center gap-3xs', {
  variants: {
    size: {
      small: 'rounded-lg',
      medium: 'rounded-xl',
      large: 'rounded-2xl',
    },
    variant: {
      default: 'bg-surface-low',
      ghost: 'bg-transparent',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      size: 'small',
      className: 'h-lg px-3xs',
    },
    {
      variant: 'default',
      size: 'medium',
      className: 'h-xl px-2xs',
    },
    {
      variant: 'default',
      size: 'large',
      className: 'h-2xl px-xs',
    },
  ],
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
})

export type ToggleGroupProps = React.ComponentProps<typeof ToggleGroup> &
  VariantProps<typeof toggleGroupVariants>
