import { Tabs as SwitchTabs } from '@base-ui/react/tabs'
import { cn } from '@/utils/cn'

import type { TabsPanelProps } from './tabs.types'

export const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
  return (
    <SwitchTabs.Panel
      className={cn('relative flex grow flex-col items-center justify-start gap-md', className)}
      {...props}
    />
  )
}
