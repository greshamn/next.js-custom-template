import React from 'react'
import { cn } from '@/lib/utils'
import { Search, User, Settings, Home, Users, FileText, BarChart3, MapPin, Shield, HelpCircle } from 'lucide-react'

interface SidebarProps {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // Placeholder navigation items
  const navigationItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: FileText, label: 'Vetting Center' },
    { icon: Users, label: 'Suppliers' },
    { icon: User, label: 'Individuals' },
    { icon: BarChart3, label: 'Reporting & Insights' },
    { icon: MapPin, label: 'Field Operations' },
    { icon: Shield, label: 'Administration' },
    { icon: Settings, label: 'My Account' },
    { icon: HelpCircle, label: 'Help Center' },
  ]

  return (
    <div className={cn(
      "w-72 h-screen bg-dark-sidebar flex-shrink-0 relative",
      className
    )}>
      {/* Curved Edge SVG Overlay */}
      <div className="absolute top-0 right-0 h-full w-8 overflow-hidden">
        <svg
          className="h-full w-full"
          viewBox="0 0 32 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 0 Q32 400 0 800 L0 800 L0 0 Z"
            fill="#1A103E"
            className="drop-shadow-lg"
          />
        </svg>
      </div>

      {/* Sidebar Content */}
      <div className="relative z-10 h-full flex flex-col p-6">
        {/* Logo Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-glow-cyan to-glow-magenta rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">VettPro</h1>
              <p className="text-xs text-gray-400">Secure Vetting Platform</p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-glow-cyan/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <li key={index}>
                  <button
                    className={cn(
                      "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 text-left",
                      item.active
                        ? "bg-glow-cyan/20 text-glow-cyan shadow-glow-cyan"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-glow-orange to-glow-magenta rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 