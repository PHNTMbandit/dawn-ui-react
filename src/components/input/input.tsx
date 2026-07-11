import { Input as BaseInput } from '@base-ui/react/input'
import { UploadIcon, XIcon } from '@phosphor-icons/react'
import { useRef, useState } from 'react'
import { Button } from '../button'
import { formatFileSize, inputVariants, type InputProps } from './input.types'
import { cn } from '@/utils/cn'

export const Input = ({
  fileUploadButtonIcon = <UploadIcon weight="bold" />,
  fileUploadButtonLabel,
  maxFiles,
  maxFileSize,
  clearFilesLabel = 'Remove files',
  filesSelectedLabel = (count) => `${count} files selected`,
  maxFilesErrorLabel = (max) => `You can select up to ${max} file${max === 1 ? '' : 's'}.`,
  maxFileSizeErrorLabel = (fileName, max) => `"${fileName}" exceeds the maximum size of ${max}.`,
  compact,
  variant,
  size,
  className,
  ref,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uncontrolledColorValue, setUncontrolledColorValue] = useState<string>(
    (props.defaultValue as string) || (props.value as string) || '#000000',
  )
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState<string | null>(null)

  if (props.type === 'color') {
    const isControlled = props.value !== undefined
    const colorValue =
      ((isControlled ? props.value : uncontrolledColorValue) as string) || '#000000'
    const { onChange, defaultValue: _defaultValue, value: _value, ...colorProps } = props

    const handleColorChange: NonNullable<typeof onChange> = (event) => {
      if (!isControlled) {
        setUncontrolledColorValue((event.currentTarget as HTMLInputElement).value)
      }

      onChange?.(event)
    }

    const handleColorRef = (node: HTMLInputElement | null) => {
      inputRef.current = node

      if (typeof ref === 'function') {
        ref(node)
        return
      }

      if (ref && typeof ref === 'object') {
        ;(ref as { current: HTMLInputElement | null }).current = node
      }
    }

    if (compact) {
      return (
        <button
          aria-label="Open color picker"
          className={cn(
            'relative outline-2 outline-transparent transition-colors focus-within:outline-border hover:cursor-pointer',
            size === 'small' && 'size-lg -outline-offset-2',
            size === 'medium' && 'size-xl -outline-offset-4',
            size === 'large' && 'size-2xl -outline-offset-6',
            className,
          )}
          disabled={props.disabled}
          onClick={() => inputRef.current?.click()}
          type="button"
        >
          <div
            className={cn(
              'size-full',
              size === 'small' && 'rounded-lg',
              size === 'medium' && 'rounded-xl',
              size === 'large' && 'rounded-2xl',
            )}
            style={{
              backgroundColor: colorValue,
            }}
          />
          <BaseInput
            className="peer pointer-events-none invisible absolute"
            defaultValue={!isControlled ? colorValue : undefined}
            onChange={handleColorChange}
            ref={handleColorRef}
            type="color"
            value={isControlled ? colorValue : undefined}
            {...colorProps}
          />
        </button>
      )
    }

    return (
      <button
        aria-label="Open color picker"
        className={cn('relative hover:cursor-pointer', inputVariants({ variant, size }), className)}
        disabled={props.disabled}
        onClick={() => inputRef.current?.click()}
        type="button"
      >
        <div
          className={cn(
            'absolute top-1/2 left-xs aspect-square h-7/12 -translate-y-1/2',
            size === 'small' && 'rounded-md',
            size === 'medium' && 'rounded-lg',
            size === 'large' && 'rounded-xl',
          )}
          style={{
            backgroundColor: colorValue,
          }}
        />
        <BaseInput
          className="peer pointer-events-none invisible absolute top-lg"
          defaultValue={!isControlled ? colorValue : undefined}
          onChange={handleColorChange}
          ref={handleColorRef}
          type="color"
          value={isControlled ? colorValue : undefined}
          {...colorProps}
        />
        <p
          className={cn(
            'text-left',
            size === 'small' && 'pr-2xs pl-lg style-text-default--1',
            size === 'medium' && 'pl-lg style-text-default-0',
            size === 'large' && 'pl-xl style-text-default-1',
          )}
        >
          {colorValue}
        </p>
      </button>
    )
  }

  if (props.type === 'file') {
    const { onChange, ...fileProps } = props

    const clearFiles = () => {
      if (inputRef.current) {
        inputRef.current.value = ''
      }

      setSelectedFiles([])
      setFileError(null)
    }

    const handleFileChange: NonNullable<typeof onChange> = (event) => {
      const input = event.currentTarget as HTMLInputElement
      const files = input.files ? Array.from(input.files) : []

      if (maxFiles !== undefined && files.length > maxFiles) {
        setSelectedFiles([])
        setFileError(maxFilesErrorLabel(maxFiles))
        input.value = ''
        return
      }

      const oversizedFile =
        maxFileSize !== undefined ? files.find((file) => file.size > maxFileSize) : undefined

      if (oversizedFile && maxFileSize !== undefined) {
        setSelectedFiles([])
        setFileError(maxFileSizeErrorLabel(oversizedFile.name, formatFileSize(maxFileSize)))
        input.value = ''
        return
      }

      setFileError(null)
      setSelectedFiles(files)
      onChange?.(event)
    }

    return (
      <div className="flex items-center justify-between gap-lg">
        <div className="flex items-center gap-xs">
          <Button variant={'soft'} tone="neutral" onClick={() => inputRef.current?.click()}>
            {fileUploadButtonIcon}
            {fileUploadButtonLabel}
          </Button>
          <BaseInput ref={inputRef} {...fileProps} hidden onChange={handleFileChange} />
          <p className="style-text-default-0">
            {fileError ? (
              <span className="style-text-prose-0 text-error-default">{fileError}</span>
            ) : selectedFiles.length === 0 ? (
              <span className="style-text-prose-0 text-on-surface-variant">
                {props?.placeholder}
              </span>
            ) : selectedFiles.length === 1 ? (
              selectedFiles[0].name
            ) : (
              filesSelectedLabel(selectedFiles.length)
            )}
          </p>
        </div>
        <Button
          aria-label={clearFilesLabel}
          size="iconMedium"
          variant={'ghost'}
          tone="error"
          onClick={clearFiles}
        >
          <XIcon weight="bold" />
        </Button>
      </div>
    )
  }

  return (
    <BaseInput className={cn(inputVariants({ variant, size }), className)} ref={ref} {...props} />
  )
}
