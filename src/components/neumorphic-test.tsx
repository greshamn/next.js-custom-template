"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Car, Eye, Home, Laptop, Menu, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Reusable Neumorphic Components ---

const NeumorphicCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6 rounded-3xl bg-gradient-to-b from-card-bg-neo to-card-bg-neo-end",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
NeumorphicCard.displayName = "NeumorphicCard";

const NeumorphicButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "px-6 py-4 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center gap-2",
      "bg-card-bg-neo text-text-primary-neo",
      "shadow-neumorphic-convex hover:shadow-neumorphic-convex-sm active:shadow-neumorphic-concave",
      "border border-transparent",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
NeumorphicButton.displayName = "NeumorphicButton";

// --- Goal Card Component ---

const GoalCard = ({ icon, title, amount, goal, color }: { icon: React.ElementType; title: string; amount: string; goal: string; color: string }) => {
  const Icon = icon;
  return (
    <div className="bg-button-bg-neo p-4 rounded-2xl flex items-center space-x-4 shadow-neumorphic-convex-sm">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-card-bg-neo shadow-neumorphic-concave">
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-text-primary-neo">{title}</h2>
        <p className="text-sm text-text-secondary-neo">
          <span className="font-semibold text-accent-glow-neo">{amount}</span> / {goal}
        </p>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const NeumorphicTestPage = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center">
      <NeumorphicCard 
        className="bg-[rgba(45,49,53,0.5)]"
        style={{ '--color-light-shadow-neo': 'transparent' } as React.CSSProperties}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button className="p-3 rounded-full bg-button-bg-neo shadow-neumorphic-convex active:shadow-neumorphic-concave">
            <ArrowLeft className="w-5 h-5 text-text-primary-neo" />
          </button>
          <h1 className="text-3xl font-bold text-text-primary-neo">Savings</h1>
          <div className="flex items-center gap-2">
            <button className="p-3 rounded-full bg-button-bg-neo shadow-neumorphic-convex active:shadow-neumorphic-concave">
              <Eye className="w-5 h-5 text-text-primary-neo" />
            </button>
            <button className="p-3 rounded-full bg-button-bg-neo shadow-neumorphic-convex active:shadow-neumorphic-concave">
              <Menu className="w-5 h-5 text-text-primary-neo" />
            </button>
          </div>
        </div>

        {/* Total Saved */}
        <div className="text-center mb-8">
            <p className="text-text-secondary-neo text-lg">Already Saved:</p>
            <p className="text-5xl font-bold text-text-primary-neo mt-1">$6,307.99</p>
        </div>

        {/* Savings Goals */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <GoalCard icon={Plane} title="Trip to Paris" amount="$5,000" goal="$5,000" color="#FF9A3E" />
          <GoalCard icon={Car} title="New Car" amount="$6,000" goal="$12,000" color="#3B82F6" />
          <GoalCard icon={Home} title="New Apartment" amount="$150,000" goal="$600,000" color="#8B5CF6" />
          <GoalCard icon={Laptop} title="New MacBook" amount="$500" goal="$5,000" color="#10B981" />
        </div>

        {/* Create Goal Button */}
        <div className="mt-8">
          <NeumorphicButton className="w-full bg-button-bg-neo border border-[var(--color-button-border-neo)]">
            <span>Create new goal</span>
            <ArrowRight className="w-5 h-5" />
          </NeumorphicButton>
        </div>

      </NeumorphicCard>
    </div>
  );
};

export default NeumorphicTestPage; 