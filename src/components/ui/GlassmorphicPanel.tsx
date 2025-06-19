import React from 'react'
import { cn } from '@/lib/utils'

interface GlassmorphicPanelProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'notification' | 'card'
  size?: 'sm' | 'md' | 'lg' | 'full'
}

const GlassmorphicPanel: React.FC<GlassmorphicPanelProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md'
}) => {
  const baseClasses = 'backdrop-blur-lg border rounded-xl relative overflow-hidden'
  
  const variantClasses = {
    default: 'bg-glassmorphic-bg border-glassmorphic-border',
    notification: 'bg-white/10 border-white/20 shadow-lg',
    card: 'bg-white/5 border-white/10 shadow-xl'
  }
  
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    full: 'p-8'
  }
  
  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {/* Subtle gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default GlassmorphicPanel 