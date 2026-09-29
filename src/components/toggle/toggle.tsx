import { Toggle as BaseToggle } from '@base-ui/react/toggle'
import { useContext } from 'react'
import { ToggleGroupContext } from '../toggle-group/toggle-group-context'
import { type ToggleProps, toggleVariants } from './toggle.types'
import { cn } from '@/utils/cn'

export const Toggle = ({ size, tone, className, children, ref, ...props }: ToggleProps) => {
  const toggleGroupContext = useContext(ToggleGroupContext)
  const effectiveSize = size ?? toggleGroupContext?.size ?? 'medium'

  return (
    <BaseToggle
      ref={ref}
      {...props}
      render={(props, state) => {
        return (
          <button
            {...props}
            className={cn(toggleVariants({ size: effectiveSize, tone, className }))}
            type="button"
          >
            {typeof children === 'function' ? children(state) : children}
          </button>
        )
      }}
    />
  )
}
