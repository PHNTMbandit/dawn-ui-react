import { CheckIcon, DownloadIcon } from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { useCodeBlock } from './code-block'
import { cn } from '@/utils/cn'

import type { CodeBlockDownloadProps } from './code-block.types'

export const CodeBlockDownload = ({
  className,
  children,
  ref,
  ...props
}: CodeBlockDownloadProps) => {
  const { currentValue } = useCodeBlock()
  const [downloaded, setDownloaded] = React.useState(false)

  const handleClick = async () => {
    try {
      const blob = new Blob([currentValue.content])
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${currentValue.name}`
      a.click()
      URL.revokeObjectURL(url)

      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 2000)
    } catch (error) {
      console.error('Failed to download file: ', error)
    }
  }

  return (
    <Button
      onClick={handleClick}
      size="iconMedium"
      variant={'ghost'}
      tone="neutral"
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      {children}
      {downloaded ? (
        <CheckIcon weight="bold" className="animate-in zoom-in" />
      ) : (
        <DownloadIcon weight="bold" className="animate-in zoom-in" />
      )}
    </Button>
  )
}
