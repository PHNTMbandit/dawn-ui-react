import { cn } from '@/utils/cn'

import type { DropzoneInfoProps } from './dropzone.types'

export const DropzoneInfo = ({ className, children, ref, ...props }: DropzoneInfoProps) => {
  return (
    <div
      className={cn('flex flex-col items-center justify-center gap-2xs', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
