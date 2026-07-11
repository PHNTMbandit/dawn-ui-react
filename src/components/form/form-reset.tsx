import { Button } from '../button'
import { useFormContext } from './form-contexts'
import { cn } from '@/utils/cn'

import type { FormResetProps } from './form.types'

export const FormReset = ({ className, children, ref, ...props }: FormResetProps) => {
  const form = useFormContext()

  const handleClick = () => {
    form.reset()
  }

  return (
    <form.Subscribe selector={(state) => state}>
      {(state) => (
        <Button
          className={cn('w-full', className)}
          disabled={!state.values}
          onClick={handleClick}
          ref={ref}
          type="reset"
          {...props}
        >
          {children}
        </Button>
      )}
    </form.Subscribe>
  )
}
