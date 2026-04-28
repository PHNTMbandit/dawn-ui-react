import { cva } from 'class-variance-authority'

import type { Separator as BaseSeparator } from '@base-ui/react/separator'
import type { VariantProps } from 'class-variance-authority'

export const separatorVariants = cva('shrink-0 rounded-full', {
  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
    },
    style: {
      rounded: 'rounded-full',
      square: 'rounded-none',
    },
    variant: {
      default: 'bg-neutral-border',
      strong: 'bg-neutral-border-strong',
    },
    weight: {
      thick: '',
      medium: '',
      thin: '',
      thinnest: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    style: 'rounded',
    variant: 'default',
    weight: 'thinnest',
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      weight: 'thick',
      className: 'h-[8px]',
    },
    {
      orientation: 'horizontal',
      weight: 'medium',
      className: 'h-[4px]',
    },
    {
      orientation: 'horizontal',
      weight: 'thin',
      className: 'h-[2px]',
    },
    {
      orientation: 'horizontal',
      weight: 'thinnest',
      className: 'h-px',
    },
    {
      orientation: 'vertical',
      weight: 'thick',
      className: 'w-[8px]',
    },
    {
      orientation: 'vertical',
      weight: 'medium',
      className: 'w-[4px]',
    },
    {
      orientation: 'vertical',
      weight: 'thin',
      className: 'w-[2px]',
    },
    {
      orientation: 'vertical',
      weight: 'thinnest',
      className: 'w-px',
    },
  ],
})

export type SeparatorProps = Omit<React.ComponentProps<typeof BaseSeparator>, 'style'> &
  VariantProps<typeof separatorVariants>
