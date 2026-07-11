import { Toast as BaseToast } from '@base-ui/react/toast'
import { anchoredToastManager, stackToastManager } from '.'
import { AnchoredToasts } from './anchored-toasts'
import { StackToasts } from './stack-toasts'

import type { ToastProviderProps } from './toast.types'

export const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <>
      <BaseToast.Provider timeout={10000} toastManager={anchoredToastManager}>
        <AnchoredToasts />
      </BaseToast.Provider>
      <BaseToast.Provider timeout={10000} toastManager={stackToastManager}>
        <StackToasts />
      </BaseToast.Provider>
      {children}
    </>
  )
}
