import { useCodeBlock } from './code-block'
import { cn } from '@/utils/cn'

type CodeBlockWindowProps = React.ComponentProps<'div'>

export const CodeBlockWindow = ({ className, children, ref, ...props }: CodeBlockWindowProps) => {
  const { currentValue } = useCodeBlock()

  return (
    <div
      className={cn(
        'relative rounded-lg px-md py-sm style-text-prose-0 text-on-surface',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      {currentValue.content}
    </div>
  )
}
