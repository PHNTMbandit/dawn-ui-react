import { cn } from '@/utils/cn'

import type { DropzoneIconProps } from './dropzone.types'

export const DropzoneIcon = ({ className, children, ref, ...props }: DropzoneIconProps) => {
  return (
    <div
      className={cn(
        'rounded-full bg-brand-container p-sm [&>svg]:size-lg [&>svg]:text-brand-on-container',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
