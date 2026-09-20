import { cn } from '@/utils/cn'

type SliderLabelProps = React.ComponentProps<'span'>

export const SliderLabel = ({ className, children, ref, ...props }: SliderLabelProps) => {
  return (
    <span
      data-slot="slider-label"
      className={cn('style-text-default-0', className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  )
}
