import { cn } from '@/utils/cn'

type FormProps = React.ComponentProps<'form'>

export const Form = ({ className, children, ref, ...props }: FormProps) => {
  return (
    <form className={cn('flex flex-col gap-lg', className)} ref={ref} {...props}>
      {children}
    </form>
  )
}
