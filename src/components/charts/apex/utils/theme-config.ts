import { ApexOptions } from 'apexcharts';

// ThemeConfig type moved to types/chart-types.ts to avoid duplicate exports

/**
 * Get CSS custom property value from the document
 */
function getCSSCustomProperty(propertyName: string): string {
  if (typeof window === 'undefined') return '';
  
  const rootStyles = getComputedStyle(document.documentElement);
  return rootStyles.getPropertyValue(propertyName).trim();
}

/**
 * Generate ApexCharts theme configuration using neumorphic CSS custom properties
 */
export function generateApexTheme(): ApexOptions {
  // Simply read the CSS custom properties - they should automatically be correct for the current theme
  const textPrimary = getCSSCustomProperty('--neumorphic-text-primary');
  const textSecondary = getCSSCustomProperty('--neumorphic-text-secondary');
  
  // Enhanced debug logging
  const currentTheme = typeof window !== 'undefined' 
    ? document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    : 'unknown';
  
  console.log('ApexCharts Theme Debug:', { 
    currentTheme,
    textPrimary, 
    textSecondary,
    documentClasses: typeof window !== 'undefined' ? document.documentElement.className : 'server'
  });

  return {
    chart: {
      background: 'transparent',
      foreColor: textPrimary,
      fontFamily: 'inherit',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: textPrimary,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: textPrimary,
        },
      },
    },
    grid: {
      borderColor: textSecondary,
    },
    legend: {
      labels: {
        colors: textPrimary,
      },
    },
    title: {
      style: {
        color: textPrimary,
      },
    },
    subtitle: {
      style: {
        color: textSecondary,
      },
    },
  };
}

/**
 * Default color palette using neumorphic theme colors
 */
export function generateColorPalette(count: number = 8): string[] {
  const accentColor = getCSSCustomProperty('--neumorphic-accent') || '#FF9A3E';
  const borderColor = getCSSCustomProperty('--neumorphic-border') || '#8B5CF6';
  
  // Base colors from neumorphic theme
  const baseColors = [
    borderColor,    // Primary purple
    accentColor,    // Orange accent
    '#10B981',      // Emerald
    '#F59E0B',      // Amber
    '#EF4444',      // Red
    '#3B82F6',      // Blue
    '#8B5CF6',      // Violet
    '#EC4899',      // Pink
  ];

  // If we need more colors, generate variations
  if (count <= baseColors.length) {
    return baseColors.slice(0, count);
  }

  const colors = [...baseColors];
  const hueStep = 360 / count;
  
  for (let i = baseColors.length; i < count; i++) {
    const hue = (i * hueStep) % 360;
    colors.push(`hsl(${hue}, 65%, 55%)`);
  }

  return colors;
}

// Neumorphic-specific chart styling
export const neumorphicChartStyles = {
  container: 'relative rounded-[var(--neumorphic-radius)] p-6 shadow-neumorphic-convex bg-neumorphic-bg',
  title: 'text-neumorphic-text-primary font-semibold mb-4',
  subtitle: 'text-neumorphic-text-secondary text-sm mb-2',
  loading: 'flex items-center justify-center h-64 text-neumorphic-text-secondary',
  error: 'flex items-center justify-center h-64 text-red-500',
  noData: 'flex items-center justify-center h-64 text-neumorphic-text-secondary',
};

/**
 * Responsive chart options
 */
export const responsiveOptions: ApexOptions['responsive'] = [
  {
    breakpoint: 768,
    options: {
      chart: {
        height: 300,
      },
      legend: {
        position: 'bottom',
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '10px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '10px',
          },
        },
      },
    },
  },
  {
    breakpoint: 480,
    options: {
      chart: {
        height: 250,
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '9px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '9px',
          },
        },
      },
    },
  },
]; 