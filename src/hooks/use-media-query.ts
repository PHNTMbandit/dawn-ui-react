import React from 'react'

type Device = {
  name: 'mobile' | 'tablet' | 'desktop'
  query: string
}

const devices: Device[] = [
  { name: 'mobile', query: '(max-width: 767px), (orientation: landscape) and (max-height: 500px)' },
  { name: 'tablet', query: '(min-width: 768px) and (max-width: 1023px)' },
  { name: 'desktop', query: '(min-width: 1024px)' },
]

export const useMediaQuery = (deviceName: Device['name']) => {
  const [matches, setMatches] = React.useState(false)
  const device = devices.find((d) => d.name === deviceName)!

  React.useEffect(() => {
    const media = window.matchMedia(device.query)

    const update = () => setMatches(media.matches)

    update()

    media.addEventListener('change', update)

    return () => media.removeEventListener('change', update)
  }, [device])

  return matches
}
