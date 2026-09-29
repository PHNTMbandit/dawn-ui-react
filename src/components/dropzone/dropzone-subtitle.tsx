import { cn } from '@/utils/cn'

import type { DropzoneSubtitleProps } from './dropzone.types'

export const DropzoneSubtitle = ({ className, children, ref, ...props }: DropzoneSubtitleProps) => {
  return (
    <span className={cn('text-on-surface-variant', className)} ref={ref} {...props}>
      {children}
    </span>
  )
}
