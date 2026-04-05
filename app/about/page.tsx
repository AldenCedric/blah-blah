import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Satellite, Activity } from 'lucide-react'

export const metadata = {
  title: 'About SmartWheel - GPS Wheelchair System',
  description: 'Learn about the SmartWheel wheelchair system, combining GPS tracking, voice control, and health monitoring',
}

export default function AboutPage() {
  const technologies = [
    {
      icon: Satellite,
      name: 'GPS Tracking',
      description: 'Real-time location monitoring with precision accuracy. The integrated GPS module provides continuous location updates, enabling both personal navigation and emergency tracking for caregivers and family members.',
    },
    {
      icon: Smartphone,
      name: 'Voice Control',
      description: 'Advanced voice recognition system for hands-free operation. Users can control wheelchair movement, access information, and make calls entirely through natural voice commands, maximizing independence.',
    },
    {
      icon: Activity,
      name: 'Health Sensors',
      description: 'Integrated health monitoring with wearable sensors. Continuous tracking of vital signs including heart rate, temperature, and activity levels provides comprehensive health insights and alerts.',
    },
  ]

  return (
    <div className="w-full">
      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-600">About Us</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Mobility with Smart Technology
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              SmartWheel represents a significant leap forward in wheelchair technology by seamlessly integrating three 
              powerful systems into one cohesive solution. Our mission is to enhance independence, safety, and quality of 
              life for wheelchair users through intelligent innovation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By combining GPS tracking, voice control, and health monitoring, we've created a platform that doesn't just 
              move people physically—it empowers them to live more independently and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Three Technologies, One Solution
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech) => {
              const Icon = tech.icon
              return (
                <Card key={tech.name} className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <div className="p-4 bg-blue-100 rounded-lg w-fit mb-6">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.name}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {tech.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why SmartWheel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose SmartWheel?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-700 leading-relaxed">
                GPS tracking ensures you're never truly lost, and emergency contacts are just a voice command away. 
                Real-time health monitoring alerts you to potential issues before they become serious.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Independence Enabled</h3>
              <p className="text-gray-700 leading-relaxed">
                Voice control means you don't need to struggle with traditional controls. Navigate your world with 
                confidence and freedom, without constant assistance.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Insights</h3>
              <p className="text-gray-700 leading-relaxed">
                Continuous health monitoring provides valuable data about your wellness. Track trends and share reports 
                with healthcare providers for better overall care.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                All systems work together seamlessly. One device replaces the need for multiple gadgets, reducing 
                complexity and increasing reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How SmartWheel Compares
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="px-4 py-4 font-bold text-gray-900">Feature</th>
                  <th className="px-4 py-4 font-bold text-gray-900 text-center">Traditional Chair</th>
                  <th className="px-4 py-4 font-bold text-gray-900 text-center">Smartphone Only</th>
                  <th className="px-4 py-4 font-bold text-blue-600 text-center">SmartWheel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-4 text-gray-900 font-semibold">GPS Tracking</td>
                  <td className="px-4 py-4 text-center text-gray-500">✗</td>
                  <td className="px-4 py-4 text-center text-gray-500">Separate Device</td>
                  <td className="px-4 py-4 text-center text-blue-600 font-bold">✓ Integrated</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-4 text-gray-900 font-semibold">Voice Control</td>
                  <td className="px-4 py-4 text-center text-gray-500">✗</td>
                  <td className="px-4 py-4 text-center text-gray-500">Limited</td>
                  <td className="px-4 py-4 text-center text-blue-600 font-bold">✓ Full System</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-4 text-gray-900 font-semibold">Health Monitoring</td>
                  <td className="px-4 py-4 text-center text-gray-500">✗</td>
                  <td className="px-4 py-4 text-center text-gray-500">Multiple Devices</td>
                  <td className="px-4 py-4 text-center text-blue-600 font-bold">✓ Integrated</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-4 text-gray-900 font-semibold">Hands-Free Operation</td>
                  <td className="px-4 py-4 text-center text-gray-500">Manual Only</td>
                  <td className="px-4 py-4 text-center text-gray-500">Partial</td>
                  <td className="px-4 py-4 text-center text-blue-600 font-bold">✓ Complete</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 text-gray-900 font-semibold">Emergency Support</td>
                  <td className="px-4 py-4 text-center text-gray-500">Limited</td>
                  <td className="px-4 py-4 text-center text-gray-500">Manual Call</td>
                  <td className="px-4 py-4 text-center text-blue-600 font-bold">✓ Automated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl leading-relaxed text-blue-50">
            To create a world where wheelchair users enjoy the same freedom, independence, and access to 
            technology that everyone deserves. SmartWheel is the first step toward a future where assistive 
            technology is not just helpful—it's transformative.
          </p>
        </div>
      </section>
    </div>
  )
}
