import { Button } from '../button'
import { useDropzone } from './dropzone'
import { cn } from '@/utils/cn'

import type { DropzoneTriggerProps } from './dropzone.types'

export const DropzoneTrigger = ({ className, children, ref, ...props }: DropzoneTriggerProps) => {
  const { inputRef } = useDropzone()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    inputRef.current?.click()
  }

  return (
    <Button
      variant={'link'}
      onClick={handleClick}
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  )
}
