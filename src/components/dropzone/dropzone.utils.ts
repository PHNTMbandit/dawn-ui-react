export const formatFileSize = (bytes: number): string => {
  if (bytes < 1000) {
    return `${bytes} B`
  }

  const units = ['KB', 'MB', 'GB', 'TB']
  let size = bytes / 1000
  let unitIndex = 0

  while (size >= 1000 && unitIndex < units.length - 1) {
    size /= 1000
    unitIndex += 1
  }

  return `${size.toFixed(size % 1 === 0 ? 0 : 1)}${units[unitIndex]}`
}

export const getFileKey = (file: File): string => `${file.name}-${file.size}-${file.lastModified}`

export const isFileTypeAccepted = (file: File, acceptedFileTypes: string[]): boolean => {
  if (acceptedFileTypes.length === 0) {
    return true
  }

  const fileName = file.name.toLowerCase()
  const fileType = file.type.toLowerCase()

  return acceptedFileTypes.some((accepted) => {
    const pattern = accepted.toLowerCase()

    if (pattern.startsWith('.')) {
      return fileName.endsWith(pattern)
    }

    if (pattern.endsWith('/*')) {
      return fileType.startsWith(`${pattern.slice(0, -1)}`)
    }

    return fileType === pattern
  })
}
