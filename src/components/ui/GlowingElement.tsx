import React from 'react'
import { cn } from '@/lib/utils'

interface GlowingElementProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'cyan' | 'magenta' | 'orange' | 'purple' | 'blue'
  intensity?: 'low' | 'medium' | 'high'
  variant?: 'text' | 'border' | 'background'
}

const GlowingElement: React.FC<GlowingElementProps> = ({
  children,
  className,
  glowColor = 'cyan',
  intensity = 'medium',
  variant = 'text'
}) => {
  const baseClasses = 'relative'
  
  const glowColorClasses = {
    cyan: {
      text: 'text-glow-cyan',
      border: 'border-glow-cyan',
      background: 'bg-glow-cyan/10',
      shadow: 'shadow-glow-cyan'
    },
    magenta: {
      text: 'text-glow-magenta',
      border: 'border-glow-magenta', 
      background: 'bg-glow-magenta/10',
      shadow: 'shadow-glow-magenta'
    },
    orange: {
      text: 'text-glow-orange',
      border: 'border-glow-orange',
      background: 'bg-glow-orange/10',
      shadow: 'shadow-glow-orange'
    },
    purple: {
      text: 'text-purple-400',
      border: 'border-purple-400',
      background: 'bg-purple-400/10',
      shadow: 'shadow-purple-400'
    },
    blue: {
      text: 'text-blue-400',
      border: 'border-blue-400',
      background: 'bg-blue-400/10',
      shadow: 'shadow-blue-400'
    }
  }
  
  const intensityClasses = {
    low: 'glow-low',
    medium: 'glow-medium',
    high: 'glow-high'
  }
  
  const variantClasses = {
    text: glowColorClasses[glowColor].text,
    border: `border ${glowColorClasses[glowColor].border}`,
    background: glowColorClasses[glowColor].background
  }
  
  return (
    <div 
      className={cn(
        baseClasses,
        variantClasses[variant],
        intensityClasses[intensity],
        className
      )}
    >
      {children}
    </div>
  )
}

export default GlowingElement 