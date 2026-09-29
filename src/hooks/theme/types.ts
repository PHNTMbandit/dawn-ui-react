import type { Icon } from '@phosphor-icons/react'

export type ThemeValue = 'light' | 'dark' | 'system'

export type Theme = {
  value: ThemeValue
  label: string
  icon: Icon
}

export type ThemeProviderState = {
  theme: ThemeValue
  setTheme: (theme: ThemeValue) => void
}

export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: ThemeValue
  storageKey?: string
}
