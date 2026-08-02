import chroma from 'chroma-js'
import { cva, type VariantProps } from 'class-variance-authority'

import type { Button } from '../button'
import type { ColourChannelSlider } from '../colour-channel-slider'
import type { InputGroup } from '../input-group'
import type { SelectTrigger } from '../select'

export type ColourPickerContextType = {
  colour: chroma.Color
  setColour: (colour: chroma.Color) => void
  hue: number
  saturation: number
  value: number
  alpha: number
  setHue: (hue: number) => void
  setSaturation: (saturation: number) => void
  setValue: (value: number) => void
  setAlpha: (alpha: number) => void
  setLightness: (lightness: number) => void
  valueType: ValueType
  setValueType: (valueType: ValueType) => void
  palette: chroma.Color[]
  setPalette: (palette: chroma.Color[]) => void
  addPaletteColour: (colour: chroma.Color) => void
  paletteLimit?: number
}

export type ColourPickerState = {
  hue: number
  saturation: number
  value: number
  alpha: number
  valueType: ValueType
  palette: chroma.Color[]
}

export type ColourPickerAction =
  | { type: 'set_colour'; colour: chroma.Color }
  | { type: 'set_hue'; hue: number }
  | { type: 'set_saturation'; saturation: number }
  | { type: 'set_value'; value: number }
  | { type: 'set_alpha'; alpha: number }
  | { type: 'set_lightness'; lightness: number }
  | { type: 'set_value_type'; valueType: ValueType }
  | { type: 'set_palette'; palette: chroma.Color[] }
  | { type: 'add_palette_colour'; colour: chroma.Color }

export type ColourPickerProps = React.ComponentProps<'div'> &
  VariantProps<typeof colourPickerVariants> & {
    defaultColour?: string
    defaultPalette?: string[]
    paletteLimit?: number
    onColourChange?: (colour: chroma.Color) => void
  }

export const colourPickerVariants = cva('flex flex-col space-y-sm', {
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

export const colourPickerSwatchVariants = cva(
  'overflow-hidden rounded-full border border-border hover:cursor-pointer focus:outline-2 focus:outline-offset-2',
  {
    variants: {
      size: {
        small: 'size-sm',
        medium: 'size-md',
        large: 'size-lg',
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
    getValue: (colour: chroma.Color) => colour.rgb(),
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
    getValue: (colour: chroma.Color) => colour.css(),
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
    getValue: (colour: chroma.Color) => colour.hex('rgb'),
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
    getValue: (colour: chroma.Color) => colour.hsl(),
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
    getValue: (colour: chroma.Color) => colour.hsv(),
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
  getValue: (colour: chroma.Color) => any
  parseValue: (value: string) => chroma.Color | undefined
}

export type ColourPickerInputProps = React.ComponentProps<typeof InputGroup>
export type ColourPickerAreaProps = React.ComponentProps<'div'>
export type ColourPickerHueSliderProps = Partial<React.ComponentProps<typeof ColourChannelSlider>>
export type ColourPickerLightnessSliderProps = Partial<
  React.ComponentProps<typeof ColourChannelSlider>
>
export type ColourPickerTransparencySliderProps = Partial<
  React.ComponentProps<typeof ColourChannelSlider>
>
export type ColourPickerValueTypeProps = React.ComponentProps<typeof SelectTrigger>
export type ColourPickerRowProps = React.ComponentProps<'div'>
export type ColourPickerGroupProps = React.ComponentProps<'div'>
export type ColourPickerLabelProps = React.ComponentProps<'span'>
export type ColourPickerPaletteListProps = Omit<React.ComponentProps<'ul'>, 'children'> & {
  children?: (props: { colour: chroma.Color; index: number }) => React.ReactNode
}
export type ColourPickerPaletteSwatchProps = React.ComponentProps<'button'> &
  VariantProps<typeof colourPickerSwatchVariants> & {
    colour: chroma.Color
  }
export type ColourPickerPaletteAddProps = React.ComponentProps<typeof Button>
export type ColourPickerPaletteLimitProps = React.ComponentProps<'span'>
