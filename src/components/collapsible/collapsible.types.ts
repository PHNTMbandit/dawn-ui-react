import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible'

import type { Button } from '../button'

export type CollapsibleProps = React.ComponentProps<typeof BaseCollapsible.Root>
export type CollapsibleTriggerProps = React.ComponentProps<typeof Button>
export type CollapsiblePanelProps = React.ComponentProps<typeof BaseCollapsible.Panel>
