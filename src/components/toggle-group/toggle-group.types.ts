import { cva, type VariantProps } from 'class-variance-authority'

import type { ToggleGroup } from '@base-ui/react/toggle-group'

export const toggleGroupVariants = cva(
  'group flex w-fit items-center justify-center gap-3xs bg-neutral-container',
  {
    variants: {
      size: {
        small: 'h-lg rounded-lg px-3xs',
        medium: 'h-xl rounded-xl px-2xs',
        large: 'h-2xl rounded-2xl px-xs',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export type ToggleGroupProps = React.ComponentProps<typeof ToggleGroup> &
  VariantProps<typeof toggleGroupVariants>
