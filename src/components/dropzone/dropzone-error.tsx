import { WarningCircleIcon } from '@phosphor-icons/react'
import { useDropzone } from './dropzone'
import { cn } from '@/utils/cn'

import type { DropzoneErrorProps } from './dropzone.types'

export const DropzoneError = ({ className, children, ref, ...props }: DropzoneErrorProps) => {
  const { fileError } = useDropzone()

  if (!fileError && !children) {
    return null
  }

  return (
    <p
      className={cn('flex items-center gap-2xs style-text-strong--1 text-error-default', className)}
      ref={ref}
      role="alert"
      {...props}
    >
      <WarningCircleIcon weight="bold" />
      {children ?? fileError}
    </p>
  )
}
