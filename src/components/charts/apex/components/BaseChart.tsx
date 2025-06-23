"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { generateApexTheme } from '../utils/theme-config';
import { neumorphicChartStyles } from '../utils/theme-config';

// Dynamically import ReactApexChart to avoid SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => <div className={neumorphicChartStyles.loading}>Loading chart...</div>
});

export interface BaseChartProps {
  options: ApexOptions;
  series: ApexOptions['series'];
  type: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'scatter' | 'bubble' | 'heatmap' | 'candlestick';
  height?: number;
  width?: string | number;
  title?: string;
  subtitle?: string;
  loading?: boolean;
  error?: string | null;
  noData?: boolean;
}

export const BaseChart: React.FC<BaseChartProps> = ({
  options,
  series,
  type,
  height = 350,
  width = '100%',
  title,
  subtitle,
  loading = false,
  error = null,
  noData = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const [themeKey, setThemeKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen for theme changes and force re-render
  useEffect(() => {
    if (!mounted) return;

    const handleThemeChange = () => {
      console.log('Theme changed, forcing chart re-render');
      setThemeKey(prev => prev + 1);
    };

    // Watch for class changes on document element (theme switching)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [mounted]);

  // Show loading state
  if (loading) {
    return (
      <div className={neumorphicChartStyles.container}>
        {title && <h3 className={neumorphicChartStyles.title}>{title}</h3>}
        {subtitle && <p className={neumorphicChartStyles.subtitle}>{subtitle}</p>}
        <div className={neumorphicChartStyles.loading}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neumorphic-border"></div>
          <span className="ml-2">Loading chart...</span>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className={neumorphicChartStyles.container}>
        {title && <h3 className={neumorphicChartStyles.title}>{title}</h3>}
        {subtitle && <p className={neumorphicChartStyles.subtitle}>{subtitle}</p>}
        <div className={neumorphicChartStyles.error}>
          <span>⚠️ {error}</span>
        </div>
      </div>
    );
  }

  // Show no data state
  if (noData || !series || series.length === 0) {
    return (
      <div className={neumorphicChartStyles.container}>
        {title && <h3 className={neumorphicChartStyles.title}>{title}</h3>}
        {subtitle && <p className={neumorphicChartStyles.subtitle}>{subtitle}</p>}
        <div className={neumorphicChartStyles.noData}>
          <span>📊 No data available</span>
        </div>
      </div>
    );
  }

  // Don't render on server
  if (!mounted) {
    return (
      <div className={neumorphicChartStyles.container}>
        {title && <h3 className={neumorphicChartStyles.title}>{title}</h3>}
        {subtitle && <p className={neumorphicChartStyles.subtitle}>{subtitle}</p>}
        <div className={neumorphicChartStyles.loading}>Loading chart...</div>
      </div>
    );
  }

  // Create safe merged options - avoid deep merging for now
  const themeOptions = generateApexTheme();
  console.log('BaseChart themeOptions:', themeOptions);
  console.log('BaseChart options:', options);
  
  const mergedOptions: ApexOptions = {
    ...options, // Start with user options
    // Override with safe theme values
    chart: {
      ...options.chart,
      background: 'transparent',
      foreColor: themeOptions.chart?.foreColor || '#000',
      fontFamily: 'inherit',
    },
  };

  return (
    <div className={neumorphicChartStyles.container}>
      {title && <h3 className={neumorphicChartStyles.title}>{title}</h3>}
      {subtitle && <p className={neumorphicChartStyles.subtitle}>{subtitle}</p>}
      
      <ReactApexChart
        key={themeKey} // Force re-render when theme changes
        options={mergedOptions}
        series={series}
        type={type}
        height={height}
        width={width}
      />
    </div>
  );
}; 