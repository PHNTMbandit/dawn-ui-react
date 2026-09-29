// oxlint-disable tailwindcss/no-contradicting-variants
import { DotsThreeIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { BreadcrumbEllipsisProps } from './breadcrumb.types'

export const BreadcrumbEllipsis = ({
  className,
  children,
  ref,
  ...props
}: BreadcrumbEllipsisProps) => {
  return (
    <div
      className={cn(
        'flex size-md items-center justify-center rounded-sm text-on-surface-variant transition-all hover:cursor-pointer hover:bg-neutral-container hover:text-neutral-on-container active:scale-[0.98] active:bg-neutral-container disabled:opacity-50 [&>svg]:size-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <DotsThreeIcon weight="bold" />
    </div>
  )
}
