import { Combobox as BaseCombobox, type ComboboxEmptyProps } from '@base-ui/react/combobox'
import { cn } from '@/utils/cn'

export const ComboboxEmpty = ({ className, children, ref, ...props }: ComboboxEmptyProps) => {
  return (
    <BaseCombobox.Empty
      className={cn(
        'max-h-[min(23rem,var(--available-height))] scroll-py-[0.5rem] overflow-y-auto overscroll-contain p-xs empty:m-[0px] empty:p-[0px]',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseCombobox.Empty>
  )
}
