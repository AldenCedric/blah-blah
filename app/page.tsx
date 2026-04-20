import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Compass, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Home',
}

export default function Home() {
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
    <div className="page-shell">
      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="neon-tag mb-4">Smart Wheelchair Project</Badge>
          <h1 className="neon-title max-w-4xl">
            A Smart Wheelchair Solution for Improving Safety and Mobility of Persons with Disabilities
          </h1>
        </div>
      </section>

      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Introduction</h2>
          <div className="space-y-6">
            {introductionStatements.map((feature) => (
              <Card key={feature.description1} className="neon-card p-7 leading-relaxed text-zinc-200">
                <p>{feature.description1}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="neon-tag mb-4">Our Direction</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mission and Vision</h2>
          <p className="text-zinc-300">
            References: World Health Organization. (2022). Assistive Technology. Cook, A. M., &amp; Polgar, J. M.
            (2015). Assistive Technologies: Principles and Practice.
          </p>
        </div>
      </section>

      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="neon-card h-64 flex items-center justify-center">
              <Compass size={96} className="text-rose-400" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg p-3 bg-rose-500/20 border border-rose-400/40">
                  <Compass size={30} className="text-rose-300" />
                </div>
                <h3 className="text-3xl font-bold text-white">Mission</h3>
              </div>
              <div className="space-y-5">
                {missionStatements.map((feature) => (
                  <Card key={feature.description3} className="neon-card p-6 leading-relaxed text-zinc-200">
                    <p>{feature.description3}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg p-3 bg-fuchsia-500/20 border border-fuchsia-400/40">
                  <Lightbulb size={30} className="text-fuchsia-300" />
                </div>
                <h3 className="text-3xl font-bold text-white">Vision</h3>
              </div>
              <div className="space-y-5">
                {visionStatements.map((feature) => (
                  <Card key={feature.description2} className="neon-card p-6 leading-relaxed text-zinc-200">
                    <p>{feature.description2}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="neon-card h-64 flex items-center justify-center">
              <Lightbulb size={96} className="text-fuchsia-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
