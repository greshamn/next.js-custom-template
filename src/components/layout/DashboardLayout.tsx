"use client";

import React, { useState, useEffect } from 'react';
import CurvedSidebar from '@/components/sidebar/CurvedSidebar';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FullScreenToggle } from '@/components/ui/FullScreenToggle';
import { NAVIGATION_ITEMS } from '@/lib/constants/design';

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
    <main className="flex h-screen">
      <CurvedSidebar
        isOpen={isSidebarOpen}
        onToggle={handleSidebarToggle}
        navItems={NAVIGATION_ITEMS}
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
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <FullScreenToggle />
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