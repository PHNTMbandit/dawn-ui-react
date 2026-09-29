import { Radio as BaseRadio } from '@base-ui/react'
import { Label } from '../label'
import { radioVariants, type RadioProps } from './radio-group.types'
import { cn } from '@/utils/cn'

export const Radio = ({ variant, className, children, ref, ...props }: RadioProps) => {
  return (
    <Label htmlFor={props.id}>
      <BaseRadio.Root className={cn(radioVariants({ variant, className }))} ref={ref} {...props}>
        <BaseRadio.Indicator
          data-indicator
          className="size-2xs origin-center scale-0 rounded-full bg-surface shadow-2xs transition-transform duration-200 ease-out data-checked:scale-100"
        />
      </BaseRadio.Root>
      {children}
    </Label>
  )
}
