import React from 'react'
import { cn } from '@/lib/utils'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

interface LayoutProps {
  children: React.ReactNode
  className?: string
  showNotifications?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  showNotifications = true
}) => {
  return (
    <div className={cn(
      "min-h-screen bg-gradient-recehtok flex overflow-hidden",
      className
    )}>
      {/* Sidebar - Fixed width */}
      <Sidebar />
      
      {/* Main Content Area - Flex grow */}
      <MainContent showNotifications={showNotifications}>
        {children}
      </MainContent>
      
      {/* Notifications Panel - Optional, right side */}
      {showNotifications && (
        <div className="hidden xl:block w-80 flex-shrink-0">
          <div className="h-full p-6">
            <div className="glassmorphic h-full rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Notifications
              </h3>
              <div className="space-y-3">
                {/* Placeholder notifications */}
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-glow-cyan rounded-full mt-2 glow-pulse"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-300">
                          Notification {item} - Sample alert message
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {item} minutes ago
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Layout 