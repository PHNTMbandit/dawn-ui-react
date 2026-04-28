import { cn } from '@/utils/cn'

import type { BreadcrumbLinkProps } from './breadcrumb.types'

export const BreadcrumbLink = ({ className, children, ref, ...props }: BreadcrumbLinkProps) => {
  return (
    <div
      className={cn(
        'hover:bg-neutral-container-2 inline-flex h-md items-center justify-center gap-3xs rounded-md px-2xs style-text-default--1 text-on-surface-variant transition-all hover:cursor-pointer hover:bg-neutral-container active:scale-[0.98] active:bg-neutral-container disabled:opacity-50 [&>svg]:size-xs',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
