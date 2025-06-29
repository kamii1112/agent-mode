import { useAppContext } from '@/context/app-context'
import { BottomNavBar, type NavItem } from './bottom-nav-bar'
import type { PropsWithChildren } from 'react';
import { Home, Notebook, Search, User } from 'lucide-react';
import { Toaster } from '../ui/sonner';
import { Header } from './header';

function Layout({ header, headerIcon, children }: PropsWithChildren<{ header?: string, headerIcon?: React.ReactNode }>) {
  const { setActiveTab, activeTab } = useAppContext();

  const navItems: NavItem[] = [
    { label: 'Home', icon: <Home />, href: '/', value: 'home' },
    { label: 'Search', icon: <Search />, href: '/search', value: 'search' },
    { label: 'Profile', icon: <User />, href: '/profile', value: 'profile' },
    { label: 'All Notes', icon: <Notebook />, href: '/all-notes', value: 'all-notes' },
  ]

  return (
    <div className="flex flex-col h-screen">
      {header && (
        <Header
          title={header}
          icon={headerIcon}
        />

      )}

      <div className='mt-14'>{children}</div>
      <Toaster />
      <BottomNavBar items={navItems} active={activeTab} setActive={setActiveTab} />
    </div>
  )
}

export default Layout