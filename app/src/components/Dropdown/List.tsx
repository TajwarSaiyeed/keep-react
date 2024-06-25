'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export const DropdownList = forwardRef<HTMLUListElement, HTMLProps<HTMLUListElement>>(function List(props, ref) {
  return (
    <ul {...props} ref={ref} className={cn(props.className)}>
      {props.children}
    </ul>
  )
})
DropdownList.displayName = 'Dropdown.List'
