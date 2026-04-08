import { Badge } from '@/components/ui/badge'
import { Compass, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Introduction',
}

export default function IntroductionPage() {
  const introductionStatements = [
    {
      description1: 'In healthcare settings, wheelchairs are essential resources that help patients move comfortably and safely within medical facilities. However, managing these assets can be challenging because wheelchairs may be misplaced, stolen, or poorly monitored. To address this issue, technologies such as Global Positioning System (GPS) tracking have been introduced. A GPS tracking wheelchair allows healthcare staff to monitor the wheelchair’s location in real time through satellite signals and a connected mobile application. Compared with traditional wheelchairs that rely only on manual monitoring, GPS-enabled wheelchairs improve asset management by helping caregivers quickly locate lost or misplaced equipment and ensure their availability for patients when needed.',
    },
    {
      description1: 'While GPS technology focuses on tracking and management, voice-controlled wheelchair systems focus on mobility and user independence. Human speech is one of the most natural ways people communicate, and speech recognition technology allows spoken commands to be converted into signals that can control electronic devices. For individuals with severe physical disabilities, such as paralysis, operating a wheelchair manually or through traditional controls may be difficult. Compared with conventional wheelchairs, voice-controlled systems provide a more accessible solution by allowing users to move the wheelchair simply by speaking commands into a microphone, reducing the need for physical effort and giving users greater autonomy.',
    },
    {
      description1: 'In contrast to GPS tracking and voice-control systems, wearable sensors focus more on health monitoring rather than mobility or equipment management. Modern wearable technologies are capable of monitoring vital signs such as blood oxygen levels, breathing rate, and body temperature in real time. These sensors are designed to be flexible, accurate, and comfortable, and they can be integrated into devices such as smart watches, patches, or smart textiles. Compared with wheelchair-based technologies that primarily improve mobility and tracking, wearable sensors extend healthcare support by continuously collecting patient health data, which can assist medical professionals in monitoring conditions and detecting potential health problems early.',
    },
    {
      description1: 'In conclusion, although GPS tracking systems, voice-controlled wheelchairs, and wearable sensors serve different functions, they all contribute to improving healthcare services for individuals with disabilities. GPS technology enhances wheelchair management and prevents loss or misuse, voice-controlled systems improve mobility and independence for individuals with severe physical limitations, and wearable sensors enable continuous health monitoring. When compared together, these technologies demonstrate how modern innovations can address different aspects of healthcare asset management, patient mobility, and health monitoring ultimately contributing to better patient care and improved quality of life.',
    },
  ]

  const visionStatements = [
    {
      description2: 'We envision a world where moving around and staying connected doesn’t keep anyone from having chances. With assistive technologies, people with disabilities can move freely, monitor their health, and stay in touch with their families. Features like voice-controlled wheelchairs, GPS tracking, and health sensors make it possible to travel safely, keep track of well-being, and live more independently.',
    },
    {
      description2: 'Through tools like these, individuals can navigate their surroundings with greater confidence and independence. Assistive technology can make everyday life easier by helping people move around safely, monitor their health, and live more comfortably, while also giving their families peace of mind.',
    },
  ]

  const missionStatements = [
    {
      description3: 'Our mission is to support and promote practical ICT-based assistive innovations that help reduce accessibility barriers for people with disabilities. This smart wheelchair concept shows how different technologies can be combined into one system to support mobility, safety, and overall well-being in everyday life.',
    },
    {
      description3: 'Voice automation helps people who have difficulty using their hands control the wheelchair more easily. GPS tracking adds an extra layer of safety by helping families know that their loved ones can move around more securely. Health sensors can also provide helpful information that supports comfort and personal well-being. As students, sharing ideas like this allows us to contribute to a more supportive and inclusive community where technology helps meet the different needs of individuals and makes daily life more accessible.',
    },
  ]

  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-600">Title</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              A Smart Wheelchair Solution for Improving Safety and Mobility of Persons with Disabilities
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-rows-2 gap-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Introduction
          </h2>
            {introductionStatements.map((feature) => {
              return (
                <p className="text-gray-700 leading-relaxed">{feature.description1}</p>
              )
            })}
          </div>
        </div>
      </section>

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
                {visionStatements.map((feature) => {
                return (
                <p className="text-gray-700 leading-relaxed">{feature.description2}</p>
                )
                })}
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
                {missionStatements.map((feature) => {
                return (
                <p className="text-gray-700 leading-relaxed">{feature.description3}</p>
                )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
