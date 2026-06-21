import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group'
import { ToggleGroupContext } from './toggle-group-context'
import { toggleGroupVariants, type ToggleGroupProps } from './toggle-group.types'
import { cn } from '@/utils/cn'

export const ToggleGroup = ({
  size = 'medium',
  variant,
  className,
  children,
  ref,
  ...props
}: ToggleGroupProps) => {
  const displaySize = size ?? 'medium'
  return (
    <ToggleGroupContext.Provider value={{ size: displaySize }}>
      <BaseToggleGroup
        className={cn(toggleGroupVariants({ size: displaySize, variant, className }))}
        data-size={displaySize}
        ref={ref}
        {...props}
      >
        {children}
      </BaseToggleGroup>
    </ToggleGroupContext.Provider>
  )
}
