import chroma from 'chroma-js'
import React from 'react'
import { colorPickerVariants, type ColorPickerProps } from './color-picker.types'
import { VALUE_TYPES } from './color-picker.types'
import { cn } from '@/index'

import type {
  ColorPickerAction,
  ColorPickerContextType,
  ColorPickerState,
} from './color-picker.types'

const ColorPickerContext = React.createContext<ColorPickerContextType | null>(null)

const colorPickerReducer = (
  state: ColorPickerState,
  action: ColorPickerAction,
): ColorPickerState => {
  switch (action.type) {
    case 'set_color': {
      const [h, s, v] = action.color.hsv()
      return {
        ...state,
        hue: h == null || Number.isNaN(h) ? state.hue : h,
        saturation: s == null || Number.isNaN(s) ? state.saturation : s,
        value: v,
        alpha: action.color.alpha(),
      }
    }
    case 'set_hue':
      return { ...state, hue: action.hue }
    case 'set_saturation':
      return { ...state, saturation: action.saturation }
    case 'set_value':
      return { ...state, value: action.value }
    case 'set_alpha':
      return { ...state, alpha: action.alpha }
    case 'set_lightness': {
      return { ...state, value: action.lightness }
    }
    case 'set_value_type':
      return { ...state, valueType: action.valueType }
    case 'set_palette':
      return { ...state, palette: action.palette }
    case 'add_palette_color':
      return { ...state, palette: [...state.palette, action.color] }
    default:
      return state
  }
}

export const ColorPicker = ({
  variant,
  value: controlledValue,
  defaultColor,
  defaultPalette,
  paletteLimit,
  onValueChange,
  className,
  children,
  ref,
  ...props
}: ColorPickerProps) => {
  const [state, dispatch] = React.useReducer(
    colorPickerReducer,
    { defaultColor, defaultPalette },
    ({ defaultColor, defaultPalette }): ColorPickerState => {
      const initialColor = chroma(defaultColor ?? '#ffffff')
      const [h, s, v] = initialColor.hsv()

      return {
        hue: h == null || Number.isNaN(h) ? 0 : h,
        saturation: s == null || Number.isNaN(s) ? 0 : s,
        value: v,
        alpha: initialColor.alpha(),
        valueType: VALUE_TYPES[0],
        palette: (defaultPalette ?? []).map((c) => chroma(c)),
      }
    },
  )

  const {
    hue: internalHue,
    saturation: internalSaturation,
    value: internalValue,
    alpha: internalAlpha,
    valueType,
    palette,
  } = state

  const internalColor = React.useMemo(
    () => chroma.hsv(internalHue, internalSaturation, internalValue).alpha(internalAlpha),
    [internalHue, internalSaturation, internalValue, internalAlpha],
  )

  const color = React.useMemo(
    () => (controlledValue === undefined ? internalColor : chroma(controlledValue)),
    [controlledValue, internalColor],
  )

  const [colorHue, colorSaturation, colorValue] = color.hsv()
  const hue = colorHue == null || Number.isNaN(colorHue) ? internalHue : colorHue
  const saturation =
    colorSaturation == null || Number.isNaN(colorSaturation) ? internalSaturation : colorSaturation
  const value = colorValue
  const alpha = color.alpha()

  const setColor = React.useCallback(
    (color: chroma.Color) => {
      if (controlledValue === undefined) {
        dispatch({ type: 'set_color', color })
      }
      onValueChange?.(color)
    },
    [controlledValue, onValueChange],
  )
  const setHue = React.useCallback(
    (hue: number) => setColor(chroma.hsv(hue, saturation, value).alpha(alpha)),
    [alpha, saturation, setColor, value],
  )
  const setSaturation = React.useCallback(
    (saturation: number) => setColor(chroma.hsv(hue, saturation, value).alpha(alpha)),
    [alpha, hue, setColor, value],
  )
  const setValue = React.useCallback(
    (value: number) => setColor(chroma.hsv(hue, saturation, value).alpha(alpha)),
    [alpha, hue, saturation, setColor],
  )
  const setAlpha = React.useCallback(
    (alpha: number) => setColor(color.alpha(alpha)),
    [color, setColor],
  )
  const setLightness = React.useCallback(
    (lightness: number) => setColor(color.set('hsl.l', lightness)),
    [color, setColor],
  )
  const setValueType = React.useCallback(
    (valueType: ColorPickerState['valueType']) => dispatch({ type: 'set_value_type', valueType }),
    [],
  )
  const setPalette = React.useCallback(
    (palette: chroma.Color[]) => dispatch({ type: 'set_palette', palette }),
    [],
  )
  const addPaletteColor = React.useCallback(
    (color: chroma.Color) => {
      if (paletteLimit && palette.length >= paletteLimit) {
        return
      }

      return dispatch({ type: 'add_palette_color', color })
    },
    [palette, paletteLimit],
  )

  return (
    <ColorPickerContext.Provider
      value={{
        color,
        setColor,
        hue,
        saturation,
        value,
        alpha,
        setHue,
        setSaturation,
        setValue,
        setAlpha,
        setLightness,
        valueType,
        setValueType,
        palette,
        setPalette,
        addPaletteColor,
        paletteLimit,
      }}
    >
      <div className={cn(colorPickerVariants({ variant }), className)} ref={ref} {...props}>
        {children}
      </div>
    </ColorPickerContext.Provider>
  )
}

export const useColorPicker = () => {
  const context = React.useContext(ColorPickerContext)

  if (!context) {
    throw new Error('useColorPicker must be used within a ColorPicker')
  }

  return context
}
