'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { modalTheme } from './theme'

const ModalIcon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(modalTheme.icon, className)} ref={ref}>
        {children}
      </div>
    )
  },
)

ModalIcon.displayName = 'Modal.Icon'

export { ModalIcon }
