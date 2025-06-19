import React from 'react'
import { cn } from '@/lib/utils'

interface MainContentProps {
  children: React.ReactNode
  className?: string
  showNotifications?: boolean
}

const MainContent: React.FC<MainContentProps> = ({
  children,
  className,
  showNotifications = true
}) => {
  return (
    <main className={cn(
      "flex-1 min-h-screen overflow-y-auto",
      showNotifications ? "xl:pr-0" : "pr-6",
      className
    )}>
      {/* Main Content Container */}
      <div className="h-full p-6 lg:p-8">
        <div className="max-w-full mx-auto">
          {children}
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-glow-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-glow-magenta/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-glow-orange/5 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>
    </main>
  )
}

export default MainContent 