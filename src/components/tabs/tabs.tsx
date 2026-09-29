import { Tabs as SwitchTabs } from '@base-ui/react/tabs'
import { tabsVariants } from './tabs.types'
import { cn } from '@/utils/cn'

import type { TabsProps } from '.'

export const Tabs = ({ size, tone, variant, fill, className, ref, ...props }: TabsProps) => {
  return (
    <SwitchTabs.Root
      className={cn(tabsVariants({ size, tone, variant, fill }), className)}
      ref={ref}
      {...props}
    />
  )
}
