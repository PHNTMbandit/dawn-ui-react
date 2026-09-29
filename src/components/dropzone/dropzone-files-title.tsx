import { cn } from '@/utils/cn'

import type { DropzoneFilesTitleProps } from './dropzone.types'

export const DropzoneFilesTitle = ({
  className,
  children,
  ref,
  ...props
}: DropzoneFilesTitleProps) => {
  return (
    <span className={cn('style-text-default-0', className)} ref={ref} {...props}>
      {children}
    </span>
  )
}
