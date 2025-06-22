# ApexCharts Components Library

> **⚠️ CRITICAL ARCHITECTURAL NOTE - NEUMORPHIC THEME CONSISTENCY**
> 
> **This library requires custom CSS overrides to maintain 100% consistency with our neumorphic theme system.** 
> 
> Unlike other components in our application that automatically inherit from the neumorphic theme, ApexCharts generates its own DOM elements with internal CSS classes that do not respect CSS custom properties. To maintain our design system integrity:
> 
> 1. **All ApexCharts styling MUST be defined in `src/styles/themes/neumorphic.css`**
> 2. **Every ApexCharts CSS rule MUST use neumorphic CSS custom properties** (`--neumorphic-*`)
> 3. **No hardcoded colors or theme values are allowed** - everything must reference the neumorphic theme
> 4. **When adding new chart types, always add corresponding CSS overrides** to maintain theme consistency
> 5. **Any changes to neumorphic theme colors must be tested across all chart components**
> 
> **Why This Matters**: ApexCharts operates outside our standard theming system. Without these overrides, charts would use default colors that break our neumorphic design language. This custom CSS bridge ensures seamless integration while maintaining our unified visual identity.
> 
> **Location of ApexCharts Theme Overrides**: `src/styles/themes/neumorphic.css` (search for "APEXCHARTS THEME INTEGRATION")

## 🏛️ **ARCHITECTURAL DECISION SUMMARY**

This ApexCharts integration represents a **critical architectural pattern** for maintaining design system consistency when integrating third-party libraries:

### The Challenge
- **ApexCharts operates independently** of our React component theming system
- **Generates its own DOM elements** with internal CSS classes
- **Does not automatically inherit** CSS custom properties or theme context
- **Would break visual consistency** without proper integration

### Our Solution: CSS Bridge Pattern
1. **Centralized Theme Source**: All styling originates from `neumorphic.css`
2. **Direct DOM Targeting**: CSS selectors directly target ApexCharts-generated elements
3. **Theme Variable Mapping**: Every ApexCharts element maps to appropriate neumorphic variables
4. **Zero JavaScript Dependencies**: No reliance on JavaScript theme detection or configuration

### Why This Matters for the Application
- **🎨 Visual Consistency**: Charts seamlessly blend with the neumorphic design language
- **🔄 Theme Switching**: Automatic light/dark mode support without additional code
- **🛠️ Maintainability**: Theme updates automatically propagate to all charts
- **📱 Future-Proof**: New chart types inherit existing theme integration
- **⚡ Performance**: CSS-only solution with no JavaScript overhead

### Broader Implications
This pattern should be applied to **any third-party UI library** that doesn't automatically integrate with our neumorphic theme system. The key principle: **Maintain design system integrity at all costs, even if it requires custom CSS bridges.**

This directory contains reusable ApexCharts components built specifically for the neumorphic theme and South African vetting application.

## 📦 Installation

ApexCharts and React-ApexCharts are already installed in this project:

```bash
npm install apexcharts react-apexcharts
```

## 🏗️ Project Structure

```
src/components/charts/apex/
├── README.md                 # This documentation
├── types/                    # TypeScript interfaces and types
│   ├── index.ts             # Exported types
│   └── chart-types.ts       # Chart-specific type definitions
├── hooks/                    # Custom hooks for chart functionality
│   ├── index.ts             # Exported hooks
│   └── useApexChart.ts      # Main chart hook
├── utils/                    # Utility functions and configurations
│   ├── index.ts             # Exported utilities
│   ├── theme-config.ts      # Neumorphic theme configuration
│   ├── data-formatters.ts   # Data transformation utilities
│   └── chart-options.ts     # Default chart options
├── components/              # Reusable chart components
│   ├── index.ts             # Exported components
│   ├── BaseChart.tsx        # Base chart wrapper component
│   ├── LineChart.tsx        # Line chart component
│   ├── AreaChart.tsx        # Area chart component
│   ├── BarChart.tsx         # Bar chart component
│   ├── PieChart.tsx         # Pie chart component
│   ├── DonutChart.tsx       # Donut chart component
│   └── MixedChart.tsx       # Mixed/combination chart component
└── examples/                # Usage examples and demos
    ├── index.ts             # Exported examples
    ├── ChartDemo.tsx        # Comprehensive demo component
    └── sample-data.ts       # Sample data for demonstrations
```

## 🎨 Neumorphic Theme Integration

All charts are designed to seamlessly integrate with the neumorphic theme:

