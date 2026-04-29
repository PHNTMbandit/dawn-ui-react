import { AlertDialog as BaseAlertDialog } from '@base-ui/react'
import { AlertDialogContext } from './alert-dialog-context'
import { alertDialogVariants, type AlertDialogPopupProps } from './alert-dialog.types'
import { cn } from '@/utils/cn'

export const AlertDialogPopup = ({
  tone,
  className,
  children,
  ref,
  ...props
}: AlertDialogPopupProps) => {
  return (
    <AlertDialogContext.Provider value={{ tone }}>
      <BaseAlertDialog.Portal>
        <BaseAlertDialog.Backdrop
          className={
            'fixed inset-[0px] min-h-dvh bg-scrim transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute'
          }
        />
        <BaseAlertDialog.Popup
          className={cn(alertDialogVariants({ tone, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </BaseAlertDialog.Popup>
      </BaseAlertDialog.Portal>
    </AlertDialogContext.Provider>
  )
}
