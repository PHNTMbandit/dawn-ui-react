import { cn } from '@/utils/cn'

import type { DropzoneFilesHeaderProps } from './dropzone.types'

export const DropzoneFilesHeader = ({
  className,
  children,
  ref,
  ...props
}: DropzoneFilesHeaderProps) => {
  return (
    <div className={cn('flex items-center justify-between gap-sm', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
