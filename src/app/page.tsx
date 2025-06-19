import GlassmorphicPanel from '@/components/ui/GlassmorphicPanel'
import GlowingElement from '@/components/ui/GlowingElement'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-recehtok p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Glowing Title */}
        <header className="mb-8">
          <GlowingElement glowColor="cyan" intensity="high" variant="text">
            <h1 className="text-4xl font-bold text-white mb-2">
              VettPro Dashboard
            </h1>
          </GlowingElement>
          <p className="text-lg text-gray-300">
            Secure Supplier Vetting Platform - Component Showcase
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Glassmorphic Panel Example */}
            <GlassmorphicPanel variant="card" size="lg">
              <div className="space-y-4">
                <GlowingElement glowColor="magenta" variant="text">
                  <h3 className="text-xl font-semibold text-white">
                    Glassmorphic Dashboard Panel
                  </h3>
                </GlowingElement>
                <p className="text-gray-300">
                  This demonstrates the glassmorphic effect with backdrop blur and transparency,
                  matching the Recehtok-style aesthetic from your reference screenshot.
                </p>
                
                {/* Mock Chart Area */}
                <div className="h-32 bg-gradient-glow rounded-lg flex items-center justify-center">
                  <GlowingElement glowColor="orange" intensity="medium">
                    <span className="text-white font-medium">Chart Visualization Area</span>
                  </GlowingElement>
                </div>
              </div>
            </GlassmorphicPanel>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassmorphicPanel variant="card" size="md">
                <div className="text-center">
                  <GlowingElement glowColor="cyan" intensity="high" variant="text">
                    <div className="text-2xl font-bold text-white mb-1">$12,847</div>
                  </GlowingElement>
                  <div className="text-sm text-gray-400">Total Value</div>
                </div>
              </GlassmorphicPanel>
              
              <GlassmorphicPanel variant="card" size="md">
                <div className="text-center">
                  <GlowingElement glowColor="magenta" intensity="high" variant="text">
                    <div className="text-2xl font-bold text-white mb-1">24</div>
                  </GlowingElement>
                  <div className="text-sm text-gray-400">Active Suppliers</div>
                </div>
              </GlassmorphicPanel>
              
              <GlassmorphicPanel variant="card" size="md">
                <div className="text-center">
                  <GlowingElement glowColor="orange" intensity="high" variant="text">
                    <div className="text-2xl font-bold text-white mb-1">89%</div>
                  </GlowingElement>
                  <div className="text-sm text-gray-400">Compliance Rate</div>
                </div>
              </GlassmorphicPanel>
            </div>
          </div>

          {/* Right Column - Notification Panel */}
          <div className="space-y-6">
            <GlassmorphicPanel variant="notification" size="lg">
              <GlowingElement glowColor="purple" variant="text">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Recent Notifications
                </h3>
              </GlowingElement>
              
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2">
                    <GlowingElement glowColor="cyan" intensity="low">
                      <div className="w-2 h-2 bg-glow-cyan rounded-full"></div>
                    </GlowingElement>
                    <span className="text-sm text-white">New supplier registered</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">2 minutes ago</div>
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2">
                    <GlowingElement glowColor="orange" intensity="low">
                      <div className="w-2 h-2 bg-glow-orange rounded-full"></div>
                    </GlowingElement>
                    <span className="text-sm text-white">Compliance check completed</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">5 minutes ago</div>
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center space-x-2">
                    <GlowingElement glowColor="magenta" intensity="low">
                      <div className="w-2 h-2 bg-glow-magenta rounded-full"></div>
                    </GlowingElement>
                    <span className="text-sm text-white">Risk assessment updated</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">12 minutes ago</div>
                </div>
              </div>
            </GlassmorphicPanel>
          </div>
        </div>

        {/* Component Showcase Section */}
        <div className="mt-12">
          <GlowingElement glowColor="cyan" variant="text">
            <h2 className="text-2xl font-bold text-white mb-6">Component Examples</h2>
          </GlowingElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Glow Effects Demo */}
            <GlassmorphicPanel variant="default" size="md">
              <h4 className="text-white font-semibold mb-4">Glow Effects</h4>
              <div className="space-y-3">
                <GlowingElement glowColor="cyan" intensity="low" variant="text">
                  <div className="text-white">Low Intensity Cyan</div>
                </GlowingElement>
                <GlowingElement glowColor="magenta" intensity="medium" variant="text">
                  <div className="text-white">Medium Intensity Magenta</div>
                </GlowingElement>
                <GlowingElement glowColor="orange" intensity="high" variant="text">
                  <div className="text-white">High Intensity Orange</div>
                </GlowingElement>
              </div>
            </GlassmorphicPanel>

            {/* Border Glow Demo */}
            <GlassmorphicPanel variant="default" size="md">
              <h4 className="text-white font-semibold mb-4">Border Glow</h4>
              <div className="space-y-3">
                <GlowingElement glowColor="cyan" variant="border" className="p-3 rounded-lg">
                  <div className="text-white text-center">Cyan Border</div>
                </GlowingElement>
                <GlowingElement glowColor="purple" variant="border" className="p-3 rounded-lg">
                  <div className="text-white text-center">Purple Border</div>
                </GlowingElement>
              </div>
            </GlassmorphicPanel>

            {/* Interactive Effects */}
            <GlassmorphicPanel variant="default" size="md">
              <h4 className="text-white font-semibold mb-4">Interactive Effects</h4>
              <div className="space-y-3">
                <GlowingElement glowColor="cyan" className="glow-hover cursor-pointer p-3 rounded-lg bg-white/5">
                  <div className="text-white text-center">Hover for Pulse</div>
                </GlowingElement>
                <GlowingElement glowColor="magenta" className="glow-float p-3 rounded-lg bg-white/5">
                  <div className="text-white text-center">Floating Animation</div>
                </GlowingElement>
              </div>
            </GlassmorphicPanel>
          </div>
        </div>
      </div>
    </main>
  )
} 