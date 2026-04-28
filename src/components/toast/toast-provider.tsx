import { Toast as BaseToast } from '@base-ui/react/toast'
import { anchoredToastManager, stackToastManager } from '.'
import { AnchoredToasts } from './anchored-toasts'
import { StackToasts } from './stack-toasts'
import { cn } from '@/utils/cn'

import type { ToastProviderProps } from './toast.types'

export const ToastProvider = ({ className, children, ref, ...props }: ToastProviderProps) => {
  return (
    <div className={cn('', className)} ref={ref} {...props}>
      <BaseToast.Provider timeout={10000} toastManager={anchoredToastManager}>
        <AnchoredToasts />
      </BaseToast.Provider>
      <BaseToast.Provider timeout={10000} toastManager={stackToastManager}>
        <StackToasts />
      </BaseToast.Provider>
      {children}
    </div>
  )
}
