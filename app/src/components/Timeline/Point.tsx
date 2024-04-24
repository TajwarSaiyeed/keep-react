'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export const Point = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn('absolute -left-[9px] h-4 w-4 rounded-full border border-white bg-metal-200', className)}
        ref={ref}>
        {children}
      </div>
    )
  },
)

Point.displayName = 'Timeline.Point'
