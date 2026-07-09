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
