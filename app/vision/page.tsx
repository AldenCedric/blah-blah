import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Compass, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Vision, Mission & Purpose',
}

export default function VisionPage() {
  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-600">Our Direction</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Vision, Mission
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              References: World Health Organization. (2022). Assistive Technology. Cook, A. M., & Polgar, J. M. (2015). Assistive Technologies: Principles and Practice.
            </p>
          </div>
        </div>
      </section>

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
                  We envision a world where moving around and staying connected doesn’t keep anyone from having chances. With assistive technologies, people with disabilities can move freely, monitor their health, and stay in touch with their families. Features like voice-controlled wheelchairs, GPS tracking, and health sensors make it possible to travel safely, keep track of well-being, and live more independently.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Through tools like these, individuals can navigate their surroundings with greater confidence and independence. Assistive technology can make everyday life easier by helping people move around safely, monitor their health, and live more comfortably, while also giving their families peace of mind.
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Lightbulb size={80} className="text-blue-600 mx-auto mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block order-last md:order-first">
              <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Compass size={80} className="text-indigo-600 mx-auto mb-4" />
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
                  Our mission is to support and promote practical ICT-based assistive innovations that help reduce accessibility barriers for people with disabilities. This smart wheelchair concept shows how different technologies can be combined into one system to support mobility, safety, and overall well-being in everyday life.
                </p>

                <p className="text-gray-700 leading-relaxed">
                 Voice automation helps people who have difficulty using their hands control the wheelchair more easily. GPS tracking adds an extra layer of safety by helping families know that their loved ones can move around more securely. Health sensors can also provide helpful information that supports comfort and personal well-being. As students, sharing ideas like this allows us to contribute to a more supportive and inclusive community where technology helps meet the different needs of individuals and makes daily life more accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  The purpose of this project is to raise awareness about the challenges faced by people with disabilities and how technology can help improve their daily lives. This project focuses on innovative tools such as wheelchair GPS trackers, voice-automated wheelchairs, and health sensors that can support safety, mobility, and independence. By understanding the experiences of people with disabilities, the project aims to promote empathy, inclusion, and equal opportunities. It also highlights how assistive technologies can make environments more accessible and help individuals live more independently.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The central goal of the project is to develop and promote an assistive wheelchair system equipped with a GPS tracker, voice automation, and health sensors to improve the mobility, safety, and independence of individuals with disabilities. These technologies can help users move more easily, locate their position through GPS tracking, and control the wheelchair using voice commands. The integrated health sensors can also monitor basic health conditions, allowing caregivers or family members to respond quickly in case of emergencies.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  This project is worth the time, effort, and support of our group and sponsors because assistive technologies can significantly improve the quality of life of people with disabilities. By combining mobility support with smart monitoring and tracking features, the project aims to provide a safer and more accessible solution for individuals who rely on wheelchairs (World Health Organization, 2022; Cook & Polgar, 2015).
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Target size={80} className="text-green-600 mx-auto mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
