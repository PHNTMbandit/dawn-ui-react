import { cva } from 'class-variance-authority'

import type { Input as BaseInput } from '@base-ui/react/input'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

export const formatFileSize = (bytes: number): string => {
  if (bytes < 1000) {
    return `${bytes} B`
  }

  const units = ['KB', 'MB', 'GB', 'TB']
  let size = bytes / 1000
  let unitIndex = 0

  while (size >= 1000 && unitIndex < units.length - 1) {
    size /= 1000
    unitIndex += 1
  }

  return `${size.toFixed(size % 1 === 0 ? 0 : 1)} ${units[unitIndex]}`
}

export const inputVariants = cva(
  'group flex w-full items-center text-ellipsis caret-brand-border-strong outline outline-transparent transition-all placeholder:opacity-60 focus-within:outline-brand-border-strong not-focus-within:hover:outline-border-strong disabled:cursor-not-allowed aria-invalid:bg-error-container aria-invalid:text-error-on-container aria-invalid:caret-error-border-strong aria-invalid:outline-error-border aria-invalid:focus-within:outline-error-border-strong aria-invalid:not-focus-within:hover:outline-error-border data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-surface shadow-2xs',
        secondary: 'bg-neutral-container',
      },
      size: {
        small: 'h-lg gap-3xs rounded-lg pr-3xs pl-xs style-text-prose--1',
        medium: 'h-xl gap-2xs rounded-xl px-sm style-text-prose-0',
        large: 'h-2xl gap-xs rounded-2xl px-md style-text-prose-1',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
)

export type InputProps = VariantProps<typeof inputVariants> &
  Omit<ComponentProps<typeof BaseInput>, 'size'> & {
    fileUploadButtonLabel?: string
    fileUploadButtonIcon?: React.ReactNode
    maxFiles?: number
    maxFileSize?: number
    clearFilesLabel?: string
    filesSelectedLabel?: (count: number) => string
    maxFilesErrorLabel?: (maxFiles: number) => string
    maxFileSizeErrorLabel?: (fileName: string, maxFileSize: string) => string
    compact?: boolean
  }
