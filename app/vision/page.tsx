import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Compass, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Vision, Mission & Purpose - SmartWheel',
  description: 'Learn about SmartWheels vision, mission, and core purpose for advancing wheelchair technology',
}

export default function VisionPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-600">Our Direction</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Vision, Mission & Purpose
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Understanding the core principles that drive SmartWheel's development and commitment to users.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-100 rounded-lg">
                  <Lightbulb size={40} className="text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Vision</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our vision is to create a world where advanced technology is seamlessly integrated into mobility 
                  solutions, enabling wheelchair users to live with unprecedented independence, security, and dignity.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We envision a future where assistive devices are not limitations but gateways to opportunity. Where 
                  a person's physical challenges do not define their access to the world, and where technology becomes 
                  an invisible bridge connecting users to their communities.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <h3 className="font-bold text-gray-900 mb-2">Core Vision</h3>
                  <p className="text-gray-700">
                    {`"Technology that empowers, not restricts. A world where every wheelchair user experiences 
                    the freedom they deserve."`}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Lightbulb size={80} className="text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-900 font-semibold">Innovative Mobility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block order-last md:order-first">
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Compass size={80} className="text-indigo-600 mx-auto mb-4" />
                  <p className="text-gray-900 font-semibold">Clear Direction</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-indigo-100 rounded-lg">
                  <Compass size={40} className="text-indigo-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Mission</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to develop and deploy advanced wheelchair systems that seamlessly integrate GPS 
                  tracking, voice control, and health monitoring—delivering practical solutions that enhance safety, 
                  independence, and quality of life.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We are committed to making SmartWheel accessible, affordable, and reliable. Every feature is 
                  designed with the user in mind, tested rigorously, and continuously improved based on real-world 
                  feedback and emerging technology.
                </p>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">Develop cutting-edge assistive technology</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">Ensure accessibility and affordability</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">Support users with comprehensive documentation</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-700">Foster a community of innovation and support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-green-100 rounded-lg">
                  <Target size={40} className="text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Purpose</h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The purpose of SmartWheel is multifaceted—to solve real problems, create genuine value, and 
                  make a measurable difference in the lives of wheelchair users and their families.
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Safety & Security</h3>
                    <p className="text-gray-700">
                      GPS tracking and emergency features provide peace of mind for users and caregivers, 
                      ensuring help is always available when needed.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Independence & Empowerment</h3>
                    <p className="text-gray-700">
                      Voice control and intelligent systems reduce dependence on external assistance, 
                      enabling users to control their own mobility and lives.
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Health & Wellness</h3>
                    <p className="text-gray-700">
                      Integrated health monitoring provides valuable insights and early warning systems, 
                      enabling proactive health management and better outcomes.
                    </p>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">Social Connection</h3>
                    <p className="text-gray-700">
                      By enhancing mobility and reducing barriers, SmartWheel helps users participate 
                      more fully in community and social activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Target size={80} className="text-green-600 mx-auto mb-4" />
                  <p className="text-gray-900 font-semibold">Clear Objectives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">User-Centric Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Every decision we make is guided by the needs and experiences of wheelchair users. We listen, 
                learn, and iterate continuously.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation & Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                We pursue cutting-edge technology and best practices, refusing to settle for good enough when 
                we can deliver great.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility & Inclusivity</h3>
              <p className="text-gray-700 leading-relaxed">
                Technology should be for everyone. We're committed to making SmartWheel accessible, affordable, 
                and easy to use.
              </p>
            </Card>

            <Card className="p-8 border-0 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity & Trust</h3>
              <p className="text-gray-700 leading-relaxed">
                We operate with transparency and honesty, respecting user privacy and delivering on our promises 
                with dependable systems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-50 mb-8">
            We're building the future of mobility, and we'd love to have you be part of it. 
            Learn more about SmartWheel and how we can help you or a loved one.
          </p>
        </div>
      </section>
    </div>
  )
}
