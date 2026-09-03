import { Button as BaseButton } from '@base-ui/react'
import { type ButtonProps, buttonVariants } from './button.types'
import { cn } from '@/utils/cn'

export const Button = ({ tone, variant, size, className, children, ...props }: ButtonProps) => {
  return (
    <BaseButton
      data-size={size}
      className={cn(buttonVariants({ tone, variant, size, className }))}
      {...props}
    >
      {children}
    </BaseButton>
  )
}
