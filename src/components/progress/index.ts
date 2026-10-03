import { Progress as ProgressRoot } from './progress'
import { ProgressBar } from './progress-bar'
import { ProgressIndicator } from './progress-indicator'

const Progress = Object.assign(ProgressRoot, {
  Bar: ProgressBar,
  Indicator: ProgressIndicator,
})

export type { ProgressBarProps, ProgressIndicatorProps, ProgressProps } from './progress.types'
export { ProgressBar } from './progress-bar'
export { ProgressIndicator } from './progress-indicator'
export { Progress }
