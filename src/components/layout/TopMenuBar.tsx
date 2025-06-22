"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { FullScreenToggle } from '@/components/ui/FullScreenToggle';
import SidebarThemeToggle from '@/components/ui/SidebarThemeToggle';

interface TopMenuBarProps {
  isSidebarOpen: boolean;
  isMobile: boolean;
}

const TopMenuBar: React.FC<TopMenuBarProps> = ({ isSidebarOpen, isMobile }) => {
  const { theme } = useTheme();

  return (
    <div 
      className={cn(
        'topbar-neumorphic-container h-16 flex items-center justify-end px-6',
        theme, // Use main theme (not inverse)
        // Adjust positioning based on sidebar state
        !isMobile && (isSidebarOpen ? 'ml-72' : 'ml-20'),
        // Full width on mobile
        isMobile && 'ml-0'
      )}
    >
      <div className="flex items-center gap-4">
        <SidebarThemeToggle />
        <ThemeSwitcher />
        <FullScreenToggle />
      </div>
    </div>
  );
};

export default TopMenuBar; 