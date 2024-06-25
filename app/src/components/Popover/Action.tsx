'use client'
import { useMergeRefs } from '@floating-ui/react'
import { HTMLProps, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'
import { usePopoverContext } from './Context'

export interface PopoverTriggerProps {
  asChild?: boolean
}

export const PopoverTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement> & PopoverTriggerProps>(
  function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
    const context = usePopoverContext()
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

    if (asChild && isValidElement(children)) {
      return cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          'data-state': context.open ? 'open' : 'closed',
        }),
      )
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'rounded-xl border border-metal-400 p-2 text-metal-400 dark:border-metal-900 dark:text-metal-300',
          props.className,
        )}
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}>
        {children}
      </button>
    )
  },
)

PopoverTrigger.displayName = 'Popover.Action'
