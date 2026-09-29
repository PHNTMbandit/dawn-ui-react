import { type LabelProps, labelVariants } from './label.types'

export const Label = ({ className, children, ref, size, ...props }: LabelProps) => {
  return (
    <label
      className={labelVariants({ className, size })}
      data-slot="label"
      htmlFor={props.htmlFor}
      ref={ref}
      {...props}
    >
      {children}
    </label>
  )
}
