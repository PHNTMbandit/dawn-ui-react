import { cn } from '@/utils/cn'

import type { InputGroupAddonProps } from './input-group.types'

export const InputGroupAddon = ({ className, children, ref, ...props }: InputGroupAddonProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2xs style-text-default-0 text-on-surface-variant group-aria-invalid:text-error-on-container',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
