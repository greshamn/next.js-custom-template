import LazyLoad from '@/components/ui/LazyLoad';

export default function Home() {
  return (
    <div className="space-y-6 p-6 bg-dashboard-bg text-dashboard-foreground">
      {/* Header Section - Critical above-the-fold content */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 critical-above-fold">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dashboard-foreground">Dashboard</h1>
          <p className="text-sm sm:text-base text-dashboard-muted mt-1">
            Welcome to VETTPRO. Monitor your vetting operations.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium rounded-lg transition-colors mobile-optimized">
            New Vetting Request
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="responsive-grid">
        <div className="dashboard-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-dashboard-muted">Active Requests</p>
              <p className="text-2xl font-bold text-dashboard-foreground">24</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-dashboard-muted">Completed Today</p>
              <p className="text-2xl font-bold text-dashboard-foreground">12</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-dashboard-muted">Pending Review</p>
              <p className="text-2xl font-bold text-dashboard-foreground">8</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-dashboard-muted">Risk Alerts</p>
              <p className="text-2xl font-bold text-dashboard-foreground">3</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LazyLoad fallback={<div className="dashboard-card animate-pulse h-64"></div>}>
          <div className="dashboard-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-dashboard-foreground">Vetting Trends</h3>
              <select className="bg-dashboard-card border border-border text-dashboard-foreground text-sm rounded-md px-3 py-1">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="chart-container bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 flex items-center justify-center">
              <span className="text-dashboard-muted">Chart Placeholder</span>
            </div>
          </div>
        </LazyLoad>

        <LazyLoad fallback={<div className="dashboard-card animate-pulse h-64"></div>}>
          <div className="dashboard-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-dashboard-foreground">Risk Distribution</h3>
              <button className="text-primary hover:text-primary/80 text-sm font-medium">
                View Details
              </button>
            </div>
            <div className="chart-container bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-lg p-4 flex items-center justify-center">
              <span className="text-dashboard-muted">Pie Chart Placeholder</span>
            </div>
          </div>
        </LazyLoad>
      </div>

      {/* Recent Activity Table */}
      <LazyLoad fallback={<div className="dashboard-card animate-pulse h-48"></div>}>
        <div className="dashboard-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-dashboard-foreground">Recent Vetting Requests</h3>
            <button className="text-primary hover:text-primary/80 text-sm font-medium">
              View All
            </button>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-4 text-sm font-medium text-dashboard-muted">ID</th>
                  <th className="text-left py-2 px-4 text-sm font-medium text-dashboard-muted">Supplier</th>
                  <th className="text-left py-2 px-4 text-sm font-medium text-dashboard-muted hidden md:table-cell">Type</th>
                  <th className="text-left py-2 px-4 text-sm font-medium text-dashboard-muted">Status</th>
                  <th className="text-left py-2 px-4 text-sm font-medium text-dashboard-muted hidden lg:table-cell">Date</th>
                  <th className="text-left py-2 px-4 text-sm font-medium text-dashboard-muted">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-sm text-dashboard-foreground">#VET-001</td>
                  <td className="py-3 px-4 text-sm text-dashboard-foreground">Acme Corp Ltd</td>
                  <td className="py-3 px-4 text-sm text-dashboard-muted hidden md:table-cell">Financial</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-dashboard-muted hidden lg:table-cell">2024-01-15</td>
                  <td className="py-3 px-4">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      View
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-sm text-dashboard-foreground">#VET-002</td>
                  <td className="py-3 px-4 text-sm text-dashboard-foreground">TechFlow Ltd</td>
                  <td className="py-3 px-4 text-sm text-dashboard-muted hidden md:table-cell">Technical</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-dashboard-muted hidden lg:table-cell">2024-01-14</td>
                  <td className="py-3 px-4">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-dashboard-foreground">#VET-003</td>
                  <td className="py-3 px-4 text-sm text-dashboard-foreground">Global Solutions</td>
                  <td className="py-3 px-4 text-sm text-dashboard-muted hidden md:table-cell">Compliance</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Risk Alert
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-dashboard-muted hidden lg:table-cell">2024-01-13</td>
                  <td className="py-3 px-4">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-3">
            <div className="border border-border rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-dashboard-foreground">#VET-001</p>
                  <p className="text-sm text-dashboard-muted">Acme Corp Ltd</p>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </div>
              <button className="text-primary text-sm font-medium">View Details</button>
            </div>
            
            <div className="border border-border rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-dashboard-foreground">#VET-002</p>
                  <p className="text-sm text-dashboard-muted">TechFlow Ltd</p>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Completed
                </span>
              </div>
              <button className="text-primary text-sm font-medium">View Details</button>
            </div>
          </div>
        </div>
      </LazyLoad>

      {/* Responsive Testing Indicator */}
      <div className="fixed bottom-4 right-4 bg-dashboard-card border border-border rounded-lg px-3 py-2 text-xs font-mono text-dashboard-muted z-50">
        <span className="block sm:hidden">📱 Mobile</span>
        <span className="hidden sm:block md:hidden">📱 Tablet</span>
        <span className="hidden md:block lg:hidden">💻 Desktop</span>
        <span className="hidden lg:block">🖥️ Large</span>
      </div>
    </div>
  );
}
