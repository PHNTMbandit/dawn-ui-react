import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { cn } from '@/utils/cn'

import type { DialogPopupProps } from './dialog.types'

export const DialogPopup = ({ className, children, ref, ...props }: DialogPopupProps) => {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 min-h-dvh bg-scrim backdrop-blur-xl transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
      <BaseDialog.Popup
        className={cn(
          'fixed top-[calc(50%+1.25rem*var(--nested-dialogs))] left-1/2 max-w-[calc(100vw-3rem)] min-w-1/6 -translate-1/2 scale-[calc(1-0.1*var(--nested-dialogs))] overflow-hidden rounded-3xl bg-surface-2 shadow-lg transition-all duration-150 data-ending-style:top-[calc(50%+0.25rem+1.25rem*var(--nested-dialogs))] data-ending-style:scale-90 data-ending-style:opacity-0 data-nested-dialog-open:after:opacity-100 data-starting-style:top-[calc(50%+0.25rem+1.25rem*var(--nested-dialogs))] data-starting-style:scale-90 data-starting-style:opacity-0',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  )
}
