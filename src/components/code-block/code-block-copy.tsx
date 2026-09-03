import { CheckIcon, CopyIcon } from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { useCodeBlock } from './code-block'
import { cn } from '@/utils/cn'

import type { CodeBlockCopyProps } from './code-block.types'

export const CodeBlockCopy = ({ className, children, ref, ...props }: CodeBlockCopyProps) => {
  const { currentValue } = useCodeBlock()
  const [copied, setCopied] = React.useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(currentValue.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy text: ', error)
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
      {copied ? (
        <CheckIcon weight="bold" className="animate-in zoom-in" />
      ) : (
        <CopyIcon weight="bold" className="animate-in zoom-in" />
      )}
    </Button>
  )
}
