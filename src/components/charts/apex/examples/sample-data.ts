import { ChartData, SeriesData } from '../types';

// Sample line chart data - Monthly revenue
export const monthlyRevenueData: ChartData[] = [
  { x: 'Jan', y: 45000 },
  { x: 'Feb', y: 52000 },
  { x: 'Mar', y: 48000 },
  { x: 'Apr', y: 61000 },
  { x: 'May', y: 55000 },
  { x: 'Jun', y: 67000 },
  { x: 'Jul', y: 70000 },
  { x: 'Aug', y: 65000 },
  { x: 'Sep', y: 72000 },
  { x: 'Oct', y: 68000 },
  { x: 'Nov', y: 74000 },
  { x: 'Dec', y: 78000 },
];

// Sample multi-series data - Revenue vs Expenses
export const revenueVsExpensesData: SeriesData[] = [
  {
    name: 'Revenue',
    data: [
      { x: 'Q1', y: 145000 },
      { x: 'Q2', y: 183000 },
      { x: 'Q3', y: 207000 },
      { x: 'Q4', y: 220000 },
    ],
  },
  {
    name: 'Expenses',
    data: [
      { x: 'Q1', y: 98000 },
      { x: 'Q2', y: 125000 },
      { x: 'Q3', y: 142000 },
      { x: 'Q4', y: 155000 },
    ],
  },
];

// Sample pie chart data - Vetting service breakdown
export const vettingServicesData: ChartData[] = [
  { x: 'ID Verification', y: 35 },
  { x: 'Criminal Background', y: 28 },
  { x: 'Employment History', y: 18 },
  { x: 'Reference Checks', y: 12 },
  { x: 'Credit Checks', y: 7 },
];

// Sample time series data - Daily applications
export const dailyApplicationsData: ChartData[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return {
    x: date.getTime(),
    y: Math.floor(Math.random() * 50) + 20, // Random between 20-70
  };
});

// Sample regional data - Applications by province
export const provincialData: ChartData[] = [
  { x: 'Gauteng', y: 2500 },
  { x: 'Western Cape', y: 1800 },
  { x: 'KwaZulu-Natal', y: 1200 },
  { x: 'Eastern Cape', y: 800 },
  { x: 'Limpopo', y: 600 },
  { x: 'Mpumalanga', y: 550 },
  { x: 'North West', y: 450 },
  { x: 'Free State', y: 400 },
  { x: 'Northern Cape', y: 200 },
];

// Sample status breakdown data
export const applicationStatusData: ChartData[] = [
  { x: 'Completed', y: 65 },
  { x: 'In Progress', y: 20 },
  { x: 'Pending', y: 10 },
  { x: 'Rejected', y: 5 },
];

// Sample trend data - Multiple metrics over time
export const performanceMetricsData: SeriesData[] = [
  {
    name: 'Applications',
    data: [
      { x: 'Week 1', y: 120 },
      { x: 'Week 2', y: 135 },
      { x: 'Week 3', y: 145 },
      { x: 'Week 4', y: 162 },
    ],
  },
  {
    name: 'Completions',
    data: [
      { x: 'Week 1', y: 95 },
      { x: 'Week 2', y: 108 },
      { x: 'Week 3', y: 125 },
      { x: 'Week 4', y: 140 },
    ],
  },
  {
    name: 'Success Rate %',
    data: [
      { x: 'Week 1', y: 79 },
      { x: 'Week 2', y: 80 },
      { x: 'Week 3', y: 86 },
      { x: 'Week 4', y: 86 },
    ],
  },
];

// Export all sample data
export const sampleData = {
  monthlyRevenue: monthlyRevenueData,
  revenueVsExpenses: revenueVsExpensesData,
  vettingServices: vettingServicesData,
  dailyApplications: dailyApplicationsData,
  provincial: provincialData,
  applicationStatus: applicationStatusData,
  performanceMetrics: performanceMetricsData,
}; 