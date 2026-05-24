import React from 'react'
import { cn } from '@/utils/cn'

import type { CodeBlockProps, CodeBlockProviderState, CodeBlockValue } from './code-block.types'

const CodeBlockContext = React.createContext<CodeBlockProviderState | undefined>(undefined)

export const CodeBlock = ({
  items,
  defaultValue,
  className,
  children,
  ref,
  ...props
}: CodeBlockProps) => {
  const [currentValue, setCurrentValue] = React.useState<CodeBlockValue>(defaultValue)

  return (
    <CodeBlockContext.Provider value={{ currentValue, setCurrentValue, items }}>
      <div
        className={cn('flex flex-col rounded-xl border border-border bg-surface', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </CodeBlockContext.Provider>
  )
}

export const useCodeBlock = () => {
  const context = React.useContext(CodeBlockContext)

  if (!context) {
    throw new Error('useCodeBlock must be used within a CodeBlock')
  }

  return context
}
