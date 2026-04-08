import { Card } from '@/components/ui/card'
import { Target } from 'lucide-react'

export const metadata = {
  title: 'Purpose',
}

export default function PurposePage() {
  const descriptionStatement = [
    {
      description1: 'The purpose of this project is to raise awareness about the challenges faced by people with disabilities and how technology can help improve their daily lives. This project focuses on innovative tools such as wheelchair GPS trackers, voice-automated wheelchairs, and health sensors that can support safety, mobility, and independence. By understanding the experiences of people with disabilities, the project aims to promote empathy, inclusion, and equal opportunities. It also highlights how assistive technologies can make environments more accessible and help individuals live more independently.',
    },
    {
      description1: 'The central goal of the project is to develop and promote an assistive wheelchair system equipped with a GPS tracker, voice automation, and health sensors to improve the mobility, safety, and independence of individuals with disabilities. These technologies can help users move more easily, locate their position through GPS tracking, and control the wheelchair using voice commands. The integrated health sensors can also monitor basic health conditions, allowing caregivers or family members to respond quickly in case of emergencies.',
    },
    {
      description1: 'This project is worth the time, effort, and support of our group and sponsors because assistive technologies can significantly improve the quality of life of people with disabilities. By combining mobility support with smart monitoring and tracking features, the project aims to provide a safer and more accessible solution for individuals who rely on wheelchairs (World Health Organization, 2022; Cook & Polgar, 2015).',
    },
  ]
  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Purpose
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
                <div className="p-4 bg-green-100 rounded-lg">
                  <Target size={40} className="text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Vision</h2>
              </div>

              <div className="space-y-6">
                {descriptionStatement.map((feature) => {
                return (
                  <Card className="p-8 border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow leading-relaxed">
                    {feature.description1}
                  </Card>
                )
                })}
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
