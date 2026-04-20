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
    <div className="page-shell">
      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="neon-title">Purpose</h1>
          <p className="neon-subtitle mt-4 max-w-4xl">
            References: World Health Organization. (2022). Assistive Technology. Cook, A. M., &amp; Polgar, J. M.
            (2015). Assistive Technologies: Principles and Practice.
          </p>
        </div>
      </section>

      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg p-3 bg-emerald-500/20 border border-emerald-400/40">
                  <Target size={30} className="text-emerald-300" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Purpose</h2>
              </div>

              <div className="space-y-6">
                {descriptionStatement.map((feature) => (
                  <Card key={feature.description1} className="neon-card p-7 leading-relaxed text-zinc-200">
                    <p>{feature.description1}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="neon-card h-64 md:h-full min-h-64 flex items-center justify-center">
              <Target size={96} className="text-emerald-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
