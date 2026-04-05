import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Mic, Heart, Navigation, Phone, AlertCircle, Battery, Wifi } from 'lucide-react'

export const metadata = {
  title: 'Features - SmartWheel Wheelchair System',
  description: 'Explore the comprehensive features of the SmartWheel wheelchair system',
}

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: MapPin,
      title: 'GPS Tracking & Navigation',
      description: 'Real-time location tracking with precision accuracy. Perfect for both personal navigation and emergency response.',
      specs: [
        'Global positioning accuracy within 5 meters',
        'Real-time location updates every 5 seconds',
        'Trip history and route recording',
        'Geofencing alerts for designated areas',
      ],
    },
    {
      icon: Mic,
      title: 'Advanced Voice Control',
      description: 'Natural language voice commands for complete hands-free operation. Supports multiple languages and accents.',
      specs: [
        'Voice-activated movement control',
        'Natural language processing',
        'Emergency call activation via voice',
        'Voice-guided navigation assistance',
      ],
    },
    {
      icon: Heart,
      title: 'Health Monitoring System',
      description: 'Integrated sensors track vital health metrics continuously, providing insights and alerts for better wellness.',
      specs: [
        'Real-time heart rate monitoring',
        'Blood oxygen level tracking',
        'Temperature sensing',
        'Activity level monitoring and analysis',
      ],
    },
  ]

  const additionalFeatures = [
    {
      icon: Navigation,
      title: 'Smart Navigation',
      description: 'Intelligent route planning and waypoint navigation with obstacle awareness.',
    },
    {
      icon: Phone,
      title: 'Emergency Response',
      description: 'One-click emergency contacts with automatic location sharing to first responders.',
    },
    {
      icon: AlertCircle,
      title: 'Health Alerts',
      description: 'Automatic alerts for family and healthcare providers when anomalies are detected.',
    },
    {
      icon: Battery,
      title: 'Power Management',
      description: 'Intelligent battery system with predictive charging and extended range optimization.',
    },
    {
      icon: Wifi,
      title: 'Cloud Connectivity',
      description: 'Secure cloud storage for health data, location history, and user preferences.',
    },
    {
      icon: MapPin,
      title: 'Accessibility Settings',
      description: 'Comprehensive customization for individual needs and preferences.',
    },
  ]

  const systemSpecs = [
    { label: 'Weight Capacity', value: '300 lbs (136 kg)' },
    { label: 'Battery Life', value: '8-10 hours continuous use' },
    { label: 'Charging Time', value: '4-6 hours' },
    { label: 'Maximum Speed', value: '4 mph (6.4 km/h)' },
    { label: 'Range on Battery', value: '15-20 miles (24-32 km)' },
    { label: 'GPS Accuracy', value: '±5 meters' },
    { label: 'Voice Recognition', value: '95%+ accuracy' },
    { label: 'Operating Temperature', value: '-10°C to 50°C' },
  ]

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-600">Features & Specifications</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              SmartWheel Features
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Comprehensive specifications and features that make SmartWheel the most advanced wheelchair system available.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Core Features
          </h2>

          <div className="space-y-12">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-blue-100 rounded-lg">
                        <Icon size={40} className="text-blue-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-3">
                      {feature.specs.map((spec) => (
                        <div key={spec} className="flex gap-3">
                          <span className="text-blue-600 font-bold text-lg">•</span>
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-96 flex items-center justify-center">
                      <Icon size={120} className="text-blue-600 opacity-30" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Additional Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-8 border-0 bg-white hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                    <Icon size={28} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* System Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {systemSpecs.map((spec) => (
              <div key={spec.label} className="p-6 border border-gray-200 rounded-lg hover:border-blue-400 transition-colors">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                  {spec.label}
                </p>
                <p className="text-2xl font-bold text-gray-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Commands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Available Voice Commands
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Movement Commands</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <code className="text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded">Forward</code>
                  <span className="text-gray-700">Move forward at standard speed</span>
                </div>
                <div className="flex gap-3">
                  <code className="text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded">Backward</code>
                  <span className="text-gray-700">Move backward safely</span>
                </div>
                <div className="flex gap-3">
                  <code className="text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded">Turn left/right</code>
                  <span className="text-gray-700">Directional turning commands</span>
                </div>
                <div className="flex gap-3">
                  <code className="text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded">Stop</code>
                  <span className="text-gray-700">Immediate stop</span>
                </div>
                <div className="flex gap-3">
                  <code className="text-blue-600 font-mono bg-blue-50 px-3 py-1 rounded">Faster/Slower</code>
                  <span className="text-gray-700">Adjust speed on the fly</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Commands</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <code className="text-green-600 font-mono bg-green-50 px-3 py-1 rounded">Health status</code>
                  <span className="text-gray-700">Report current health metrics</span>
                </div>
                <div className="flex gap-3">
                  <code className="text-green-600 font-mono bg-green-50 px-3 py-1 rounded">Where am I</code>
                  <span className="text-gray-700">Report current GPS location</span>
                </div>
                <div className="flex gap-3">
                  <code className="text-green-600 font-mono bg-green-50 px-3 py-1 rounded">Help</code>
                  <span className="text-gray-700">Emergency assistance</span>
                </div>
                <div className="flex gap-3">
                  <code className="text-green-600 font-mono bg-green-50 px-3 py-1 rounded">Battery status</code>
                  <span className="text-gray-700">Check remaining battery</span>
                </div>
                <div className="flex gap-3">
                  <code className="text-green-600 font-mono bg-green-50 px-3 py-1 rounded">Navigate to [place]</code>
                  <span className="text-gray-700">GPS-guided navigation</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Safety Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automatic Safety Systems</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Obstacle Detection</h4>
                  <p className="text-gray-700">Advanced sensors prevent collisions</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Emergency Braking</h4>
                  <p className="text-gray-700">Immediate stop in critical situations</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Anti-Tip Technology</h4>
                  <p className="text-gray-700">Prevents dangerous tipping incidents</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health-Based Safety</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Abnormal Health Detection</h4>
                  <p className="text-gray-700">Alerts for heart rate, blood pressure anomalies</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Fall Detection</h4>
                  <p className="text-gray-700">Automatic emergency notification system</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Predictive Alerts</h4>
                  <p className="text-gray-700">AI-powered health trend analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
