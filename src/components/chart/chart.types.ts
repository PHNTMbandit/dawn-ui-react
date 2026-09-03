import * as RechartsPrimitive from 'recharts'

const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = Record<
  string,
  {
    label?: string
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>

export type ChartContainerContextProps = {
  config: ChartConfig
}

export type ChartContainerProps = React.ComponentProps<'div'> & {
  config: ChartConfig
  initialDimension?: { width: number; height: number }
}

export type ChartTooltipProps = RechartsPrimitive.TooltipProps
export type ChartTooltipContentProps = React.ComponentProps<'div'> &
  Partial<RechartsPrimitive.TooltipContentProps>
export type ChartLegendProps = RechartsPrimitive.LegendProps
export type ChartLegendContentProps = React.ComponentProps<'div'> &
  RechartsPrimitive.DefaultLegendContentProps
export type ChartTooltipLabelProps = React.ComponentProps<'p'>
export type ChartTooltipNameProps = React.ComponentProps<'p'>
export type ChartTooltipPayloadProps = React.ComponentProps<'div'>
export type ChartLegendPayloadProps = React.ComponentProps<'div'>
export type ChartTooltipIndicatorProps = React.ComponentProps<'div'> & {
  shape?: 'circle' | 'square' | 'diamond' | 'triangle' | 'wye' | 'line'
}
export type ChartLinearGradientProps = React.ComponentProps<'defs'> & {
  gradients: {
    id: string
    stopColor: string
  }[]
}
export type ChartTooltipIconProps = React.ComponentProps<'div'>
export type ChartLegendIconProps = React.ComponentProps<'div'>
export type ChartLegendLabelProps = React.ComponentProps<'p'>
export type ChartLegendIndicatorProps = React.ComponentProps<'div'> & {
  shape?: 'circle' | 'square' | 'diamond' | 'triangle' | 'wye' | 'line'
}
export type ChartTooltipValueProps = React.ComponentProps<'p'>
