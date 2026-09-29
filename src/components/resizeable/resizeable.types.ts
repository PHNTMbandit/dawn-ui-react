import type * as BaseResizable from 'react-resizable-panels'

export type ResizeablePanelGroupProps = BaseResizable.GroupProps
export type ResizeablePanelProps = BaseResizable.PanelProps
export type ResizeableHandleProps = BaseResizable.SeparatorProps & {
  withHandle?: boolean
}
