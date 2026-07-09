import { CheckIcon, FileArrowUpIcon, TrashIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Meter, MeterFooter, MeterIndicator, MeterTrack, MeterValue } from '../meter'
import { useDropzone } from './dropzone'
import { formatFileSize, getFileKey } from './dropzone.utils'
import { cn } from '@/utils/cn'

import type { DropzoneFileListProps } from './dropzone.types'

export const DropzoneFileList = ({ className, children, ref, ...props }: DropzoneFileListProps) => {
  const { files, fileProgress, removeFile } = useDropzone()

  return (
    <ul className={cn('flex flex-col gap-xs', className)} ref={ref} {...props}>
      {files.map((file, index) => {
        const progress = fileProgress[getFileKey(file)] ?? 0
        const isUploading = progress >= 0 && progress < 100
        const isUploaded = progress >= 100

        return (
          <li
            key={index}
            className="flex items-center justify-between gap-lg rounded-xl border-border bg-surface p-md shadow-2xs"
          >
            {isUploading && (
              <div className="flex items-center justify-center rounded-full bg-brand-container p-xs">
                <FileArrowUpIcon className="size-md text-brand-on-container" />
              </div>
            )}
            {isUploaded && (
              <div className="flex items-center justify-center rounded-full bg-success-container p-xs">
                <CheckIcon className="size-md text-success-on-container" />
              </div>
            )}
            <div className="flex w-full flex-col justify-between gap-sm">
              <span className="style-text-default-0">{file.name}</span>
              <Meter
                orientation="vertical"
                tone={progress >= 100 ? 'success' : 'brand'}
                value={progress}
              >
                <MeterTrack>
                  <MeterIndicator />
                </MeterTrack>
                <MeterFooter>
                  <span className="style-text-prose--1 text-on-surface-variant">
                    {formatFileSize(file.size)}
                  </span>
                  <MeterValue />
                </MeterFooter>
              </Meter>
            </div>
            <Button variant={'ghost'} tone="error" onClick={() => removeFile(file)}>
              <TrashIcon weight="bold" />
            </Button>
          </li>
        )
      })}
      {children}
    </ul>
  )
}
