import GlassmorphicPanel from '@/components/ui/GlassmorphicPanel'
import GlowingElement from '@/components/ui/GlowingElement'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header>
        <GlowingElement glowColor="cyan" intensity="high" variant="text">
          <h1 className="text-4xl font-bold text-white mb-2">
            Dashboard
          </h1>
        </GlowingElement>
        <p className="text-lg text-gray-300">
          Welcome to VettPro - Your secure supplier vetting platform
        </p>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Active Vettings', value: '24', color: 'cyan' },
          { title: 'Completed This Month', value: '156', color: 'magenta' },
          { title: 'Pending Reviews', value: '8', color: 'orange' },
          { title: 'Total Suppliers', value: '1,247', color: 'purple' }
        ].map((stat, index) => (
          <GlassmorphicPanel key={index} variant="card" size="md">
            <div className="text-center">
              <GlowingElement 
                glowColor={stat.color as any}
                intensity="medium" 
                variant="text"
              >
                <h3 className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
              </GlowingElement>
              <p className="text-sm text-gray-300">{stat.title}</p>
            </div>
          </GlassmorphicPanel>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart Panel */}
        <GlassmorphicPanel variant="default" size="lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Vetting Activity
          </h3>
          <div className="h-64 bg-black/20 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Chart Component Placeholder</p>
          </div>
        </GlassmorphicPanel>

        {/* Recent Activity Panel */}
        <GlassmorphicPanel variant="default" size="lg">
          <h3 className="text-xl font-semibold text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-glow-cyan rounded-full glow-pulse"></div>
                <div className="flex-1">
                  <p className="text-sm text-white">
                    Vetting request #{1000 + item} completed
                  </p>
                  <p className="text-xs text-gray-400">
                    {item} hour{item !== 1 ? 's' : ''} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassmorphicPanel>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'New Vetting Request', desc: 'Create a new supplier vetting request', color: 'cyan' },
          { title: 'Review Pending', desc: 'Review pending vetting submissions', color: 'magenta' },
          { title: 'Generate Report', desc: 'Create compliance and audit reports', color: 'orange' }
        ].map((action, index) => (
          <GlassmorphicPanel key={index} variant="card" size="md">
            <div className="text-center p-4">
              <GlowingElement 
                glowColor={action.color as any}
                intensity="low" 
                variant="border"
              >
                <div className="p-6 rounded-lg border-2 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {action.title}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {action.desc}
                  </p>
                </div>
              </GlowingElement>
            </div>
          </GlassmorphicPanel>
        ))}
      </div>
    </div>
  )
} 