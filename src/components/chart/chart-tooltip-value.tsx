import { useChartTooltipPayload } from './chart-tooltip-payload'
import { cn } from '@/utils/cn'

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
