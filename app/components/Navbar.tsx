'use client'
import { usePathname } from 'next/navigation'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-metal-100 bg-white dark:border-metal-800  ${pathname === '/' ? 'dark:bg-[#0D1015]' : 'dark:bg-metal-900'}`}>
      <div className="relative mx-auto max-w-7xl px-6 2xl:px-0">
        <nav className="flex items-center justify-between py-4">
          <DesktopMenu />
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
