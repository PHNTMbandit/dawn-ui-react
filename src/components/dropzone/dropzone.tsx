import React from 'react'
import { formatFileSize, getFileKey } from './dropzone.utils'
import { cn } from '@/utils/cn'

import type { DropzoneProps } from './dropzone.types'

type DropzoneContextProps = {
  acceptedFileTypes: string[]
  fileError: string | null
  fileProgress: Record<string, number>
  files: File[]
  handleDragLeave: (event: React.DragEvent<HTMLDivElement>) => void
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void
  handleFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputRef: React.RefObject<HTMLInputElement | null>
  isHovering: boolean
  maxFileSize?: string
  maxFiles?: number
  props: React.ComponentProps<'input'>
  removeFile: (file: File) => void
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
}

const DropzoneContext = React.createContext<DropzoneContextProps | null>(null)

export const Dropzone = ({
  maxFiles,
  maxFileSize,
  maxFilesErrorLabel = (max) => `You can select up to ${max} file${max === 1 ? '' : 's'}.`,
  maxFileSizeErrorLabel = (fileName, max) => `"${fileName}" exceeds the maximum size of ${max}.`,
  onUpload,
  ref,
  className,
  children,
  onChange,
  ...props
}: DropzoneProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const filesRef = React.useRef<File[]>([])
  const [isHovering, setIsHovering] = React.useState(false)
  const [files, setFiles] = React.useState<File[]>([])
  const [fileError, setFileError] = React.useState<string | null>(null)
  const [fileProgress, setFileProgress] = React.useState<Record<string, number>>({})

  React.useEffect(() => {
    filesRef.current = files
  }, [files])
  const acceptedFileTypes = React.useMemo(() => {
    if (typeof props.accept !== 'string') {
      return []
    }

    return props.accept
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean)
  }, [props.accept])

  const syncInputFiles = React.useCallback((nextFiles: File[]) => {
    if (!inputRef.current) {
      return
    }

    const dataTransfer = new DataTransfer()
    nextFiles.forEach((file) => dataTransfer.items.add(file))
    inputRef.current.files = dataTransfer.files
  }, [])

  const getNextFiles = React.useCallback(
    (incomingFiles: File[]) => {
      if (!props.multiple) {
        return incomingFiles.slice(0, 1)
      }

      const mergedFiles = [...filesRef.current, ...incomingFiles]
      const dedupedFiles = mergedFiles.filter(
        (file, index, source) =>
          source.findIndex(
            (item) =>
              item.name === file.name &&
              item.size === file.size &&
              item.lastModified === file.lastModified,
          ) === index,
      )

      return dedupedFiles
    },
    [props.multiple],
  )

  const removeFile = React.useCallback(
    (fileToRemove: File) => {
      const removedKey = getFileKey(fileToRemove)

      setFiles((previousFiles) => {
        const nextFiles = previousFiles.filter((file) => file !== fileToRemove)
        filesRef.current = nextFiles
        syncInputFiles(nextFiles)
        return nextFiles
      })
      setFileProgress((previous) => {
        const next = { ...previous }
        delete next[removedKey]
        return next
      })
      setFileError(null)
    },
    [syncInputFiles],
  )

  const startUploads = React.useCallback(
    (newFiles: File[]) => {
      newFiles.forEach((file) => {
        const key = getFileKey(file)

        if (!onUpload) {
          setFileProgress((previous) => ({ ...previous, [key]: 100 }))
          return
        }

        setFileProgress((previous) => ({ ...previous, [key]: 0 }))
        void onUpload(file, (percent) => {
          setFileProgress((previous) => ({
            ...previous,
            [key]: Math.max(0, Math.min(100, percent)),
          }))
        })
      })
    },
    [onUpload],
  )

  const processFiles = React.useCallback(
    (candidateFiles: File[]) => {
      const oversizedFiles =
        maxFileSize !== undefined ? candidateFiles.filter((file) => file.size > maxFileSize) : []
      const acceptedFiles =
        maxFileSize !== undefined
          ? candidateFiles.filter((file) => file.size <= maxFileSize)
          : candidateFiles

      if (maxFiles !== undefined && acceptedFiles.length > maxFiles) {
        return {
          acceptedFiles: null,
          error: maxFilesErrorLabel(maxFiles),
        }
      }

      const error =
        oversizedFiles.length > 0 && maxFileSize !== undefined
          ? maxFileSizeErrorLabel(oversizedFiles[0].name, formatFileSize(maxFileSize))
          : null

      return {
        acceptedFiles,
        error,
      }
    },
    [maxFiles, maxFileSize, maxFilesErrorLabel, maxFileSizeErrorLabel],
  )

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : []
    const previousFiles = filesRef.current
    const nextFiles = getNextFiles(selectedFiles)
    const { acceptedFiles, error } = processFiles(nextFiles)

    if (!acceptedFiles) {
      setFileError(error)
      syncInputFiles(previousFiles)

      return
    }

    setFileError(error)
    const previousKeys = new Set(previousFiles.map(getFileKey))
    const addedFiles = acceptedFiles.filter((file) => !previousKeys.has(getFileKey(file)))
    filesRef.current = acceptedFiles
    setFiles(acceptedFiles)
    syncInputFiles(acceptedFiles)
    startUploads(addedFiles)

    if (inputRef.current) {
      onChange?.({
        target: inputRef.current,
        currentTarget: inputRef.current,
      } as React.ChangeEvent<HTMLInputElement>)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsHovering(true)
  }

  const handleDragLeave = () => {
    setIsHovering(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFiles = Array.from(event.dataTransfer.files)
    const previousFiles = filesRef.current
    const nextFiles = getNextFiles(droppedFiles)
    const { acceptedFiles, error } = processFiles(nextFiles)

    if (!acceptedFiles) {
      setFileError(error)
      setIsHovering(false)
      return
    }

    setFileError(error)
    const previousKeys = new Set(previousFiles.map(getFileKey))
    const addedFiles = acceptedFiles.filter((file) => !previousKeys.has(getFileKey(file)))
    filesRef.current = acceptedFiles
    setFiles(acceptedFiles)
    syncInputFiles(acceptedFiles)
    startUploads(addedFiles)

    if (inputRef.current) {
      onChange?.({
        target: inputRef.current,
        currentTarget: inputRef.current,
      } as React.ChangeEvent<HTMLInputElement>)
    }

    setIsHovering(false)
  }

  return (
    <DropzoneContext.Provider
      value={{
        acceptedFileTypes,
        fileError,
        fileProgress,
        files,
        handleDragLeave,
        handleDragOver,
        handleDrop,
        handleFiles,
        inputRef,
        isHovering,
        maxFileSize: maxFileSize !== undefined ? formatFileSize(maxFileSize) : undefined,
        maxFiles,
        props,
        removeFile,
        setFiles,
      }}
    >
      <div className={cn('space-y-xs', className)} ref={ref}>
        {children}
      </div>
    </DropzoneContext.Provider>
  )
}

export const useDropzone = () => {
  const context = React.useContext(DropzoneContext)

  if (!context) {
    throw new Error('useDropzone must be used within a DropzoneProvider')
  }

  return context
}
