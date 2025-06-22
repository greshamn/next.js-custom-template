# Neumorphic UI Components

A collection of reusable neumorphic-styled components for React applications.

## Components

### NeumorphicCard
A container component with neumorphic styling, perfect for content sections.

```tsx
<NeumorphicCard>
  <h2>Card Content</h2>
</NeumorphicCard>
```

### NeumorphicButton
A button component with neumorphic styling and interactive states.

```tsx
<NeumorphicButton onClick={handleClick}>
  Click Me
</NeumorphicButton>
```

### NeumorphicInput
A text input component with neumorphic styling.

```tsx
<NeumorphicInput 
  placeholder="Enter text..."
  value={value}
  onChange={handleChange}
/>
```

### NeumorphicContainer
A smaller container component for grouping related content.

```tsx
<NeumorphicContainer>
  <h3>Container Content</h3>
</NeumorphicContainer>
```

## Styling System

The neumorphic styling system is built with:

1. CSS Variables (in `src/styles/themes/neumorphic.css`)
   - Base colors
   - Shadow effects
   - Gradients
   - Blur effects

2. Tailwind Configuration (in `tailwind.config.ts`)
   - Color palette
   - Shadow variants
   - Background gradients
   - Blur effects

## Usage

1. Import the components:
```tsx
import {
  NeumorphicCard,
  NeumorphicButton,
  NeumorphicInput,
  NeumorphicContainer
} from "@/components/ui/neumorphic";
```

2. Use Tailwind classes for customization:
```tsx
<NeumorphicCard className="p-8 max-w-md">
  <h2 className="text-neumorphic-text-primary text-2xl">
    Title
  </h2>
</NeumorphicCard>
```

## Available Classes

### Colors
- `text-neumorphic-text-primary`
- `text-neumorphic-text-secondary`
- `bg-neumorphic-bg`
- `bg-neumorphic-card`
- `bg-neumorphic-button`
- `border-neumorphic-border`

### Shadows
- `shadow-neumorphic-convex`
- `shadow-neumorphic-convex-sm`
- `shadow-neumorphic-convex-lg`
- `shadow-neumorphic-concave`

### Gradients
- `bg-neumorphic-gradient`

### Effects
- `backdrop-blur-neumorphic` 