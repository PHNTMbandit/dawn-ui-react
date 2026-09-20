import { cn } from '@/utils/cn'

type SliderIconProps = React.ComponentProps<'div'>

export const SliderIcon = ({ className, children, ref, ...props }: SliderIconProps) => {
  return (
    <div
      data-slot="slider-icon"
      className={cn('[&>svg]:size-sm [&>svg]:shrink-0', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
