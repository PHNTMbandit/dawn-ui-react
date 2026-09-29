import { cn } from '@/utils/cn'

import type { DropzoneFilesProps } from './dropzone.types'

export const DropzoneFiles = ({ className, children, ref, ...props }: DropzoneFilesProps) => {
  return (
    <div className={cn('flex flex-col gap-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
