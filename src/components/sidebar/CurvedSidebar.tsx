"use client";

// CurvedSidebar component placeholder
// Inspired by the unique curved right edge from Consilio-style_dashboard.png
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { CurvedSidebarProps, NavigationItem, IconName } from '@/types';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import Icon from '@/components/ui/Icon';
import { CURVED_SIDEBAR } from '@/lib/constants/design';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const NavItem: React.FC<{
  item: NavigationItem;
  isOpen: boolean;
  isMobile: boolean;
}> = ({ item, isOpen, isMobile }) => {
  const pathname = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  if (item.type === 'separator') {
    return <hr className="my-2 border-sidebar-foreground/20" />;
  }

  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || (hasChildren && item.children?.some(child => child.href === pathname));

  const handleToggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  if (hasChildren) {
    return (
      <>
        <button
          onClick={handleToggleSubMenu}
          aria-expanded={isSubMenuOpen}
          className={cn(
            'flex items-center w-full gap-3 rounded-lg px-3 py-2 transition-all',
            isActive ? 'nav-item-active' : 'text-sidebar-foreground hover:bg-sidebar-active/20',
            !isOpen && !isMobile ? 'justify-center' : 'justify-between'
          )}
        >
          <div className={cn('flex items-center gap-3', !isOpen && !isMobile && 'justify-center')}>
            <Icon name={item.icon as IconName} className="h-5 w-5 flex-shrink-0 text-sidebar-foreground" />
            <span className={cn('text-sm font-medium transition-all duration-300 text-sidebar-foreground', isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden')}>
              {item.title}
            </span>
          </div>
          {isOpen && <ChevronDown className={cn('h-4 w-4 transition-transform flex-shrink-0 text-sidebar-foreground', isSubMenuOpen && 'rotate-180')} />}
        </button>
        {isSubMenuOpen && isOpen && (
          <ul className="pl-8 pt-1 space-y-1">
            {item.children?.map(child => (
              <li key={child.id}>
                <Link
                  href={child.href || '#'}
                  aria-current={pathname === child.href ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 transition-all text-sm',
                    pathname === child.href ? 'nav-item-active' : 'text-sidebar-foreground/80 hover:text-sidebar-foreground'
                  )}
                >
                  <Icon name={child.icon as IconName} className="h-4 w-4 text-sidebar-foreground" />
                  <span className="text-sidebar-foreground">{child.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }

  return (
    <Link
      href={item.href || '#'}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 transition-all',
        isActive ? 'nav-item-active' : 'text-sidebar-foreground hover:bg-sidebar-active/20',
        !isOpen && !isMobile && 'justify-center'
      )}
    >
      <Icon name={item.icon as IconName} className="h-5 w-5 flex-shrink-0 text-sidebar-foreground" />
      <span className={cn('text-sm font-medium transition-all duration-300 text-sidebar-foreground', isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden')}>
        {item.title}
      </span>
    </Link>
  );
};

const CurvedSidebar: React.FC<CurvedSidebarProps> = ({
  isOpen,
  onToggle,
  navItems,
  isMobile,
}) => {
  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="sidebar-clip-path" clipPathUnits="objectBoundingBox">
            <path d="M0.08,0 H1 V1 H0.08 C0,1 0,1 0,0.92 V0.08 C0,0 0,0 0.08,0 Z" />
          </clipPath>
        </defs>
      </svg>
      <aside
        className={cn(
          'curved-sidebar transition-all duration-300 ease-in-out flex flex-col',
          // Desktop behavior
          !isMobile && (isOpen ? 'w-72' : 'w-20'),
          // Mobile behavior - always w-72 but use transform to hide/show
          isMobile && 'w-72',
          // Mobile specific classes for proper hide/show behavior
          isMobile && isOpen && 'mobile-sidebar-open',
          isMobile && !isOpen && 'mobile-sidebar-hidden'
        )}
      >
        <div className="p-4 flex flex-col h-full">
          <div className={cn('flex items-center mb-8 px-2', isOpen ? 'justify-between' : 'justify-center')}>
            <h1 className={cn('text-2xl font-bold transition-all duration-300 text-sidebar-foreground', isOpen ? 'opacity-100' : 'hidden')}>
              VETTPRO
            </h1>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onToggle} 
              className="sidebar-toggle-button"
            >
              <ChevronLeft className={cn('transition-transform duration-300 text-sidebar-foreground w-4 h-4', !isMobile && !isOpen && 'rotate-180')} />
            </Button>
          </div>
          <nav className="flex-1" role="navigation" aria-label="Main Navigation">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavItem item={item} isOpen={isOpen} isMobile={isMobile ?? false} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default CurvedSidebar; 