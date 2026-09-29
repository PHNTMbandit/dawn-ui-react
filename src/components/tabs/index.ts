import { Tabs as TabsBase } from './tabs'
import { TabsIndicator } from './tabs-indicator'
import { TabsList } from './tabs-list'
import { TabsPanel } from './tabs-panel'
import { TabsTab } from './tabs-tab'

export const Tabs = Object.assign(TabsBase, {
  Indicator: TabsIndicator,
  List: TabsList,
  Panel: TabsPanel,
  Tab: TabsTab,
})

export type {
  TabsIndicatorProps,
  TabsListProps,
  TabsPanelProps,
  TabsProps,
  TabsTabProps,
} from './tabs.types'
export { TabsIndicator } from './tabs-indicator'
export { TabsList } from './tabs-list'
export { TabsPanel } from './tabs-panel'
export { TabsTab } from './tabs-tab'
