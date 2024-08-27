'use client'
import {
  Placement,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  useTransitionStyles,
} from '@floating-ui/react'
import { createContext, useContext, useMemo, useRef, useState } from 'react'

export interface DropdownOptions {
  showArrow?: boolean
  placement?: Placement
  trigger?: 'hover' | 'focus' | 'click'
}

export function useDropdown({ placement = 'bottom', trigger = 'hover', showArrow = false }: DropdownOptions) {
  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const data = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({
        element: showArrow ? arrowRef : null,
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  const context = data.context
  const { isMounted, styles } = useTransitionStyles(context)

  const hover = useHover(context, {
    enabled: trigger === 'hover',
    handleClose: safePolygon(),
  })
  const focus = useFocus(context, { enabled: trigger === 'focus' })
  const click = useClick(context, { enabled: trigger === 'click' })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'menu' })

  const interactions = useInteractions([focus, click, hover, role, dismiss])

  return useMemo(
    () => ({ ...interactions, ...data, context, isOpen, arrowRef, showArrow, isMounted, styles }),
    [interactions, data, isOpen, context, showArrow, isMounted, styles],
  )
}

type ContextType = ReturnType<typeof useDropdown> | null

export const DropdownContext = createContext<ContextType>(null)

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)

  if (context == null) {
    throw new Error('Dropdown components must be wrapped in <Dropdown />')
  }

  return context
}
