import { cn } from 'dawn-ui-react'
import { useChartTooltipPayload } from './chart-tooltip-payload'

type ChartTooltipValueProps = React.ComponentProps<'p'>

export const ChartTooltipValue = ({
  className,
  children,
  ref,
  ...props
}: ChartTooltipValueProps) => {
  const { value } = useChartTooltipPayload()

  return (
    <p className={cn('mx-auto style-text-default--1', className)} ref={ref} {...props}>
      {children}
      {value}
    </p>
  )
}
