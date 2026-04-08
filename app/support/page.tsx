import { Card } from '@/components/ui/card'
import { Users } from 'lucide-react'

export const metadata = {
  title: 'Support & Budget',
}

export default function SupportPage() {
  const contacts = [
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

  const prices = [
    {
      title2: 'Wheelchair base',
      description2: ' - 6,000',
    },
    {
      title2: 'GPS Module ',
      description2: ' - 2,000',
    },
    {
      title2: 'Heart Rate Sensor',
      description2: ' - 3,000',
    },
    {
      title2: 'Voice Recognition Module',
      description2: ' - 2,500',
    },
    {
      title2: 'Microcontroller',
      description2: ' - 1,500',
    },
    {
      title2: 'Wires, connectors, installation materials, battery',
      description2: ' - 10,000',
    },
  ]

  const totalPrices = [
    {
      title3: 'Total Estimated Budget',
      description3: ' = 25,000',
    },
  ]

  return (
    <div className="w-full">
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Support & Budget
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              The project will rely on the development of a smart assistive wheelchair that will enhance the safety of individuals living with mobility disabilities. This smart assistive wheelchair will have the ability to track the location of the user through the use of the Global Positioning System, allowing the user to move around easily and safely. Additionally, the health sensors will enable the caregiver to track the health condition of the user, enabling them to access the patient’s location quickly in case of emergencies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Estimated Budget
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((feature) => {
              return (
                <Card key={feature.title2} className="p-8 border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title2}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description2}</p>
                </Card>
              )
            })}

            {totalPrices.map((feature) => {
              return (
                <Card key={feature.title3} className="p-8 border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title3}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description3}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Contact Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contacts.map((feature) => {
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
