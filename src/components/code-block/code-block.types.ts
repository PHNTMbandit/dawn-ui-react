import { SelectTrigger } from '../select'

import type { Tabs } from '../tabs'

export type CodeBlockProps = Omit<React.ComponentProps<'div'>, 'defaultValue'> & {
  defaultValue: CodeBlockValue
  items: CodeBlockValue[]
}

export type CodeBlockProviderState = {
  currentValue: CodeBlockValue
  setCurrentValue: React.Dispatch<React.SetStateAction<CodeBlockValue>>
  items: CodeBlockValue[]
}

export type CodeBlockValue = {
  id: string
  label: string
  name: string
  content: string
  icon?: React.ReactNode
}

export type CodeBlockTabsProps = React.ComponentProps<typeof Tabs>
export type CodeBlockCopyProps = React.ComponentProps<'button'>
export type CodeBlockNameProps = React.ComponentProps<'div'>
export type CodeBlockSelectProps = React.ComponentProps<typeof SelectTrigger>
export type CodeBlockHeaderGroupProps = React.ComponentProps<'div'>
export type CodeBlockDownloadProps = React.ComponentProps<'button'>
export type CodeBlockActionsProps = React.ComponentProps<'div'>
export type CodeBlockWindowProps = React.ComponentProps<'div'>