- **Consistent Colors**: Uses CSS custom properties for theme colors
- **Neumorphic Shadows**: Charts have subtle inset/outset shadows
- **Purple Accents**: Primary data series use the purple accent color
- **Responsive Design**: All charts adapt to different screen sizes
- **Dark/Light Mode**: Automatic theme switching support

## 🚀 Quick Start

### Basic Usage

```tsx
import { LineChart } from '@/components/charts/apex';

const MyComponent = () => {
  const data = [
    { x: 'Jan', y: 100 },
    { x: 'Feb', y: 120 },
    { x: 'Mar', y: 140 }
  ];

  return (
    <LineChart
      data={data}
      title="Monthly Revenue"
      height={300}
    />
  );
};
```

### Advanced Usage with Custom Options

```tsx
import { BaseChart } from '@/components/charts/apex';
import { useApexChart } from '@/components/charts/apex/hooks';

const CustomChart = () => {
  const { options, series } = useApexChart({
    type: 'line',
    data: myData,
    customOptions: {
      stroke: { curve: 'smooth' },
      markers: { size: 6 }
    }
  });

  return (
    <BaseChart
      options={options}
      series={series}
      type="line"
      height={400}
    />
  );
};
```

## 📊 Available Chart Types

### 1. LineChart
- **Purpose**: Time series data, trends, comparisons
- **Best For**: Revenue over time, user growth, performance metrics
- **Features**: Multiple series, smooth curves, markers, annotations

### 2. AreaChart
- **Purpose**: Volume data, cumulative values, part-to-whole relationships
- **Best For**: Revenue breakdown, resource usage, stacked metrics
- **Features**: Stacked areas, gradient fills, opacity controls

### 3. BarChart
- **Purpose**: Categorical comparisons, rankings
- **Best For**: Regional performance, category analysis, comparisons
- **Features**: Horizontal/vertical, grouped/stacked, data labels

### 4. PieChart
- **Purpose**: Part-to-whole relationships, simple proportions
- **Best For**: Market share, completion rates, category breakdown
- **Features**: 3D effects, exploded slices, custom legends

### 5. DonutChart
- **Purpose**: Part-to-whole with central content area
- **Best For**: KPIs with central metric, progress indicators
- **Features**: Central text, multiple rings, gradient colors

### 6. MixedChart
- **Purpose**: Multiple data types in one visualization
- **Best For**: Revenue vs targets, multi-metric dashboards
- **Features**: Combine line/bar/area, dual y-axes, different scales

## 🛠️ Component Props

### Common Props (All Charts)

```tsx
interface BaseChartProps {
  data: ChartData[];           // Chart data array
  title?: string;              // Chart title
  subtitle?: string;           // Chart subtitle
  height?: number;             // Chart height in pixels
  width?: string | number;     // Chart width
  className?: string;          // Additional CSS classes
  loading?: boolean;           // Show loading state
  error?: string;             // Error message to display
  onDataPointClick?: (point: DataPoint) => void; // Click handler
  theme?: 'light' | 'dark';   // Force theme (auto-detected by default)
}
```

### Chart-Specific Props

Each chart component has additional props specific to its type. See individual component files for detailed prop documentation.

## 🎯 Data Format

### Standard Data Format

```tsx
interface ChartData {
  x: string | number | Date;  // X-axis value
  y: number;                  // Y-axis value
  label?: string;             // Custom label
  color?: string;             // Custom color
  group?: string;             // Group/series identifier
}
```

### Multi-Series Data

```tsx
interface SeriesData {
  name: string;               // Series name
  data: ChartData[];          // Series data points
  color?: string;             // Series color
  type?: ChartType;           // Chart type for mixed charts
}
```

## 🎨 Theming and Customization

### CSS Custom Properties

The charts use these CSS custom properties from the neumorphic theme:

```css
--neumorphic-primary        /* Primary accent color (purple) */
--neumorphic-bg            /* Background color */
--neumorphic-text-primary  /* Primary text color */
--neumorphic-text-secondary /* Secondary text color */
--neumorphic-border        /* Border color */
```

### Custom Theme Configuration

```tsx
import { createCustomTheme } from '@/components/charts/apex/utils';

const customTheme = createCustomTheme({
  primaryColor: '#8B5CF6',
  backgroundColor: '#1a1a1a',
  textColor: '#ffffff',
  gridColor: '#333333'
});
```

## 🔧 Hooks

### useApexChart

Main hook for chart configuration and data processing:

```tsx
const {
  options,      // ApexCharts options object
  series,       // Chart series data
  loading,      // Loading state
  error,        // Error state
  refresh       // Manual refresh function
} = useApexChart({
  type: 'line',
  data: chartData,
  customOptions: {},
  autoRefresh: true
});
```

