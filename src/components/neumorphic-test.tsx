"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Car, Eye, Home, Laptop, Menu, Plane } from "lucide-react";
import { NeumorphicCard, NeumorphicButton } from "@/components/ui/neumorphic";

// --- Goal Card Component ---
const GoalCard = ({ icon, title, amount, goal, color }: { icon: React.ElementType; title: string; amount: string; goal: string; color: string }) => {
  const Icon = icon;
  return (
    <div className="bg-[rgba(26,27,30,0.5)] p-4 rounded-2xl flex items-center space-x-4 shadow-[var(--shadow-neumorphic-convex-sm)]">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[rgba(33,36,40,0.5)] shadow-[var(--shadow-neumorphic-concave)]">
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-neumorphic-text-primary">{title}</h2>
        <p className="text-sm text-neumorphic-text-secondary">
          <span className="text-[#FF9A3E]">{amount}</span> / {goal}
        </p>
      </div>
    </div>
  );
};

// --- Main Page Component ---
const NeumorphicTestPage = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center">
      <NeumorphicCard className="w-full max-w-4xl bg-[rgba(33,36,40,0.5)]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button className="p-3 rounded-full bg-[rgba(26,27,30,0.5)] shadow-[var(--shadow-neumorphic-convex)] active:shadow-[var(--shadow-neumorphic-concave)]">
            <ArrowLeft className="w-5 h-5 text-neumorphic-text-primary" />
          </button>
          <h1 className="text-3xl font-bold text-neumorphic-text-primary">Savings</h1>
          <div className="flex items-center gap-2">
            <button className="p-3 rounded-full bg-[rgba(26,27,30,0.5)] shadow-[var(--shadow-neumorphic-convex)] active:shadow-[var(--shadow-neumorphic-concave)]">
              <Eye className="w-5 h-5 text-neumorphic-text-primary" />
            </button>
            <button className="p-3 rounded-full bg-[rgba(26,27,30,0.5)] shadow-[var(--shadow-neumorphic-convex)] active:shadow-[var(--shadow-neumorphic-concave)]">
              <Menu className="w-5 h-5 text-neumorphic-text-primary" />
            </button>
          </div>
        </div>

        {/* Total Saved */}
        <div className="text-center mb-8">
          <p className="text-neumorphic-text-secondary text-lg">Already Saved:</p>
          <p className="text-5xl font-bold text-neumorphic-text-primary mt-1">$6,307.99</p>
        </div>

        {/* Savings Goals */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <GoalCard icon={Plane} title="Trip to Paris" amount="$5,000" goal="$5,000" color="#FF9A3E" />
          <GoalCard icon={Car} title="New Car" amount="$6,000" goal="$12,000" color="var(--glow-blue)" />
          <GoalCard icon={Home} title="New Apartment" amount="$150,000" goal="$600,000" color="var(--glow-purple)" />
          <GoalCard icon={Laptop} title="New MacBook" amount="$500" goal="$5,000" color="#10B981" />
        </div>

        {/* Create Goal Button */}
        <div className="mt-8">
          <NeumorphicButton className="w-full bg-[rgba(26,27,30,0.5)] text-neumorphic-text-primary hover:shadow-[var(--shadow-neumorphic-concave)] active:shadow-[var(--shadow-neumorphic-convex-sm)] flex items-center justify-center gap-2">
            <span>Create new goal</span>
            <ArrowRight className="w-5 h-5" />
          </NeumorphicButton>
        </div>
      </NeumorphicCard>
    </div>
  );
};

export default NeumorphicTestPage; 