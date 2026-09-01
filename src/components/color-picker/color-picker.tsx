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

const normalizeToColor = (value: string | chroma.Color, fallback: chroma.Color): chroma.Color => {
  try {
    if (typeof value === 'string') {
      return chroma(value.trim())
    }

    return chroma(value)
  } catch {
    return fallback
  }
}

const colorPickerReducer = (
  state: ColorPickerState,
  action: ColorPickerAction,
): ColorPickerState => {
  switch (action.type) {
    case 'set_color': {
      const [h, s, v] = action.color.hsv()
      // Black (value 0) reports saturation 0 and hue NaN; keep the previous ones
      // so the area handle doesn't snap to the bottom-left corner.
      return {
        ...state,
        hue: h == null || Number.isNaN(h) ? state.hue : h,
        saturation:
          v === 0 ? state.saturation : s == null || Number.isNaN(s) ? state.saturation : s,
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
    case 'set_saturation_value':
      return { ...state, saturation: action.saturation, value: action.value }
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
  palette: controlledPalette,
  defaultPalette,
  onPaletteChange,
  paletteLimit,
  defaultValueType,
  onValueChange,
  className,
  children,
  ref,
  ...props
}: ColorPickerProps) => {
  const [state, dispatch] = React.useReducer(
    colorPickerReducer,
    { controlledValue, defaultColor, defaultPalette },
    ({ controlledValue, defaultColor, defaultPalette }): ColorPickerState => {
      const initialColor = normalizeToColor(
        controlledValue ?? defaultColor ?? '#ffffff',
        chroma('#ffffff'),
      )
      const [h, s, v] = initialColor.hsv()

      return {
        hue: h == null || Number.isNaN(h) ? 0 : h,
        saturation: s == null || Number.isNaN(s) ? 0 : s,
        value: v,
        alpha: initialColor.alpha(),
        valueType: VALUE_TYPES.find((t) => t.value === defaultValueType) ?? VALUE_TYPES[0],
        palette: (controlledPalette ?? defaultPalette ?? []).map((c) => chroma(c)),
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

  // Internal HSV is the source of truth so that lossy RGB/HEX round-trips from a
  // controlled value never corrupt hue/saturation while dragging.
  const color = React.useMemo(
    () => chroma.hsv(internalHue, internalSaturation, internalValue).alpha(internalAlpha),
    [internalHue, internalSaturation, internalValue, internalAlpha],
  )

  const hue = internalHue
  const saturation = internalSaturation
  const value = internalValue
  const alpha = internalAlpha

  // Sync internal state only when the controlled value changes externally.
  // Compare against the last synced value rather than the derived color: the
  // internal HSV state can't always losslessly reproduce the incoming color
  // (grayscale hue is NaN, dropped alpha, hsv round-trip rounding), so keying
  // off `color` here would dispatch on every render and loop forever.
  const lastSyncedColorRef = React.useRef<string | undefined>(undefined)

  React.useEffect(() => {
    if (controlledValue === undefined) {
      return
    }

    const nextColor = normalizeToColor(controlledValue, color)
    const nextKey = nextColor.hex('rgba')

    if (nextKey === lastSyncedColorRef.current) {
      return
    }

    lastSyncedColorRef.current = nextKey

    if (nextKey !== color.hex('rgba')) {
      dispatch({ type: 'set_color', color: nextColor })
    }
  }, [controlledValue, color])

  // Keep the internal palette in sync when a controlled palette changes
  // externally. The ref guards against re-dispatching our own emitted changes,
  // which would otherwise echo back through onPaletteChange and loop.
  const lastSyncedPaletteRef = React.useRef<string | undefined>(undefined)

  React.useEffect(() => {
    if (controlledPalette === undefined) {
      return
    }

    const parsed = controlledPalette.map((c) => chroma(c))
    const nextKey = parsed.map((c) => c.hex('rgba')).join('|')

    if (nextKey === lastSyncedPaletteRef.current) {
      return
    }

    lastSyncedPaletteRef.current = nextKey
    dispatch({ type: 'set_palette', palette: parsed })
  }, [controlledPalette])

  const setColor = React.useCallback(
    (color: chroma.Color) => {
      dispatch({ type: 'set_color', color })
      onValueChange?.(color.hex())
    },
    [onValueChange],
  )
  const setHue = React.useCallback(
    (hue: number) => {
      dispatch({ type: 'set_hue', hue })
      onValueChange?.(chroma.hsv(hue, saturation, value).alpha(alpha).hex())
    },
    [alpha, saturation, value, onValueChange],
  )
  const setSaturation = React.useCallback(
    (saturation: number) => {
      dispatch({ type: 'set_saturation', saturation })
      onValueChange?.(chroma.hsv(hue, saturation, value).alpha(alpha).hex())
    },
    [alpha, hue, value, onValueChange],
  )
  const setValue = React.useCallback(
    (value: number) => {
      dispatch({ type: 'set_value', value })
      onValueChange?.(chroma.hsv(hue, saturation, value).alpha(alpha).hex())
    },
    [alpha, hue, saturation, onValueChange],
  )

  const setSaturationValue = React.useCallback(
    (saturation: number, value: number) => {
      dispatch({ type: 'set_saturation_value', saturation, value })
      onValueChange?.(chroma.hsv(hue, saturation, value).alpha(alpha).hex())
    },
    [alpha, hue, onValueChange],
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
    (palette: chroma.Color[]) => {
      lastSyncedPaletteRef.current = palette.map((c) => c.hex('rgba')).join('|')
      dispatch({ type: 'set_palette', palette })
      onPaletteChange?.(palette.map((c) => c.hex()))
    },
    [onPaletteChange],
  )
  const addPaletteColor = React.useCallback(
    (color: chroma.Color) => {
      if (paletteLimit && palette.length >= paletteLimit) {
        return
      }

      const next = [...palette, color]
      lastSyncedPaletteRef.current = next.map((c) => c.hex('rgba')).join('|')
      dispatch({ type: 'add_palette_color', color })
      onPaletteChange?.(next.map((c) => c.hex()))
    },
    [palette, paletteLimit, onPaletteChange],
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
        setSaturationValue,
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
