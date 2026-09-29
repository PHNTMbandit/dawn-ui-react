import { useDropzone } from './dropzone'
import { cn } from '@/utils/cn'

import type { DropzoneFormatsProps } from './dropzone.types'

export const DropzoneFormats = ({ className, children, ref, ...props }: DropzoneFormatsProps) => {
  const { acceptedFileTypes } = useDropzone()

  return (
    <span className={cn('', className)} ref={ref} {...props}>
      {acceptedFileTypes.join(', ')}
      {children}
    </span>
  )
}
