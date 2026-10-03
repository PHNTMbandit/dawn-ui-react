type ProgressProps = React.ComponentProps<'div'> & {
  currentIndex: number
}

type ProgressIndicatorProps = React.ComponentProps<'div'> & {
  title?: string
  description?: string
}
type ProgressBarProps = React.ComponentProps<'div'>

export type { ProgressProps, ProgressIndicatorProps, ProgressBarProps }
