import * as React from "react";
import { cn } from "@/lib/utils";

// Base Neumorphic Container (for page/section background)
export const NeumorphicBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "min-h-screen w-full",
      "bg-neumorphic-bg-gradient",
      "p-[var(--neumorphic-spacing-lg)]",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
NeumorphicBackground.displayName = "NeumorphicBackground";

// Base Neumorphic Card
export const NeumorphicCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-[var(--neumorphic-spacing-md)]",
      "rounded-[var(--neumorphic-radius-lg)]",
      "bg-neumorphic-card",
      "shadow-neumorphic-convex-lg",
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
NeumorphicCard.displayName = "NeumorphicCard";

// Neumorphic Button
export const NeumorphicButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "px-[var(--neumorphic-spacing-md)] py-[var(--neumorphic-spacing-sm)]",
      "rounded-[var(--neumorphic-radius-md)]",
      "bg-neumorphic-button",
      "shadow-neumorphic-convex",
      "border border-neumorphic-border/5",
      "text-neumorphic-text-primary",
      "transition-all duration-200",
      "hover:shadow-neumorphic-concave",
      "active:shadow-neumorphic-convex-sm",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "backdrop-blur-[var(--neumorphic-blur)]",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
NeumorphicButton.displayName = "NeumorphicButton";

// Neumorphic Input
export const NeumorphicInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "px-[var(--neumorphic-spacing-md)] py-[var(--neumorphic-spacing-sm)]",
      "rounded-[var(--neumorphic-radius-md)]",
      "bg-neumorphic-button",
      "shadow-neumorphic-concave",
      "border border-neumorphic-border/5",
      "text-neumorphic-text-primary",
      "placeholder:text-neumorphic-text-secondary",
      "focus:outline-none focus:ring-2 focus:ring-neumorphic-accent/20",
      "backdrop-blur-[var(--neumorphic-blur)]",
      "w-full",
      className
    )}
    {...props}
  />
));
NeumorphicInput.displayName = "NeumorphicInput";

// Neumorphic Icon Button
export const NeumorphicIconButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "p-[var(--neumorphic-spacing-md)]",
      "rounded-full",
      "bg-neumorphic-button",
      "shadow-neumorphic-convex",
      "border border-neumorphic-border/5",
      "text-neumorphic-text-primary",
      "transition-all duration-200",
      "hover:shadow-neumorphic-concave",
      "active:shadow-neumorphic-convex-sm",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "backdrop-blur-[var(--neumorphic-blur)]",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
NeumorphicIconButton.displayName = "NeumorphicIconButton";

// Neumorphic Text
export const NeumorphicText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
  }
>(({ className, variant = "primary", size = "md", children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-neumorphic-text-primary",
      variant === "secondary" && "text-neumorphic-text-secondary",
      size === "sm" && "text-sm",
      size === "lg" && "text-lg",
      className
    )}
    {...props}
  >
    {children}
  </p>
));
NeumorphicText.displayName = "NeumorphicText";

// Neumorphic Heading
export const NeumorphicHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-3xl font-bold",
      "text-neumorphic-text-primary",
      className
    )}
    {...props}
  >
    {children}
  </h1>
));
NeumorphicHeading.displayName = "NeumorphicHeading";

// Neumorphic Container
export const NeumorphicContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-8 rounded-[40px]",
      "bg-neumorphic-bg",
      "shadow-neumorphic-convex-lg",
      "border border-neumorphic-border/5",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
NeumorphicContainer.displayName = "NeumorphicContainer"; 