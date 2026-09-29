import { createContext, useContext } from 'react'

import type { alertDialogVariants } from './alert-dialog.types'
import type { VariantProps } from 'class-variance-authority'

type AlertDialogTone = VariantProps<typeof alertDialogVariants>['tone']

export const AlertDialogContext = createContext<{ tone: AlertDialogTone }>({ tone: 'brand' })

export const useAlertDialogContext = () => useContext(AlertDialogContext)
