// Design constants for VETTPRO dashboard
// Based on Consilio-style_dashboard.png and Recehtok-style_dashboard.png

export const COLORS = {
  // Dark theme colors from Recehtok-style
  dark: {
    background: '#1A1D2B',
    sidebar: '#111827',
    card: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#9CA3AF',
  },
  
  // Light theme colors
  light: {
    background: '#FFFFFF',
    sidebar: '#F8FAFC',
    card: '#FFFFFF',
    text: '#111827',
    textSecondary: '#6B7280',
  },
  
  // Accent colors for glow effects (Recehtok-style)
  accent: {
    blue: '#3B82F6',
    purple: '#8B5CF6',
    cyan: '#06B6D4',
    pink: '#EC4899',
  }
};

export const CURVED_SIDEBAR = {
  // SVG path for the curved shape from Consilio-style
  curvePath: 'M 0 0 L 240 0 Q 280 50 240 100 L 240 100vh L 0 100vh Z',
  curvePathForSVG: 'M1,0 H0.85 L1,0.2 V0.8 L0.85,1 H0 Z',
  width: 280,
  collapsedWidth: 80,
};

export const EFFECTS = {
  glassmorphism: {
    opacity: 0.1,
    blur: 12,
    borderOpacity: 0.2,
  },
  
  glow: {
    low: { blur: 2, spread: 1 },
    medium: { blur: 4, spread: 2 },
    high: { blur: 8, spread: 4 },
  }
};

export const NAVIGATION_ITEMS = [
  // Main navigation structure from PRD
  { id: 'dashboard', title: 'Dashboard', icon: 'LayoutDashboard', href: '/dashboard' },
  { 
    id: 'vetting', 
    title: 'Vetting Center', 
    icon: 'Shield', 
    children: [
      { id: 'new-vetting', title: 'New Vetting Request', href: '/vetting/new' },
      { id: 'active-requests', title: 'Active Requests', href: '/vetting/active' },
      { id: 'completed', title: 'Completed Vettings', href: '/vetting/completed' },
    ]
  },
  {
    id: 'suppliers',
    title: 'Suppliers',
    icon: 'Building2',
    children: [
      { id: 'supplier-list', title: 'Supplier List', href: '/suppliers' },
      { id: 'add-supplier', title: 'Add New Supplier', href: '/suppliers/new' },
    ]
  },
  // Additional navigation items will be added here
]; 