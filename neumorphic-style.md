# Neumorphic Style Guide & Implementation Manual

A comprehensive guide for implementing neumorphic UI components in our React application. This guide ensures consistent, beautiful neumorphic design across all components.

## Table of Contents
1. [Design Principles](#design-principles)
2. [Theme System Architecture](#theme-system-architecture)
3. [Component Library](#component-library)
4. [Implementation Guidelines](#implementation-guidelines)
5. [Advanced Components](#advanced-components)
6. [Troubleshooting Guide](#troubleshooting-guide)
7. [Best Practices](#best-practices)

## Design Principles

### Core Neumorphic Philosophy
- **Soft, subtle depth**: Elements appear to emerge from or sink into the background
- **No harsh contrasts**: Use gentle shadows and highlights
- **Glassmorphism integration**: Semi-transparent backgrounds with backdrop blur
- **Dark shadows only**: No light shadows on top-left (eliminates harsh contrast)
- **Multi-layer shadow system**: Creates natural, gentle depth

### Visual Characteristics
- **Background**: Rich gradient backgrounds for depth
- **Shadows**: Only dark shadows positioned on bottom-right
- **Transparency**: Semi-transparent cards with backdrop blur
- **Rounded corners**: Consistent border radius system
- **Subtle animations**: Gentle hover states and progress animations

## Theme System Architecture

### File Structure
```
src/
├── styles/themes/neumorphic.css     # Core theme system
├── components/ui/neumorphic/
│   ├── index.tsx                    # Component library
│   └── README.md                    # Component documentation
├── app/globals.css                  # Theme imports
└── tailwind.config.ts               # Tailwind integration
```

### CSS Variables System
Located in `src/styles/themes/neumorphic.css`:

```css
:root {
  /* Base Colors */
  --neumorphic-bg: #1a1c20;
  --neumorphic-card: rgba(55, 60, 65, 0.8);
  --neumorphic-card-end: rgba(30, 35, 40, 0.8);
  --neumorphic-button: rgba(45, 50, 55, 0.9);
  --neumorphic-text-primary: #E0E0E0;
  --neumorphic-text-secondary: #A0A0A0;
  --neumorphic-accent: #FF9A3E;
  --neumorphic-border: #8B5CF6;

  /* Multi-layer Shadow System */
  --neumorphic-shadow-convex: 
    2px 2px 4px var(--neumorphic-shadow-light),
    4px 4px 12px var(--neumorphic-shadow-medium);
  --neumorphic-shadow-convex-sm: 
    1px 1px 2px var(--neumorphic-shadow-light),
    2px 2px 6px var(--neumorphic-shadow-medium);
  --neumorphic-shadow-convex-lg: 
    4px 4px 8px var(--neumorphic-shadow-light),
    8px 8px 24px var(--neumorphic-shadow-medium),
    16px 16px 48px var(--neumorphic-shadow-dark);

  /* Spacing & Radius */
  --neumorphic-spacing-sm: 0.5rem;
  --neumorphic-spacing-md: 1rem;
  --neumorphic-spacing-lg: 1.5rem;
  --neumorphic-spacing-xl: 2rem;
  
  --neumorphic-radius-sm: 0.75rem;
  --neumorphic-radius-md: 1.25rem;
  --neumorphic-radius-lg: 2rem;
  --neumorphic-radius-xl: 2.5rem;
}
```

## Component Library

### Core Components

#### NeumorphicBackground
Main wrapper for neumorphic pages with gradient background.
```tsx
import { NeumorphicBackground } from "@/components/ui/neumorphic";

<NeumorphicBackground className="flex items-center justify-center">
  {/* Page content */}
</NeumorphicBackground>
```

#### NeumorphicCard
Primary container with glass-like effects and multi-layer shadows.
```tsx
import { NeumorphicCard } from "@/components/ui/neumorphic";

<NeumorphicCard className="w-full max-w-4xl">
  <h2>Card Content</h2>
</NeumorphicCard>
```

#### NeumorphicButton
Interactive button with convex-to-concave hover states.
```tsx
import { NeumorphicButton } from "@/components/ui/neumorphic";

<NeumorphicButton onClick={handleClick}>
  Action Button
</NeumorphicButton>
```

#### NeumorphicIconButton
Circular icon button for toolbars and actions.
```tsx
import { NeumorphicIconButton } from "@/components/ui/neumorphic";

<NeumorphicIconButton>
  <Settings className="w-5 h-5" />
</NeumorphicIconButton>
```

#### NeumorphicProgressRing
Animated progress ring with glow effects.
```tsx
import { NeumorphicProgressRing } from "@/components/ui/neumorphic";

<NeumorphicProgressRing
  icon={TrendingUp}
  progress={75}
  color="#3B82F6"
  size={60}
  strokeWidth={3}
/>
```

### Typography Components

#### NeumorphicHeading & NeumorphicText
Typography with proper neumorphic text colors.
```tsx
import { NeumorphicHeading, NeumorphicText } from "@/components/ui/neumorphic";

<NeumorphicHeading>Main Title</NeumorphicHeading>
<NeumorphicText variant="secondary">Subtitle text</NeumorphicText>
```

## Implementation Guidelines

### 1. Creating New Neumorphic Components

#### Step 1: Base Structure
Always start with the proper foundation:
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export const NewNeumorphicComponent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Base neumorphic styles
      "bg-neumorphic-button",
      "rounded-[var(--neumorphic-radius-md)]",
      "shadow-neumorphic-convex",
      "border border-neumorphic-border/5",
      "backdrop-blur-[var(--neumorphic-blur)]",
      "text-neumorphic-text-primary",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
```

#### Step 2: Shadow Selection
Choose appropriate shadow based on hierarchy:
- `shadow-neumorphic-convex-sm` - Small elements, nested items
- `shadow-neumorphic-convex` - Standard buttons, inputs
- `shadow-neumorphic-convex-lg` - Main cards, containers
- `shadow-neumorphic-concave` - Inset elements, inputs

#### Step 3: Interactive States
Add proper hover and active states:
```tsx
className={cn(
  "transition-all duration-200",
  "hover:shadow-neumorphic-concave",
  "active:shadow-neumorphic-convex-sm",
  // ... other classes
)}
```

### 2. Spacing and Layout

#### Use CSS Variables
Always use neumorphic spacing variables for consistency:
```tsx
className={cn(
  "p-[var(--neumorphic-spacing-md)]",
  "mb-[var(--neumorphic-spacing-lg)]",
  "rounded-[var(--neumorphic-radius-lg)]"
)}
```

#### Responsive Considerations
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--neumorphic-spacing-md)]">
  {/* Responsive grid with consistent spacing */}
</div>
```

### 3. Color and Transparency

#### Background Applications
```tsx
// For cards
className="bg-neumorphic-card"

// For buttons
className="bg-neumorphic-button"

// For backgrounds
className="bg-neumorphic-bg"
```

#### Text Colors
```tsx
// Primary text
className="text-neumorphic-text-primary"

// Secondary text
className="text-neumorphic-text-secondary"

// Accent text (highlights, values)
className="text-neumorphic-accent"
```

## Advanced Components

### Goal Cards with Progress Tracking
Complete implementation for progress tracking cards:
```tsx
const GoalCard = ({ 
  icon, 
  title, 
  amount, 
  goal, 
  color, 
  progress 
}: GoalCardProps) => {
  return (
    <div className="bg-neumorphic-button p-4 rounded-[var(--neumorphic-radius-lg)] shadow-neumorphic-convex-sm border border-neumorphic-border/5 backdrop-blur-[var(--neumorphic-blur)] goal-card-enhanced">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <NeumorphicProgressRing
            icon={icon}
            progress={progress}
            color={color}
            size={52}
            strokeWidth={2.5}
          />
        </div>
        <div className="flex-grow min-w-0">
          <h2 className="text-lg font-semibold text-neumorphic-text-primary truncate mb-1">
            {title}
          </h2>
          <p className="text-sm text-neumorphic-text-secondary">
            <span className="text-neumorphic-accent font-medium">{amount}</span> / {goal}
          </p>
        </div>
      </div>
    </div>
  );
};
```

### Page Layout Pattern
Standard layout for neumorphic pages:
```tsx
export default function NeumorphicPage() {
  return (
    <NeumorphicBackground className="flex items-center justify-center">
      <NeumorphicCard className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <NeumorphicIconButton>
            <ArrowLeft className="w-5 h-5" />
          </NeumorphicIconButton>
          <h1 className="text-3xl font-bold text-neumorphic-text-primary">
            Page Title
          </h1>
          <div className="flex items-center gap-3">
            <NeumorphicIconButton>
              <Eye className="w-5 h-5" />
            </NeumorphicIconButton>
            <NeumorphicIconButton>
              <Menu className="w-5 h-5" />
            </NeumorphicIconButton>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-[var(--neumorphic-spacing-md)]">
          {/* Your content here */}
        </div>

        {/* Actions */}
        <div className="mt-8">
          <NeumorphicButton className="w-full py-4">
            Primary Action
          </NeumorphicButton>
        </div>
      </NeumorphicCard>
    </NeumorphicBackground>
  );
}
```

## Troubleshooting Guide

### Common Issues and Solutions

#### 1. Rectangular Glow Effects
**Problem**: Cards showing rectangular glow halos instead of circular progress glows.
**Solution**: 
- Ensure `.goal-card-enhanced` class is used for cards
- Verify no `.glow-blue` or `.glow-purple` classes are applied to containers
- Use SVG `drop-shadow` on circle elements only

#### 2. Lost Gradients
**Problem**: Cards appearing flat without background gradients.
**Solution**:
- Apply `.neumorphic-card-gradient` class
- Use `bg-neumorphic-card` for proper transparency
- Ensure backdrop-blur is applied

#### 3. Hard Edges
**Problem**: Components showing harsh shadows or edges.
**Solution**:
- Use only dark shadows (no light shadows)
- Apply multi-layer shadow system
- Use proper border radius variables

#### 4. CSS Conflicts
**Problem**: Neumorphic styles being overridden.
**Solution**:
- Import neumorphic.css after other theme files
- Use `!important` declarations in neumorphic.css
- Apply CSS isolation with `isolation: isolate`

### Performance Considerations

#### Filter Effects
- Use CSS `contain: layout style paint` for complex components
- Apply `isolation: isolate` to prevent filter bleeding
- Limit `drop-shadow` to SVG elements only

#### Backdrop Blur
- Test performance on lower-end devices
- Provide fallbacks for `backdrop-filter`
- Use CSS media queries for reduced motion

## Best Practices

### 1. Consistency Rules
- **Always** wrap pages in `NeumorphicBackground`
- **Always** use CSS variables for spacing and radius
- **Always** follow shadow hierarchy (lg > default > sm)
- **Never** use light shadows on top-left
- **Never** mix neumorphic shadows with other shadow systems

### 2. Accessibility
- Maintain sufficient color contrast for text
- Provide clear focus states for interactive elements
- Test with screen readers
- Respect user's motion preferences

### 3. Development Workflow
1. Start with base neumorphic component
2. Apply appropriate shadow level
3. Add proper spacing with CSS variables
4. Test interactive states
5. Verify accessibility compliance
6. Document any new patterns

### 4. Code Organization
- Keep component props minimal and focused
- Use TypeScript for prop validation
- Document complex components with examples
- Maintain consistent naming conventions

### 5. Testing Checklist
- [ ] Component renders correctly in light/dark themes
- [ ] Shadows appear only on bottom-right
- [ ] Interactive states work smoothly
- [ ] No rectangular glow artifacts
- [ ] Gradients and transparency visible
- [ ] Responsive design works across breakpoints
- [ ] Accessibility requirements met
- [ ] Performance acceptable on target devices

## Conclusion

This style guide provides a complete foundation for implementing consistent, beautiful neumorphic UI components. By following these guidelines, you'll create interfaces that are both visually stunning and highly functional.

**Key Takeaways**:
- Use the multi-layer shadow system for natural depth
- Apply CSS variables for consistency
- Isolate glow effects to prevent artifacts
- Follow the component hierarchy and patterns
- Test thoroughly across different scenarios

For additional examples and updates, refer to the component library in `src/components/ui/neumorphic/`.