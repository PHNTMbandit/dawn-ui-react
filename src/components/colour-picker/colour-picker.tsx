import chroma from 'chroma-js'
import React from 'react'
import { colourPickerVariants, type ColourPickerProps } from './colour-picker.types'
import { VALUE_TYPES } from './colour-picker.types'
import { cn } from '@/index'

import type {
  ColourPickerAction,
  ColourPickerContextType,
  ColourPickerState,
} from './colour-picker.types'

const ColourPickerContext = React.createContext<ColourPickerContextType | null>(null)

const colourPickerReducer = (
  state: ColourPickerState,
  action: ColourPickerAction,
): ColourPickerState => {
  switch (action.type) {
    case 'set_colour': {
      const [h, s, v] = action.colour.hsv()
      return {
        ...state,
        hue: h == null || Number.isNaN(h) ? state.hue : h,
        saturation: s == null || Number.isNaN(s) ? state.saturation : s,
        value: v,
        alpha: action.colour.alpha(),
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
    case 'add_palette_colour':
      return { ...state, palette: [...state.palette, action.colour] }
    default:
      return state
  }
}

export const ColourPicker = ({
  variant,
  value: controlledValue,
  defaultColour,
  defaultPalette,
  paletteLimit,
  onValueChange,
  className,
  children,
  ref,
  ...props
}: ColourPickerProps) => {
  const [state, dispatch] = React.useReducer(
    colourPickerReducer,
    { defaultColour, defaultPalette },
    ({ defaultColour, defaultPalette }): ColourPickerState => {
      const initialColour = chroma(defaultColour ?? '#ffffff')
      const [h, s, v] = initialColour.hsv()

      return {
        hue: h == null || Number.isNaN(h) ? 0 : h,
        saturation: s == null || Number.isNaN(s) ? 0 : s,
        value: v,
        alpha: initialColour.alpha(),
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

  const internalColour = React.useMemo(
    () => chroma.hsv(internalHue, internalSaturation, internalValue).alpha(internalAlpha),
    [internalHue, internalSaturation, internalValue, internalAlpha],
  )

  const colour = React.useMemo(
    () => (controlledValue === undefined ? internalColour : chroma(controlledValue)),
    [controlledValue, internalColour],
  )

  const [colourHue, colourSaturation, colourValue] = colour.hsv()
  const hue = colourHue == null || Number.isNaN(colourHue) ? internalHue : colourHue
  const saturation =
    colourSaturation == null || Number.isNaN(colourSaturation)
      ? internalSaturation
      : colourSaturation
  const value = colourValue
  const alpha = colour.alpha()

  const setColour = React.useCallback(
    (colour: chroma.Color) => {
      if (controlledValue === undefined) {
        dispatch({ type: 'set_colour', colour })
      }
      onValueChange?.(colour)
    },
    [controlledValue, onValueChange],
  )
  const setHue = React.useCallback(
    (hue: number) => setColour(chroma.hsv(hue, saturation, value).alpha(alpha)),
    [alpha, saturation, setColour, value],
  )
  const setSaturation = React.useCallback(
    (saturation: number) => setColour(chroma.hsv(hue, saturation, value).alpha(alpha)),
    [alpha, hue, setColour, value],
  )
  const setValue = React.useCallback(
    (value: number) => setColour(chroma.hsv(hue, saturation, value).alpha(alpha)),
    [alpha, hue, saturation, setColour],
  )
  const setAlpha = React.useCallback(
    (alpha: number) => setColour(colour.alpha(alpha)),
    [colour, setColour],
  )
  const setLightness = React.useCallback(
    (lightness: number) => setColour(colour.set('hsl.l', lightness)),
    [colour, setColour],
  )
  const setValueType = React.useCallback(
    (valueType: ColourPickerState['valueType']) => dispatch({ type: 'set_value_type', valueType }),
    [],
  )
  const setPalette = React.useCallback(
    (palette: chroma.Color[]) => dispatch({ type: 'set_palette', palette }),
    [],
  )
  const addPaletteColour = React.useCallback(
    (colour: chroma.Color) => {
      if (paletteLimit && palette.length >= paletteLimit) {
        return
      }

      return dispatch({ type: 'add_palette_colour', colour })
    },
    [palette, paletteLimit],
  )

  return (
    <ColourPickerContext.Provider
      value={{
        colour,
        setColour,
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
        addPaletteColour,
        paletteLimit,
      }}
    >
      <div className={cn(colourPickerVariants({ variant }), className)} ref={ref} {...props}>
        {children}
      </div>
    </ColourPickerContext.Provider>
  )
}

export const useColourPicker = () => {
  const context = React.useContext(ColourPickerContext)

  if (!context) {
    throw new Error('useColourPicker must be used within a ColourPicker')
  }

  return context
}
