import { useDropzone } from './dropzone'
import { cn } from '@/utils/cn'

import type { DropzoneFileSizeLimitProps } from './dropzone.types'

export const DropzoneFileSizeLimit = ({
  className,
  children,
  ref,
  ...props
}: DropzoneFileSizeLimitProps) => {
  const { maxFileSize } = useDropzone()

  return (
    <span className={cn('', className)} ref={ref} {...props}>
      {children}
      {maxFileSize}
    </span>
  )
}
