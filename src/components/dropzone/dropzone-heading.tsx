import { cn } from '@/utils/cn'

import type { DropzoneHeadingProps } from './dropzone.types'

export const DropzoneHeading = ({ className, children, ref, ...props }: DropzoneHeadingProps) => {
  return (
    <span className={cn('style-text-default-0', className)} ref={ref} {...props}>
      {children}
    </span>
  )
}
