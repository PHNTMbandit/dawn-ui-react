import { Button } from '../button'
import { useDropzone } from './dropzone'
import { cn } from '@/utils/cn'

import type { DropzoneConfirmProps } from './dropzone.types'

export const DropzoneConfirm = ({ className, children, ref, ...props }: DropzoneConfirmProps) => {
  const { files, onConfirm } = useDropzone()

  const handleClick = () => {
    if (onConfirm) {
      onConfirm(files)
    }
  }
  return (
    <Button
      disabled={files.length === 0}
      onClick={handleClick}
      className={cn('w-full', className)}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  )
}
