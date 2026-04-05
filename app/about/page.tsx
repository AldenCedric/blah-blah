import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Introduction',
}

export default function IntroductionPage() {
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

      <section className="py-15 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Introduction
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    In healthcare settings, wheelchairs are essential resources that help patients move comfortably and safely within medical facilities. However, managing these assets can be challenging because wheelchairs may be misplaced, stolen, or poorly monitored. To address this issue, technologies such as Global Positioning System (GPS) tracking have been introduced. A GPS tracking wheelchair allows healthcare staff to monitor the wheelchair’s location in real time through satellite signals and a connected mobile application. Compared with traditional wheelchairs that rely only on manual monitoring, GPS-enabled wheelchairs improve asset management by helping caregivers quickly locate lost or misplaced equipment and ensure their availability for patients when needed.
                  </p>
                </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    While GPS technology focuses on tracking and management, voice-controlled wheelchair systems focus on mobility and user independence. Human speech is one of the most natural ways people communicate, and speech recognition technology allows spoken commands to be converted into signals that can control electronic devices. For individuals with severe physical disabilities, such as paralysis, operating a wheelchair manually or through traditional controls may be difficult. Compared with conventional wheelchairs, voice-controlled systems provide a more accessible solution by allowing users to move the wheelchair simply by speaking commands into a microphone, reducing the need for physical effort and giving users greater autonomy.
                  </p>
                </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    In contrast to GPS tracking and voice-control systems, wearable sensors focus more on health monitoring rather than mobility or equipment management. Modern wearable technologies are capable of monitoring vital signs such as blood oxygen levels, breathing rate, and body temperature in real time. These sensors are designed to be flexible, accurate, and comfortable, and they can be integrated into devices such as smart watches, patches, or smart textiles. Compared with wheelchair-based technologies that primarily improve mobility and tracking, wearable sensors extend healthcare support by continuously collecting patient health data, which can assist medical professionals in monitoring conditions and detecting potential health problems early.
                  </p>
                </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    In conclusion, although GPS tracking systems, voice-controlled wheelchairs, and wearable sensors serve different functions, they all contribute to improving healthcare services for individuals with disabilities. GPS technology enhances wheelchair management and prevents loss or misuse, voice-controlled systems improve mobility and independence for individuals with severe physical limitations, and wearable sensors enable continuous health monitoring. When compared together, these technologies demonstrate how modern innovations can address different aspects of healthcare asset management, patient mobility, and health monitoring ultimately contributing to better patient care and improved quality of life.
                  </p>
                </div>
          </div>
        </div>
      </section>
    </div>
  )
}
