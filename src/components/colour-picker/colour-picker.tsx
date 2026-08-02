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
  defaultColour,
  defaultPalette,
  paletteLimit,
  onColourChange,
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

  const { hue, saturation, value, alpha, valueType, palette } = state

  const colour = React.useMemo(
    () => chroma.hsv(hue, saturation, value).alpha(alpha),
    [hue, saturation, value, alpha],
  )

  const setColour = React.useCallback((colour: chroma.Color) => {
    dispatch({ type: 'set_colour', colour })
  }, [])
  const setHue = React.useCallback((hue: number) => dispatch({ type: 'set_hue', hue }), [])
  const setSaturation = React.useCallback(
    (saturation: number) => dispatch({ type: 'set_saturation', saturation }),
    [],
  )
  const setValue = React.useCallback((value: number) => dispatch({ type: 'set_value', value }), [])
  const setAlpha = React.useCallback((alpha: number) => dispatch({ type: 'set_alpha', alpha }), [])
  const setLightness = React.useCallback((lightness: number) => {
    dispatch({ type: 'set_lightness', lightness })
  }, [])
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

  React.useEffect(() => {
    if (onColourChange) {
      onColourChange(colour)
    }
  }, [colour, onColourChange])

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
