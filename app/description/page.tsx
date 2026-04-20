import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'Description',
}

export default function DescriptionPage() {
  const descriptionStatement = [
    {
      description1: 'In this project, we decided to add a new technology that differs from existing wheelchairs called the Health Monitoring Sensor. This device is designed to improve both mobility and health security for those with disabilities, senior citizens, and individuals with medical issues. This advanced wheelchair features integrated medical sensors that constantly tracks the user’s vital signs while they remained seated.',
    },
    {
      description1: 'The wheelchair incorporates biometric sensors located in the armrests, seat, and backrest to track vital signs including heart rate, body temperature, blood oxygen levels, and posture. The gathered data is shown on a compact digital display mounted on the wheelchair that can be accessed by a mobile application or hospital monitoring system via Bluetooth or Wi-Fi.',
    },
    {
      description1: 'The wheelchair is also capable of sending automatic notifications to families, caregivers, or healthcare providers. This ensures that users get prompt assistance when required.',
    },
    {
      description1: 'The wheelchair that will be developed for the project will be a voice-controlled device for people with severe physical disabilities. The speech recognition technology will enable the wheelchair to recognize voice commands such as forward, backwards, right, and left. The voice commands will then be converted to the actual physical movements of the wheelchair.',
    },
    {
      description1: 'The wheelchair will also be equipped with a GPS tracking device and a health monitoring device. The GPS tracking device will enable the caregiver or the family of the user to track the user’s current location. The health monitoring device will enable the user to get data regarding the potential adverse heart health conditions. The wheelchair will send an SOS message with the current GPS position of the user to the caregiver or the family of the user in case the health monitoring device detects an abnormal heart rate or the heart rate has suddenly decreased.',
    },
    {
      description1: 'We can also apply the placement of a camera that will monitor the wheelchair in a specific place where the wheelchair is placed.',
    },
  ]

  return (
    <div className="page-shell">
      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="neon-title">Description</h1>
          <p className="neon-subtitle mt-4 max-w-3xl">
            
          </p>
        </div>
      </section>

      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {descriptionStatement.map((feature) => (
              <Card key={feature.description1} className="neon-card p-7 leading-relaxed text-zinc-200">
                <p>{feature.description1}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
