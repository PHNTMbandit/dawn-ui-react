import { Combobox as BaseCombobox } from '@base-ui/react/combobox'

import type { inputVariants } from '../input/input.types'
import type { Virtualizer } from '@tanstack/react-virtual'
import type { VariantProps } from 'class-variance-authority'

export type ComboboxEmptyProps = React.ComponentProps<typeof BaseCombobox.Empty>
export type ComboboxInputProps = React.ComponentProps<typeof BaseCombobox.Input> &
  VariantProps<typeof inputVariants> & {
    inline?: boolean
  }
export type ComboboxItemProps = React.ComponentProps<typeof BaseCombobox.Item>
export type ComboboxListProps = React.ComponentProps<typeof BaseCombobox.List>
export type ComboboxPopupProps = React.ComponentProps<typeof BaseCombobox.Positioner>
export type ComboboxProps = React.ComponentProps<typeof BaseCombobox.Root>
export type ComboboxChipsProps = React.ComponentProps<typeof BaseCombobox.Chips>
export type ComboboxChipProps = React.ComponentProps<typeof BaseCombobox.Chip>
export type ComboboxValueProps = React.ComponentProps<typeof BaseCombobox.Value>
export type ComboboxTriggerProps = React.ComponentProps<typeof BaseCombobox.Trigger> & {
  placeholder?: string
}
export type ComboboxGroupProps = React.ComponentProps<typeof BaseCombobox.Group>
export type ComboboxGroupLabelProps = React.ComponentProps<typeof BaseCombobox.GroupLabel>
export type ComboboxCollectionProps = React.ComponentProps<typeof BaseCombobox.Collection>
export type ComboboxStatusProps = React.ComponentProps<typeof BaseCombobox.Status>
export type ComboboxVirtualizedListProps<TItem> = Omit<React.ComponentProps<'div'>, 'children'> & {
  open: boolean
  virtualizerRef?: React.RefObject<Virtualizer<HTMLDivElement, HTMLDivElement> | null>
  estimateSize?: number
  overscan?: number
  children?: React.ReactNode | ((item: TItem) => React.ReactNode)
}
export const useFilter = BaseCombobox.useFilter
export const useFilteredItems = BaseCombobox.useFilteredItems
