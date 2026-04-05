import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users } from 'lucide-react'

export const metadata = {
  title: 'Support & Budget',
}

export default function SupportPage() {
  const supportFeatures = [
    {
      icon: Users,
      title: 'Angelica GONZALES (Leader)',
      description: 'Contact Number: 09307285667 School Email: acgonzales6674val@student.fatima.edu.ph',
    },
    {
      icon: Users,
      title: 'Caitlin Lyris PE LIM',
      description: 'Contact Number: 09762229942 School Email: clpelim6895val@studejt.fatima.edu.ph',
    },
    {
      icon: Users,
      title: 'Chloe DIAZ',
      description: 'Contact Number: 09485942066 School Email: cndiaz6634val@student.fatima.edu.ph',
    },
    {
      icon: Users,
      title: 'Louiesel Urmatan',
      description: 'Contact Number: 09641830037 School Email: lpurmatan6560val@student.fatima.edu.ph',
    },
    {
      icon: Users,
      title: 'Lovely Jane AGAM',
      description: 'Contact Number:9245124598 School Email: lbagam6362val@student.fatima.edu.ph',
    },
    {
      icon: Users,
      title: 'Dhanilette Dollisin OCAMPO',
      description: 'Contact Number:09603149160 School Email: ddocampo6567val@student.fatima.edu.ph',
    },
    {
      icon: Users,
      title: 'Christian PAMINTUAN',
      description: 'Contact Number: 09267589716 School Email: cypamintuan6259val@student.fatima.edu.ph',
    },
    {
      icon: Users,
      title: 'Howard AGUSTIN',
      description: 'Contact Number: 09624326147 School Email: haagustin5505val@student.fatima.edu.ph',
    },
    {
      icon: Users,
      title: 'Jejomar SALTARIN',
      description: 'Contact Number: 09536917295 School Email: jtsaltarin6643val@student.fatima.edu.ph',
    },
  ]

  const totalCost = 10000

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-600">Support & Budget</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Support
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">

            </p>
          </div>
        </div>
      </section>
      
		  <section className="py-10 bg-white">
			  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			    <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
					  <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
					    <h3 className="text-2xl font-bold text-gray-900 mb-4"></h3>
					    <p className="text-gray-700 leading-relaxed">
						    The project will rely on the development of a smart assistive wheelchair that will enhance the safety of individuals living with mobility disabilities. This smart assistive wheelchair will have the ability to track the location of the user through the use of the Global Positioning System, allowing the user to move around easily and safely. Additionally, the health sensors will enable the caregiver to track the health condition of the user, enabling them to access the patient’s location quickly in case of emergencies.
					    </p>
					  </div>
			    </div>
			  </div>
		  </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Estimated budget:
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-gray-700 leading-relaxed">
                    Wheelchai base - 6,000
                  </p>
                </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-gray-700 leading-relaxed">
                    GPS Module - 2,000
                  </p>
                </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-gray-700 leading-relaxed">
                    Heart Rate Sensor  - 3,000
                  </p>
                </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-gray-700 leading-relaxed">
                    Voice Recognition Module - 2,500
                  </p>
                </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-gray-700 leading-relaxed">
                    Microcontroller - 1,500
                  </p>
                </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <p className="text-gray-700 leading-relaxed">
                    Wires, connectors, installation materials, battery  - 10,000
                  </p>
                </div>
          </div>
                    
          <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-6xl mx-auto">
                <div className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="font-bold text-gray-700 leading-relaxed">
                    Total Estimated Budget: 25,000
                  </h3>
                </div>
          </div>

          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Contact Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-8 border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
                  <div className="p-4 bg-blue-100 rounded-lg w-fit mb-6">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
