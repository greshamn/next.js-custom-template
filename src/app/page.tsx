export default function Home() {
  return (
    <main className="min-h-screen bg-deep-purple p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white text-glow-cyan mb-2">
            VettPro Dashboard
          </h1>
          <p className="text-lg text-gray-300">
            Secure Supplier Vetting Platform
          </p>
        </header>

        {/* Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Glassmorphic Card */}
          <div className="glassmorphic p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Glassmorphic Panel
            </h3>
            <p className="text-gray-300">
              This demonstrates the glassmorphic effect with backdrop blur and transparency.
            </p>
          </div>

          {/* Glowing Card - Cyan */}
          <div className="bg-gradient-card-blue p-6 rounded-xl glow-cyan">
            <h3 className="text-xl font-semibold text-white mb-3">
              Glowing Card
            </h3>
            <p className="text-gray-100">
              Card with cyan glow effect and gradient background.
            </p>
          </div>

          {/* Glowing Card - Magenta */}
          <div className="bg-gradient-card-pink p-6 rounded-xl glow-magenta">
            <h3 className="text-xl font-semibold text-white mb-3">
              Animated Glow
            </h3>
            <p className="text-gray-100 animate-pulse-glow">
              Card with magenta glow and pulse animation.
            </p>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="glassmorphic p-6 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Chart Visualization Area
          </h3>
          <div className="h-64 bg-dark-sidebar/50 rounded-lg border border-glassmorphic-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-glow-gradient rounded-full animate-pulse-glow"></div>
              <p className="text-gray-300">
                Recharts integration will be implemented in the next subtask
              </p>
            </div>
          </div>
        </div>

        {/* Color Palette Demo */}
        <div className="glassmorphic p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Recehtok Color Palette
          </h3>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-purple rounded-lg border border-white/20 mb-2"></div>
              <p className="text-xs text-gray-300">Deep Purple</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-dark-sidebar rounded-lg border border-white/20 mb-2"></div>
              <p className="text-xs text-gray-300">Dark Sidebar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-glow-cyan rounded-lg glow-cyan mb-2"></div>
              <p className="text-xs text-gray-300">Glow Cyan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-glow-magenta rounded-lg glow-magenta mb-2"></div>
              <p className="text-xs text-gray-300">Glow Magenta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-glow-orange rounded-lg glow-orange mb-2"></div>
              <p className="text-xs text-gray-300">Glow Orange</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 