import { cva, type VariantProps } from 'class-variance-authority'
import { InputGroup } from '../input-group'

import type { Button } from '../button'
import type {
  OnChangeFn,
  Row,
  RowData,
  TableFeature,
  TableFeatures,
  Updater,
} from '@tanstack/react-table'
import type React from 'react'

declare module '@tanstack/react-table' {
  interface Plugins {
    rowLockedFeature: TableFeature
    rowVisibilityFeature: TableFeature
  }

  interface TableState_FeatureMap {
    rowLockedFeature: LayerTreeState_RowLocked
    rowVisibilityFeature: LayerTreeState_RowVisibility
  }

  interface TableOptions_FeatureMap<TFeatures extends TableFeatures, TData extends RowData> {
    rowLockedFeature: LayerTreeOptions_RowLocked<TData>
    rowVisibilityFeature: LayerTreeOptions_RowVisibility<TData>
  }

  interface Table_FeatureMap<TFeatures extends TableFeatures, TData extends RowData> {
    rowLockedFeature: LayerTreeTable_RowLocked
    rowVisibilityFeature: LayerTreeTable_RowVisibility
  }

  interface Row_FeatureMap<TFeatures extends TableFeatures, TData extends RowData> {
    rowLockedFeature: LayerTreeRow_RowLocked
    rowVisibilityFeature: LayerTreeRow_RowVisibility
  }
}

export type LayerTreeProps = React.ComponentProps<'div'> & {
  onDNDStart?: (event: { nodeId: string }) => void
  onDNDEnd?: (event: { sourceNodeId: string; targetNodeId: string }) => void
}

export type LayerTreeBodyProps = React.ComponentProps<'div'>
export type LayerTreeRowProps = React.ComponentProps<'div'> & {
  rowId: string
}

export type LayerTreeTriggerCellProps = React.ComponentProps<'button'> & {
  dndDisabled?: boolean
}
export type LayerTreeSearchProps = React.ComponentProps<typeof InputGroup> & {
  placeholder?: string
}
export type LayerTreeExpandAllProps = React.ComponentProps<typeof Button>
export type LayerTreeFooterProps = React.ComponentProps<'div'>
export type LayerTreeSortProps = React.ComponentProps<'button'>
export type LayerTreeIconCellProps = React.ComponentProps<'div'>
export type LayerTreeLockedCellProps = React.ComponentProps<typeof Button>
export type LayerTreeLockedAllProps = React.ComponentProps<typeof Button>
export type LayerTreeVisibilityCellProps = React.ComponentProps<typeof Button>
export type LayerTreeVisibilityAllProps = React.ComponentProps<typeof Button>
export type LayerTreeTextCellProps = React.ComponentProps<'span'> &
  VariantProps<typeof layerTreeTextCellVariants>

export const layerTreeTextCellVariants = cva('min-w-0 grow truncate px-2xs', {
  variants: {
    size: {
      small: 'style-text-default--1',
      medium: 'style-text-default-0',
      large: 'style-text-default-1',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export interface LayerTreeColumnMeta {
  fill?: boolean
}

export interface LayerTreeTableMeta {
  translations?: {
    buttonLabels?: {
      ascending?: string
      descending?: string
    }
  }
}

export type RowVisibilityState = Record<string, boolean>

export interface LayerTreeState_RowVisibility {
  rowVisibility: RowVisibilityState
}

export interface LayerTreeOptions_RowVisibility<TData extends RowData = RowData> {
  enableRowVisibility?: boolean
  onRowVisibilityChange?: OnChangeFn<RowVisibilityState>
  getRowVisible?: (row: Row<TableFeatures, TData>) => boolean
}

export interface LayerTreeTable_RowVisibility {
  setRowVisibility: (updater: Updater<RowVisibilityState>) => void
  resetRowVisibility: () => void
  toggleAllRowsVisible: (value?: boolean) => void
  getIsAllRowsVisible: () => boolean
}

export interface LayerTreeRow_RowVisibility {
  getIsVisible: () => boolean
  toggleVisibility: (value?: boolean) => void
}

export type RowLockedState = Record<string, boolean>

export interface LayerTreeState_RowLocked {
  rowLocked: RowLockedState
}

export interface LayerTreeOptions_RowLocked<TData extends RowData = RowData> {
  enableRowLocked?: boolean
  onRowLockedChange?: OnChangeFn<RowLockedState>
  getRowLocked?: (row: Row<TableFeatures, TData>) => boolean
}

export interface LayerTreeTable_RowLocked {
  setRowLocked: (updater: Updater<RowLockedState>) => void
  resetRowLocked: () => void
  toggleAllRowsLocked: (value?: boolean) => void
  getIsAllRowsLocked: () => boolean
}

export interface LayerTreeRow_RowLocked {
  getIsLocked: () => boolean
  toggleLocked: (value?: boolean) => void
}
