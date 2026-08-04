import type { Theme, ThemeValue } from './types'

export const THEME_STORAGE_KEY = 'cartyx-ui-theme'
export const DEFAULT_THEME: ThemeValue = 'light'

export const getThemeByValue = (value: ThemeValue, themes: Theme[]): Theme | undefined =>
  themes.find((t) => t.value === value)
