import { Toast as BaseToast, type ToastManagerAddOptions } from '@base-ui/react/toast'

import type { ToastVariant } from './toast.types'
import type { Icon } from '@phosphor-icons/react'

type ToastAddOptions = ToastManagerAddOptions<object> & {
  icon?: Icon
  variant?: ToastVariant
}

export const createToastManager = () => {
  const manager = BaseToast.createToastManager()

  const add = (options: ToastAddOptions) => {
    return manager.add({
      ...options,
      data: {
        ...options.data,
        icon: options.icon,
        variant: options.variant,
      },
    })
  }

  return {
    ...manager,
    add,
  }
}

export const useToastManager = () => {
  const toast = BaseToast.useToastManager()

  const add = (options: ToastAddOptions) => {
    return toast.add({
      ...options,
      data: {
        ...options.data,
        icon: options.icon,
        variant: options.variant,
      },
    })
  }

  return { add, toasts: toast.toasts }
}
