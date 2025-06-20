"use client";

import React, { useState, useEffect } from 'react';
import CurvedSidebar from '@/components/sidebar/CurvedSidebar';
import { NavigationItem, IconName } from '@/types';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Menu, ChevronLeft, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems: NavigationItem[] = [
  { id: '1', title: 'Dashboard', icon: 'LayoutDashboard', href: '/dashboard' },
  {
    id: '2',
    title: 'Vetting Center',
    icon: 'ShieldCheck',
    children: [
      { id: '2.1', title: 'New Vetting Request', icon: 'PlusCircle', href: '/vetting/new' },
      { id: '2.2', title: 'Active Requests', icon: 'Loader', href: '/vetting/active' },
      { id: '2.3', title: 'Completed Vettings', icon: 'CheckCircle', href: '/vetting/completed' },
    ],
  },
  {
    id: '3',
    title: 'Suppliers',
    icon: 'Building2',
    children: [
      { id: '3.1', title: 'Supplier List', icon: 'List', href: '/suppliers' },
      { id: '3.2', title: 'Add New Supplier', icon: 'PlusCircle', href: '/suppliers/add' },
    ],
  },
  {
    id: '4',
    title: 'Individuals',
    icon: 'Users',
    children: [
      { id: '4.1', title: 'Individual List', icon: 'List', href: '/individuals' },
      { id: '4.2', title: 'Add New Individual', icon: 'PlusCircle', href: '/individuals/add' },
    ],
  },
  {
    id: '5',
    title: 'Reporting & Insights',
    icon: 'TrendingUp',
    children: [
      { id: '5.1', title: 'Standard Reports', icon: 'FileText', href: '/reporting' },
      { id: '5.2', title: 'Generate Custom Report', icon: 'FilePlus', href: '/reporting/custom' },
      { id: '5.3', title: 'Risk Analytics Dashboard', icon: 'ShieldAlert', href: '/reporting/analytics' },
    ],
  },
  {
    id: '6',
    title: 'Field Operations',
    icon: 'Compass',
    children: [
      { id: '6.1', title: 'Verification Dashboard', icon: 'Map', href: '/field-operations' },
      { id: '6.2', title: 'Assign New Verification Task', icon: 'ClipboardPlus', href: '/field-operations/assign' },
    ],
  },
  { type: 'separator', id: 'separator-1' },
  {
    id: '7',
    title: 'Administration',
    icon: 'Settings',
    children: [
      { id: '7.1', title: 'User & Access Management', icon: 'Users', href: '/admin/users' },
      { id: '7.2', title: 'Vetting Configuration', icon: 'FileCog', href: '/admin/vetting-config' },
      { id: '7.3', title: 'System & Company Configuration', icon: 'Building', href: '/admin/system-config' },
      { id: '7.4', title: 'Billing & Subscription', icon: 'CreditCard', href: '/admin/billing' },
    ],
  },
  {
    id: '8',
    title: 'My Account',
    icon: 'User',
    children: [
      { id: '8.1', title: 'Profile Settings', icon: 'Cog', href: '/account/profile' },
      { id: '8.2', title: 'Security', icon: 'Lock', href: '/account/security' },
      { id: '8.3', title: 'Notification Preferences', icon: 'Bell', href: '/account/notifications' },
    ],
  },
  {
    id: '9',
    title: 'Help Center',
    icon: 'HelpCircle',
    children: [
      { id: '9.1', title: 'Knowledge Base & FAQs', icon: 'BookOpen', href: '/help/kb' },
      { id: '9.2', title: 'Contact Support', icon: 'Mail', href: '/help/support' },
    ],
  },
];

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < 768;
      setIsMobile(isMobileScreen);
      
      if (isMobileScreen) {
        // On mobile, sidebar should be closed by default
        setIsSidebarOpen(false);
      } else {
        // On desktop, sidebar should be open by default
        setIsSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex h-screen p-2">
      <CurvedSidebar
        isOpen={isSidebarOpen}
        onToggle={handleSidebarToggle}
        navItems={navItems}
        isMobile={isMobile}
      />
      {isMobile && isSidebarOpen && (
        <div className="mobile-overlay" onClick={handleSidebarToggle} />
      )}
      <div className={cn(
        "flex-1 flex flex-col p-4 md:p-8 overflow-auto text-dashboard-foreground",
        isMobile && "main-content-mobile"
      )}>
        <div className="flex justify-between md:justify-end items-center w-full mb-8">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={handleSidebarToggle} className="glow-subtle-blue text-dashboard-foreground">
              <Menu />
            </Button>
          )}
          <div className="glow-subtle-blue rounded-full">
            <ThemeSwitcher />
          </div>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout; 