## 📱 Responsive Design

All charts are responsive by default:

- **Mobile**: Simplified legends, smaller text, touch-friendly
- **Tablet**: Balanced layout, medium sizing
- **Desktop**: Full features, larger sizing, hover effects

### Custom Responsive Breakpoints

```tsx
<LineChart
  data={data}
  responsive={{
    mobile: { height: 200, legend: false },
    tablet: { height: 300, legend: true },
    desktop: { height: 400, legend: true }
  }}
/>
```

## 🚨 Common Issues and Solutions

### Issue 1: Charts not rendering
**Problem**: Charts appear blank or don't render
**Solution**: 
- Ensure data is properly formatted
- Check that ApexCharts is imported correctly
- Verify container has defined height

```tsx
// ❌ Wrong
<LineChart data={[]} />

// ✅ Correct
<LineChart data={validData} height={300} />
```

### Issue 2: Theme colors not applying
**Problem**: Charts don't match neumorphic theme
**Solution**:
- Ensure CSS custom properties are loaded
- Check theme provider is wrapping the component
- Use theme utilities for color generation

### Issue 3: **CRITICAL - Light Theme Text Visibility Issue** ✅ RESOLVED
**Problem**: In light theme, chart text (axis labels, controls) appears white/invisible
**Root Cause Analysis**:
- ApexCharts doesn't automatically inherit CSS custom properties
- CSS custom properties may not be available when chart initializes
- Theme switching timing issues between React state and CSS updates
- ApexCharts internal theme system conflicting with custom CSS properties

**Scenarios Investigated**:
1. **CSS Property Reading Timing**: CSS custom properties not available when `generateApexTheme()` is called
2. **Theme Detection Logic**: `document.documentElement.classList.contains('dark')` not reliable
3. **ApexCharts Internal Theming**: ApexCharts' built-in theme system overriding custom colors
4. **React Hydration Issues**: Server-side rendering vs client-side theme detection mismatch
5. **CSS Specificity**: ApexCharts internal styles overriding custom theme styles

**FINAL SOLUTION - CSS-Only Approach**:
Instead of relying on JavaScript theme configuration, we implemented direct CSS targeting of ApexCharts elements in `neumorphic.css`:

```css
/* Direct CSS targeting of ApexCharts elements */
.light .apexcharts-text,
.light .apexcharts-xaxis-label,
.light .apexcharts-yaxis-label,
.light .apexcharts-legend-text,
.light .apexcharts-toolbar svg {
  fill: var(--neumorphic-text-primary) !important;
  color: var(--neumorphic-text-primary) !important;
}

.dark .apexcharts-text,
.dark .apexcharts-xaxis-label,
.dark .apexcharts-yaxis-label,
.dark .apexcharts-legend-text,
.dark .apexcharts-toolbar svg {
  fill: var(--neumorphic-text-primary) !important;
  color: var(--neumorphic-text-primary) !important;
}
```

**Why This Works**:
- ✅ **Direct DOM Targeting**: CSS directly targets ApexCharts-generated elements
- ✅ **Theme-Aware**: Uses `.light` and `.dark` class selectors for proper theme detection
- ✅ **CSS Custom Properties**: Leverages existing neumorphic theme variables
- ✅ **No JavaScript Timing Issues**: CSS applies immediately when DOM elements are created
- ✅ **Specificity**: `!important` ensures our styles override ApexCharts defaults
- ✅ **Comprehensive Coverage**: Targets all text elements including toolbar icons

**Current Status**: 
- ✅ Dark theme works perfectly
- ✅ Light theme now has proper text visibility
- ✅ Theme switching works seamlessly
- ✅ All chart controls (toolbar, tooltips, menus) respect neumorphic theme

**Key Lesson**: When dealing with third-party libraries that generate their own DOM elements, **CSS-only solutions are often more reliable than JavaScript configuration**, especially for theming.

### Issue 4: Performance with large datasets
**Problem**: Charts lag with many data points
**Solution**:
- Use data sampling for large datasets
- Implement virtual scrolling for time series
- Consider data aggregation

```tsx
// Use built-in data sampling
<LineChart
  data={largeDataset}
  maxDataPoints={100}
  sampling="average"
/>
```

### Issue 5: SSR/Hydration issues
**Problem**: Charts break during server-side rendering
**Solution**:
- Use dynamic imports with no SSR
- Implement proper loading states
- Use the provided BaseChart wrapper

```tsx
import dynamic from 'next/dynamic';

const LineChart = dynamic(
  () => import('@/components/charts/apex').then(mod => mod.LineChart),
  { ssr: false, loading: () => <ChartSkeleton /> }
);
```

