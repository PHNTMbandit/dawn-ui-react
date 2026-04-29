import { cn } from '@/utils/cn'

type FormProps = React.ComponentProps<'form'>

export const Form = ({ className, children, ref, ...props }: FormProps) => {
  return (
    <form className={cn('space-y-sm', className)} ref={ref} {...props}>
      {children}
    </form>
  )
}
