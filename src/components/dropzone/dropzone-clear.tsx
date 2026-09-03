import { Button } from '../button'
import { useDropzone } from './dropzone'
import { cn } from '@/utils/cn'

import type { DropzoneClearProps } from './dropzone.types'

export const DropzoneClear = ({ className, children, ref, ...props }: DropzoneClearProps) => {
  const { files, setFiles } = useDropzone()

  return (
    <Button
      disabled={files.length === 0}
      onClick={() => setFiles([])}
      tone="error"
      variant={'outline'}
      className={cn('w-full', className)}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  )
}
