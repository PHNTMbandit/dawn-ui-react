import { createContext, useContext } from 'react'

export type ToggleGroupContextType = {
  size?: 'small' | 'medium' | 'large'
}

export const ToggleGroupContext = createContext<ToggleGroupContextType | undefined>(undefined)

export const useToggleGroupContext = () => {
  const context = useContext(ToggleGroupContext)
  return context
}
