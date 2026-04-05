import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Zap, MapPin, Heart, Mic } from 'lucide-react'

export const metadata = {
  title: 'SmartWheel - Home',
  description: 'Discover the future of mobility with SmartWheel',
}

export default function Home() {
  const features = [
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Real-time location tracking for safety and navigation',
    },
    {
      icon: Mic,
      title: 'Voice Control',
      description: 'Hands-free operation with advanced voice commands',
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Integrated sensors for vital health metrics',
    },
    {
      icon: Zap,
      title: 'Smart Technology',
      description: 'Intelligent systems for enhanced mobility',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  The Future of Mobility
                </h1>
                <p className="text-xl text-gray-700 mb-2">
                  SmartWheel: An innovative GPS-enabled wheelchair system
                </p>
                <p className="text-lg text-gray-600">
                  Combining advanced technology with everyday mobility solutions
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Experience the next generation of wheelchair technology. SmartWheel integrates GPS tracking, 
                voice control, and health monitoring into a single, intuitive system designed for independence and safety.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/features">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Explore Features <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <p className="text-sm text-gray-600">Advanced Features</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <p className="text-sm text-gray-600">Monitoring Available</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-indigo-600 shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">♿</div>
                <p className="text-2xl font-bold">SmartWheel</p>
                <p className="text-blue-100 mt-2">Mobility Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">
              Discover what makes SmartWheel revolutionary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="group p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                  <div className="inline-block p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive documentation on the SmartWheel system, from technical specifications to real-world applications.
          </p>
          <Link href="/about">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
