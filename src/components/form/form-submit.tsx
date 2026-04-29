import { CircleNotchIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useFormContext } from './form-context'
import { cn } from '@/utils/cn'

import type { FormSubmitProps } from './form.types'

export const FormSubmit = ({ className, children, ref, ...props }: FormSubmitProps) => {
  const form = useFormContext()

  return (
    <form.Subscribe selector={(state) => state}>
      {(state) => (
        <Button
          className={cn('w-full', className)}
          disabled={state.isSubmitting || !state.canSubmit}
          ref={ref}
          type="submit"
          {...props}
        >
          {state.isSubmitting ? (
            <CircleNotchIcon className="animate-spin" weight="bold" />
          ) : (
            children
          )}
        </Button>
      )}
    </form.Subscribe>
  )
}
