import { inputGroupAddonVariants, type InputGroupAddonProps } from './input-group.types'
import { cn } from '@/utils/cn'

export const InputGroupAddon = ({
  size,
  className,
  children,
  ref,
  ...props
}: InputGroupAddonProps) => {
  return (
    <div className={cn(inputGroupAddonVariants({ size }), className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
