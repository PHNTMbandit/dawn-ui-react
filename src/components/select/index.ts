import { Select as SelectBase } from './select'
import { SelectDescription } from './select-description'
import { SelectGroup } from './select-group'
import { SelectGroupLabel } from './select-group-label'
import { SelectIcon } from './select-icon'
import { SelectItem } from './select-item'
import { SelectList } from './select-list'
import { SelectPopup } from './select-popup'
import { SelectTitle } from './select-title'
import { SelectTrigger } from './select-trigger'
import { SelectValue } from './select-value'

export const Select = Object.assign(SelectBase, {
  Item: SelectItem,
  List: SelectList,
  Icon: SelectIcon,
  Popup: SelectPopup,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Description: SelectDescription,
  Title: SelectTitle,
})

export type {
  SelectIconProps,
  SelectItemProps,
  SelectListProps,
  SelectPopupProps,
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectGroupProps,
  SelectGroupLabelProps,
} from './select.types'
export { SelectItem } from './select-item'
export { SelectList } from './select-list'
export { SelectIcon } from './select-icon'
export { SelectPopup } from './select-popup'
export { SelectTrigger } from './select-trigger'
export { SelectValue } from './select-value'
export { SelectGroup } from './select-group'
export { SelectGroupLabel } from './select-group-label'
export { SelectDescription } from './select-description'
export { SelectTitle } from './select-title'
