import { cn } from '@/utils/cn'

type CodeBlockHeaderProps = React.ComponentProps<'div'>

export const CodeBlockHeader = ({ className, children, ref, ...props }: CodeBlockHeaderProps) => {
  return (
    <div
      className={cn('flex items-center justify-between border-b border-border p-2xs', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
