import { bentoBoxVariants, type BentoBoxProps } from './bento-box.types'
import { cn } from '@/utils/cn'

export const BentoBox = ({
  size = 'medium',
  className,
  children,
  ref,
  ...props
}: BentoBoxProps) => {
  return (
    <div
      data-size={size}
      className={cn(bentoBoxVariants({ size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
