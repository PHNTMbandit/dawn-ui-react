import chroma from 'chroma-js'

export const getHueTrack = () => {
  return Array.from({ length: 361 }, (_, hue) => chroma.hsl(hue, 1, 0.5).hex())
}

export const getTransparencyTrack = (baseColor: string) => {
  return Array.from({ length: 101 }, (_, i) =>
    chroma(baseColor)
      .alpha(i / 100)
      .css(),
  )
}

export const getSaturationTrack = (baseColor: string) => {
  return Array.from({ length: 101 }, (_, i) =>
    chroma(baseColor)
      .set('hsl.s', i / 100)
      .css(),
  )
}

export const getLightnessTrack = (baseColor: string) => {
  return Array.from({ length: 101 }, (_, i) =>
    chroma(baseColor)
      .set('hsl.l', i / 100)
      .css(),
  )
}
