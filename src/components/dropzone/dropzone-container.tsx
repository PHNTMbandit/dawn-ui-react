import { useDropzone } from './dropzone'
import { cn } from '@/utils/cn'

import type { DropzoneContainerProps } from './dropzone.types'

export const DropzoneContainer = ({
  className,
  children,
  ...containerProps
}: DropzoneContainerProps) => {
  const {
    fileError,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFiles,
    inputRef,
    isHovering,
    props,
  } = useDropzone()

  const isDisabled = props.disabled ?? false

  const openFilePicker = () => {
    if (!isDisabled) {
      inputRef.current?.click()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openFilePicker()
    }
  }

  return (
    <div
      aria-disabled={isDisabled}
      aria-invalid={fileError ? true : undefined}
      aria-label="File upload dropzone"
      onClick={openFilePicker}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      className={cn(
        'flex size-full items-center justify-center rounded-xl border-2 border-brand-border bg-surface transition-all outline-none focus-visible:outline-2 focus-visible:outline-brand-border-strong',
        !isDisabled && 'cursor-pointer',
        isHovering && 'ring-8 ring-brand-border-strong/20',
        fileError && 'border-error-border',
        isDisabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      {...containerProps}
    >
      <div className="flex flex-col items-center justify-center gap-lg">{children}</div>
      <input
        {...props}
        hidden
        onChange={handleFiles}
        onClick={(event) => {
          event.currentTarget.value = ''
        }}
        ref={inputRef}
        type="file"
      />
    </div>
  )
}
