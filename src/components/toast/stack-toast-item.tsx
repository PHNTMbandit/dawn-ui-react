import { Toast as BaseToast } from '@base-ui/react/toast'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningIcon,
  XIcon,
} from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { Separator } from '../separator'
import { cn } from '@/utils/cn'

import type { StackToastItemProps } from './toast.types'

export const StackToastItem = ({ className, ref, toast, ...props }: StackToastItemProps) => {
  const duration = toast.timeout ?? 10000
  const circumference = 2 * Math.PI * 14

  React.useEffect(() => {
    let frameId: number
    const start = performance.now()

    const update = (now: number) => {
      const ms = Math.min(now - start, duration)

      if (ms < duration) {
        frameId = requestAnimationFrame(update)
      }
    }

    frameId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frameId)
  }, [duration])

  const getVariantBgColour = () => {
    switch (toast.data?.variant) {
      case 'brand':
        return 'bg-brand-default'
      case 'accent':
        return 'bg-accent-default'
      case 'neutral':
        return 'bg-neutral-default'
      case 'error':
        return 'bg-error-default'
      case 'info':
        return 'bg-info-default'
      case 'success':
        return 'bg-success-default'
      case 'warning':
        return 'bg-warning-default'
      default:
        return 'bg-neutral-default'
    }
  }

  const getVariantBorderColour = () => {
    switch (toast.data?.variant) {
      case 'brand':
        return 'border-brand-border-strong'
      case 'accent':
        return 'border-accent-border-strong'
      case 'neutral':
        return 'border-neutral-border-strong'
      case 'error':
        return 'border-error-border-strong'
      case 'info':
        return 'border-info-border-strong'
      case 'success':
        return 'border-success-border-strong'
      case 'warning':
        return 'border-warning-border-strong'
      default:
        return 'border-neutral-border-strong'
    }
  }

  const getVariantIcon = () => {
    if (toast.data?.icon) {
      return <toast.data.icon weight="fill" />
    }
    switch (toast.data?.variant) {
      case 'brand':
        return <InfoIcon weight="fill" />
      case 'accent':
        return <InfoIcon weight="fill" />
      case 'neutral':
        return <InfoIcon weight="fill" />
      case 'error':
        return <WarningCircleIcon weight="fill" />
      case 'info':
        return <InfoIcon weight="fill" />
      case 'success':
        return <CheckCircleIcon weight="fill" />
      case 'warning':
        return <WarningIcon weight="fill" />
      default:
        return <InfoIcon weight="fill" />
    }
  }

  return (
    <BaseToast.Root
      className={cn(
        "absolute right-[0px] bottom-[0px] left-auto z-[calc(1000-var(--toast-index))] mr-[0px] flex h-2xl origin-bottom transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] items-center justify-center gap-xs overflow-hidden rounded-xl border bg-surface bg-clip-padding pr-sm shadow-lg select-none [--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s] after:absolute after:top-full after:left-[0px] after:w-full after:content-[''] data-ending-style:opacity-0 data-expanded:h-(--toast-height) data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))] data-limited:opacity-0 data-starting-style:transform-[translateY(150%)] data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(150%)]",
        className,
        getVariantBorderColour(),
      )}
      key={toast.id}
      ref={ref}
      toast={toast}
      {...props}
    >
      <div
        className={cn(
          'flex aspect-square size-2xl items-center justify-center [&>svg]:size-lg [&>svg]:text-on-surface-inverse',
          getVariantBgColour(),
        )}
      >
        {getVariantIcon()}
      </div>
      <BaseToast.Content
        className={
          'flex items-center justify-center gap-xs overflow-hidden pl-2xs transition-opacity duration-250 data-behind:pointer-events-none data-behind:opacity-0 data-expanded:pointer-events-auto data-expanded:opacity-100'
        }
      >
        <div>
          <BaseToast.Title className={'style-text-strong--1'} />
          <BaseToast.Description
            className={'style-text-prose--1 whitespace-nowrap text-on-surface-variant'}
          />
        </div>
        <div className="ml-xl flex h-lg grow items-center justify-center gap-xs">
          <BaseToast.Action
            render={(e) => (
              <Button
                data-testid="toast-action-button"
                onClick={e.onClick}
                size={'small'}
                tone={toast.data?.variant}
                variant={'soft'}
              >
                {e.children}
              </Button>
            )}
          />
          {toast.actionProps && (
            <Separator variant={'strong'} orientation="vertical" weight={'thinnest'} />
          )}
          <BaseToast.Close
            aria-label="Close"
            className="relative flex size-sm items-center justify-center rounded-full bg-transparent p-xs text-on-surface-variant transition-colors hover:cursor-pointer hover:bg-error-container hover:text-error-on-container"
          >
            <span className="pointer-events-none absolute inset-[0px] z-10 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 32 32" className="block -rotate-90">
                <>
                  <style>{`
                      @keyframes toast-drain-${toast.id} {
                        from { stroke-dashoffset: 0; }
                        to   { stroke-dashoffset: ${circumference}; }
                      }
                `}</style>
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={circumference}
                    strokeLinecap="round"
                    className="text-error-border-strong"
                    style={{
                      animation: `toast-drain-${toast.id} ${duration}ms linear forwards`,
                    }}
                  />
                </>
              </svg>
            </span>

            <XIcon className="size-sm shrink-0" weight="bold" />
          </BaseToast.Close>
        </div>
      </BaseToast.Content>
      {/* <div className="absolute bottom-[0px] left-[0px] h-2xs w-full border-t border-outline bg-surface-dim inset-shadow-xs">
        <div
          className={cn('h-full', getVariantBgColour())}
          style={{ width: `${progress * 100}%` }}
        />
      </div> */}
    </BaseToast.Root>
  )
}
