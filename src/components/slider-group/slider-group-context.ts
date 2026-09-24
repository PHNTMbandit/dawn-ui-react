import { createContext, useContext, useState } from 'react'

import type { SliderGroupContextValue } from './slider-group.types'

export const SliderGroupContext = createContext<SliderGroupContextValue | null>(null)

export const useSliderGroupContext = () => useContext(SliderGroupContext)

export const areNumberArraysEqual = (a?: number[], b?: number[]) =>
  a === b || (a != null && b != null && a.length === b.length && a.every((v, i) => v === b[i]))

// Keeps a referentially-stable array while its contents are unchanged, so a new
// literal each render can't masquerade as a value change (which loops Base UI's controlled Slider).
export const useStableNumberArray = (next: number[] | undefined) => {
  const [stable, setStable] = useState(next)
  if (!areNumberArraysEqual(stable, next)) {
    setStable(next)
    return next
  }
  return stable
}
