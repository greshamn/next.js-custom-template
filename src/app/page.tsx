import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          VETTPRO Dashboard - Theme Integration Test
        </h1>
        
        {/* Theme Integration Test Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Consilio-style Light Theme Test */}
          <div className="dashboard-card">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Consilio-style Elements
            </h2>
            <p className="text-muted-foreground mb-4">
              Testing light theme colors and clean card styling
            </p>
            <div className="space-y-3">
              <Button variant="default">Primary Button</Button>
              <Button variant="outline">Outlined Button</Button>
              <Button variant="secondary">Secondary Button</Button>
            </div>
          </div>

          {/* Recehtok-style Dark Effects Test */}
          <div className="glassmorphism rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-glow-blue">
              Recehtok-style Effects
            </h2>
            <p className="text-foreground/80 mb-4">
              Testing glassmorphism and glow effects
            </p>
            <div className="space-y-3">
              <Button variant="default" className="glow-blue">
                Glowing Button
              </Button>
              <div className="glow-purple p-3 rounded bg-card text-card-foreground">
                Purple Glow Effect
              </div>
            </div>
          </div>
        </div>

        {/* Curved Sidebar Preview */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Curved Sidebar Preview</h2>
          <div className="flex">
            <div className="curved-sidebar h-32 flex items-center justify-center">
              <span className="text-sidebar-foreground font-medium">
                Curved Sidebar Style
              </span>
            </div>
            <div className="flex-1 bg-card border border-border p-6 ml-4 rounded-lg">
              <p className="text-card-foreground">
                Main content area - this demonstrates how the curved sidebar will integrate with the main layout.
              </p>
            </div>
          </div>
        </div>

        {/* shadcn/ui Components Test */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">shadcn/ui Components Test</h2>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            ✅ Next.js 15 + Tailwind CSS v4 + shadcn/ui + VETTPRO Custom Theme
          </p>
        </div>
      </div>
    </div>
  );
}
