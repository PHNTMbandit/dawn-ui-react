import React from 'react'
import { cn } from '@/utils/cn'

import type { LayerTreeProps } from './layer-tree.types'

type LayerTreeContextType = LayerTreeProps

const LayerTreeContext = React.createContext<LayerTreeContextType | null>(null)

export const LayerTree = ({ table, className, children, ref, ...props }: LayerTreeProps) => {
  return (
    <LayerTreeContext.Provider value={{ table, className, children, ref, ...props }}>
      <div className={cn('flex flex-col gap-sm', className)} ref={ref} {...props}>
        {children}
      </div>
    </LayerTreeContext.Provider>
  )
}

export const useLayerTree = () => {
  const context = React.useContext(LayerTreeContext)

  if (!context) {
    throw new Error('useLayerTree must be used within a LayerTreeProvider')
  }

  return context
}