## 🧪 Testing

### Unit Testing

```tsx
import { render } from '@testing-library/react';
import { LineChart } from '@/components/charts/apex';

test('renders line chart with data', () => {
  const data = [{ x: 'A', y: 10 }, { x: 'B', y: 20 }];
  render(<LineChart data={data} />);
  // Add assertions
});
```

### Visual Testing

Use Storybook for visual regression testing:

```bash
npm run storybook
```

## 📈 Performance Optimization

### Best Practices

1. **Data Memoization**: Use `useMemo` for expensive data transformations
2. **Lazy Loading**: Load charts only when needed
3. **Debounced Updates**: Throttle rapid data updates
4. **Efficient Re-renders**: Use `React.memo` for chart components

```tsx
const MemoizedLineChart = React.memo(LineChart);

const optimizedData = useMemo(
  () => transformData(rawData),
  [rawData]
);
```

## 🔄 Migration from Recharts

If migrating from existing Recharts components:

1. **Data Format**: Convert data to ApexCharts format
2. **Props Mapping**: Map Recharts props to ApexCharts equivalents
3. **Styling**: Update theme configurations
4. **Events**: Migrate event handlers to ApexCharts format

## 📚 Resources

- [ApexCharts Documentation](https://apexcharts.com/docs/)
- [React-ApexCharts GitHub](https://github.com/apexcharts/react-apexcharts)
- [ApexCharts Examples](https://apexcharts.com/javascript-chart-demos/)

## 🤝 Contributing

When adding new chart components:

1. Follow the established folder structure
2. Include comprehensive TypeScript types
3. Add examples and documentation
4. Test across different themes and screen sizes
5. Update this README with new components

## 📄 License

This component library follows the same license as the parent project. 

## 🎯 **CSS AUDIT REPORT - 100% NEUMORPHIC ALIGNMENT**

**Audit Date**: December 2024  
**Status**: ✅ **FULLY COMPLIANT**

### Comprehensive Coverage
Our ApexCharts CSS overrides now cover **ALL** ApexCharts-generated elements:

**✅ Text Elements:**
- Primary text: `--neumorphic-text-primary`
- Secondary text: `--neumorphic-text-secondary`  
- Font family: `inherit` (uses app's font stack)

**✅ Interactive Elements:**
- Toolbar icons with hover states
- Menu items with neumorphic button styling
- Tooltips with neumorphic card styling
- All using neumorphic spacing and radius values

**✅ Visual Elements:**
- Grid lines with proper opacity
- Axis lines and ticks
- Selection areas and crosshairs
- All using neumorphic border colors

**✅ Advanced Features:**
- Pie/radial chart labels
- Data labels with text shadows
- Legend spacing and margins
- Loading states
- Backdrop blur effects on tooltips/menus

**✅ Neumorphic Design System Integration:**
- **Colors**: 100% use of `--neumorphic-*` CSS custom properties
- **Spacing**: Uses `--neumorphic-spacing-*` for consistent padding/margins
- **Radius**: Uses `--neumorphic-radius-*` for consistent border radius
- **Shadows**: Uses `--neumorphic-shadow-*` for depth and elevation
- **Transitions**: 0.3s ease transitions matching app-wide standards

### Zero Hardcoded Values
**🚫 NO** hardcoded colors, sizes, or theme-specific values exist in our ApexCharts integration. Every visual aspect references the neumorphic theme system, ensuring:
- Automatic theme switching compatibility
- Consistent visual language across the application
- Future-proof theme updates (change neumorphic variables = charts update automatically)
- No visual inconsistencies or theme drift

### Architecture Validation
This CSS-first approach validates our architectural decision to maintain neumorphic theme consistency across all components, even third-party libraries that operate outside our standard theming system.

## 🔒 **MAINTENANCE REQUIREMENTS**

### For Developers Adding New Chart Types:
1. **Test both light and dark themes** after adding new chart configurations
2. **Check all interactive elements** (toolbar, tooltips, legends) for theme compliance
3. **Verify no hardcoded colors** are introduced in JavaScript configuration
4. **Add CSS overrides** if new ApexCharts elements are discovered

### For Theme Updates:
1. **ApexCharts automatically inherits** any changes to neumorphic CSS custom properties
2. **No JavaScript changes required** when updating theme colors
3. **Test chart visibility** after any neumorphic theme modifications

### Red Flags to Watch For:
- ❌ Any hardcoded hex colors in chart configurations
- ❌ Text visibility issues when switching themes
- ❌ Chart elements not following neumorphic spacing/radius patterns
- ❌ Missing hover states or transitions on interactive elements 