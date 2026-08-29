import { formSetHeadingVariants, type FormSetHeadingProps } from './form.types'
import { cn } from '@/utils/cn'

export const FormSetHeading = ({
  size,
  className,
  children,
  ref,
  ...props
}: FormSetHeadingProps) => {
  return (
    <span className={cn(formSetHeadingVariants({ size, className }))} ref={ref} {...props}>
      {children}
    </span>
  )
}
