import chroma from 'chroma-js'
import { cva, type VariantProps } from 'class-variance-authority'

import type { ColorChannelSlider } from '../color-channel-slider'
import type { InputGroup } from '../input-group'
import type { SelectTrigger } from '../select'

export type ColorPickerContextType = {
  color: chroma.Color
  setColor: (color: chroma.Color) => void
  hue: number
  saturation: number
  value: number
  alpha: number
  setHue: (hue: number) => void
  setSaturation: (saturation: number) => void
  setValue: (value: number) => void
  setSaturationValue: (saturation: number, value: number) => void
  setAlpha: (alpha: number) => void
  setLightness: (lightness: number) => void
  valueType: ValueType
  setValueType: (valueType: ValueType) => void
  palette: chroma.Color[]
  setPalette: (palette: chroma.Color[]) => void
  addPaletteColor: (color: chroma.Color) => void
  paletteLimit?: number
}

export type ColorPickerState = {
  hue: number
  saturation: number
  value: number
  alpha: number
  valueType: ValueType
  palette: chroma.Color[]
}

export type ColorPickerAction =
  | { type: 'set_color'; color: chroma.Color }
  | { type: 'set_hue'; hue: number }
  | { type: 'set_saturation'; saturation: number }
  | { type: 'set_value'; value: number }
  | { type: 'set_saturation_value'; saturation: number; value: number }
  | { type: 'set_alpha'; alpha: number }
  | { type: 'set_lightness'; lightness: number }
  | { type: 'set_value_type'; valueType: ValueType }
  | { type: 'set_palette'; palette: chroma.Color[] }
  | { type: 'add_palette_color'; color: chroma.Color }

export type ColorPickerProps = React.ComponentProps<'div'> &
  VariantProps<typeof colorPickerVariants> & {
    value?: string
    onValueChange?: (color: string) => void
    defaultColor?: string
    palette?: string[]
    defaultPalette?: string[]
    onPaletteChange?: (palette: string[]) => void
    paletteLimit?: number
    defaultValueType?: ValueTypeValue
  }

export const colorPickerVariants = cva('flex flex-col space-y-sm', {
  variants: {
    variant: {
      elevated: 'rounded-xl bg-surface p-md shadow-2xs',
      outline: 'rounded-xl border border-border p-md',
      ghost: '',
    },
  },
  defaultVariants: {
    variant: 'elevated',
  },
})

export const colorPickerSwatchVariants = cva(
  'overflow-hidden border border-border hover:cursor-pointer focus:outline-2 focus:outline-offset-2',
  {
    variants: {
      size: {
        small: 'size-sm rounded-md',
        medium: 'size-md rounded-lg',
        large: 'size-lg rounded-xl',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export const VALUE_TYPES: ValueType[] = [
  {
    label: 'RGB',
    value: 'rgb',
    getValue: (color: chroma.Color) => color.rgb(),
    parseValue: (value: string) => {
      const rgbValues = value.split(',').map((v) => parseInt(v.trim(), 10))
      if (rgbValues.length === 3 && rgbValues.every((v) => !isNaN(v))) {
        return chroma.rgb(rgbValues[0], rgbValues[1], rgbValues[2])
      }
    },
  },
  {
    label: 'CSS',
    value: 'css',
    getValue: (color: chroma.Color) => color.css(),
    parseValue: (value: string) => {
      try {
        return chroma(value)
      } catch {
        return undefined
      }
    },
  },
  {
    label: 'HEX',
    value: 'hex',
    getValue: (color: chroma.Color) => color.hex('rgb'),
    parseValue: (value: string) => {
      try {
        return chroma(value)
      } catch {
        return undefined
      }
    },
  },
  {
    label: 'HSL',
    value: 'hsl',
    getValue: (color: chroma.Color) => color.hsl(),
    parseValue: (value: string) => {
      try {
        return chroma(value)
      } catch {
        return undefined
      }
    },
  },
  {
    label: 'HSV',
    value: 'hsv',
    getValue: (color: chroma.Color) => color.hsv(),
    parseValue: (value: string) => {
      try {
        return chroma(value)
      } catch {
        return undefined
      }
    },
  },
]
export type ValueType = {
  label: string
  value: string
  getValue: (color: chroma.Color) => any
  parseValue: (value: string) => chroma.Color | undefined
}

export type ValueTypeValue = 'rgb' | 'css' | 'hex' | 'hsl' | 'hsv'

export type ColorPickerInputProps = React.ComponentProps<typeof InputGroup> & {
  showPopover?: boolean
  showTransparencyField?: boolean
}
export type ColorPickerAreaProps = React.ComponentProps<'div'>
export type ColorPickerHueSliderProps = Partial<React.ComponentProps<typeof ColorChannelSlider>>
export type ColorPickerLightnessSliderProps = Partial<
  React.ComponentProps<typeof ColorChannelSlider>
>
export type ColorPickerTransparencySliderProps = Partial<
  React.ComponentProps<typeof ColorChannelSlider>
>
export type ColorPickerValueTypeProps = React.ComponentProps<typeof SelectTrigger>
export type ColorPickerRowProps = React.ComponentProps<'div'>
export type ColorPickerGroupProps = React.ComponentProps<'div'>
export type ColorPickerLabelProps = React.ComponentProps<'span'>
export type ColorPickerPaletteListChild = (props: {
  color: string
  index: number
}) => React.ReactNode

export type ColorPickerPaletteListProps = React.ComponentProps<'ul'>
export type ColorPickerPaletteSwatchProps = Omit<React.ComponentProps<'button'>, 'color'> &
  VariantProps<typeof colorPickerSwatchVariants> & {
    color: string
  }
export type ColorPickerPaletteAddProps = React.ComponentProps<'button'>
export type ColorPickerPaletteLimitProps = React.ComponentProps<'span'>
