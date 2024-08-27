'use client'
import { AnimatePresence, MotionProps, Variants, motion } from 'framer-motion'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useNotificationContext } from './NotificationContext'
import { NotificationPortal } from './NotificationPortal'

export type NotificationContentProps = HTMLAttributes<HTMLDivElement> & MotionProps

interface VariantsProps {
  'top-left': Variants
  'top-right': Variants
  'bottom-left': Variants
  'bottom-right': Variants
  center: Variants
}

const contentTheme = {
  position: {
    'top-left': 'top-5 left-5',
    'top-right': 'top-5 right-5',
    'bottom-left': 'bottom-5 left-5',
    'bottom-right': 'bottom-5 right-5',
    center: 'inset-x-0 top-5 mx-auto',
  },
}

const NotificationDirection: VariantsProps = {
  'top-left': {
    initial: { opacity: 0, y: '-100%', scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, type: 'spring', damping: 30, stiffness: 500 },
    },
    exit: { opacity: 0, x: '-100%' },
  },
  'top-right': {
    initial: { opacity: 0, y: '-100%', scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, type: 'spring', damping: 30, stiffness: 500 },
    },
    exit: { opacity: 0, x: '100%' },
  },
  'bottom-left': {
    initial: { opacity: 0, y: '100%', scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, type: 'spring', damping: 30, stiffness: 500 },
    },
    exit: { opacity: 0, x: '-100%' },
  },
  'bottom-right': {
    initial: { opacity: 0, y: '100%', scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, type: 'spring', damping: 30, stiffness: 500 },
    },
    exit: { opacity: 0, x: '100%' },
  },
  center: {
    initial: { opacity: 0, y: '-100%', scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, type: 'spring', damping: 30, stiffness: 500 },
    },
    exit: { opacity: 0, y: '-100%' },
  },
}

const NotificationContent = forwardRef<HTMLDivElement, NotificationContentProps>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { position = 'bottom-right', isOpen } = useNotificationContext()
    return (
      <AnimatePresence>
        {isOpen && (
          <NotificationPortal>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={NotificationDirection[position]}
              {...props}
              className={cn(
                'notification-content fixed max-w-sm rounded-xl border border-metal-100 bg-white p-6 dark:border-metal-800 dark:bg-metal-900',
                contentTheme.position[position],
                className,
              )}
              ref={ref}>
              {children}
            </motion.div>
          </NotificationPortal>
        )}
      </AnimatePresence>
    )
  },
)

NotificationContent.displayName = 'NotificationContent'

export { NotificationContent }
