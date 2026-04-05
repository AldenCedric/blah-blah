import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Description',
}

export default function FeaturesPage() {
  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-600">Features</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Description
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    In this project, we decided to add a new technology that differs from existing wheelchairs called the Health Monitoring Sensor. This device is designed to improve both mobility and health security for those with disabilities, senior citizens, and individuals with medical issues. This advanced wheelchair features integrated medical sensors that constantly tracks the user’s vital signs while they remained seated.
                  </p>
                </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    The wheelchair incorporates biometric sensors located in the armrests, seat, and backrest to track vital signs including heart rate, body temperature, blood oxygen levels, and posture. The gathered data is shown on a compact digital display mounted on the wheelchair that can be accessed by a mobile application or hospital monitoring system via Bluetooth or Wi-Fi.
                  </p>
                </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    The wheelchair is also capable of sending automatic notifications to families, caregivers, or healthcare providers. This ensures that users get prompt assistance when required.
                  </p>
                </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    The wheelchair that will be developed for the project will be a voice-controlled device for people with severe physical disabilities. The speech recognition technology will enable the wheelchair to recognize voice commands such as forward, backwards, right, and left. The voice commands will then be converted to the actual physical movements of the wheelchair.
                  </p>
                </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
                  <p className="text-gray-700 leading-relaxed">
                    The wheelchair will also be equipped with a GPS tracking device and a health monitoring device. The GPS tracking device will enable the caregiver or the family of the user to track the user’s current location. The health monitoring device will enable the user to get data regarding the potential adverse heart health conditions. The wheelchair will send an SOS message with the current GPS position of the user to the caregiver or the family of the user in case the health monitoring device detects an abnormal heart rate or the heart rate has suddenly decreased.
                  </p>
                </div>
          </div>
        </div>
      </section>
    </div>
  )
}
