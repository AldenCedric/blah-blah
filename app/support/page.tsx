import { Card } from '@/components/ui/card'
import { Mail, Phone, Users } from 'lucide-react'

export const metadata = {
  title: 'Support & Budget',
}

export default function SupportPage() {
  const contacts = [
    {
      icon1: Users,
      name: 'Angelica GONZALES',
      phoneNumber: '+63 930 728 5667',
      email: 'acgonzales6674val@student.fatima.edu.ph',
    },
    {
      icon1: Users,
      name: 'Caitlin Lyris PE LIM',
      phoneNumber: '+63 976 222 9942',
      email: 'clpelim6895val@studejt.fatima.edu.ph',
    },
    {
      icon1: Users,
      name: 'Chloe DIAZ',
      phoneNumber: '+63 948 594 2066',
      email: 'cndiaz6634val@student.fatima.edu.ph',
    },
    {
      icon1: Users,
      name: 'Louiesel Urmatan',
      phoneNumber: '+63 964 183 0037',
      email: 'lpurmatan6560val@student.fatima.edu.ph',
    },
    {
      icon1: Users,
      name: 'Lovely Jane AGAM',
      phoneNumber: '+63 924 512 4598',
      email: 'lbagam6362val@student.fatima.edu.ph',
    },
    {
      icon1: Users,
      name: 'Dhanilette Dollisin OCAMPO',
      phoneNumber: '+63 960 314 9160',
      email: 'ddocampo6567val@student.fatima.edu.ph',
    },
    {
      icon1: Users,
      name: 'Christian PAMINTUAN',
      phoneNumber: '+63 926 758 9716',
      email: 'cypamintuan6259val@student.fatima.edu.ph',
    },
    {
      icon1: Users,
      name: 'Howard AGUSTIN',
      phoneNumber: '+63 962 432 6147',
      email: 'haagustin5505val@student.fatima.edu.ph',
    },
    {
      icon1: Users,
      name: 'Jejomar SALTARIN',
      phoneNumber: '+63 953 691 7295',
      email: 'jtsaltarin6643val@student.fatima.edu.ph',
    },
  ]

  const prices = [
    {
      item: 'Wheelchair base',
      cost: ' - 6,000',
    },
    {
      item: 'GPS Module ',
      cost: ' - 2,000',
    },
    {
      item: 'Heart Rate Sensor',
      cost: ' - 3,000',
    },
    {
      item: 'Voice Recognition Module',
      cost: ' - 2,500',
    },
    {
      item: 'Microcontroller',
      cost: ' - 1,500',
    },
    {
      item: 'Wires, connectors, installation materials, battery',
      cost: ' - 10,000',
    },
  ]

  const totalPrices = [
    {
      totalItem: 'Total Estimated Budget',
      totalCost: ' = 25,000',
    },
  ]

  return (
    <div className="w-full">
      <section className="py-20 border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Support & Budget
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            The project will rely on the development of a smart assistive wheelchair that will enhance the safety of individuals living with mobility disabilities. This smart assistive wheelchair will have the ability to track the location of the user through the use of the Global Positioning System, allowing the user to move around easily and safely. Additionally, the health sensors will enable the caregiver to track the health condition of the user, enabling them to access the patient’s location quickly in case of emergencies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-20 border-0 grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              {totalPrices.map((feature) => (
                <Card key={feature.totalItem} className="p-8 border-0 bg-gradient-to-r from-green-50 to-green-50 hover:shadow-lg transition-shadow justify-self-center">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{feature.totalItem}</h2>
                  </div>
    
                  <div className="space-y-3 border-t border-gray-200 pt-6">
                    <p className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                    {feature.totalCost}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
          {prices.map((feature) => (
              <Card key={feature.item} className="p-8 border-0 bg-gradient-to-r from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{feature.item}</h2>
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <p className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors">
                  {feature.cost}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact Information
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contacts.map((member) => (
              <Card key={member.name} className="p-8 border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-shadow">
                <div className="mb-4">
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mb-4">

                <span className="text-white font-bold text-lg">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>

                </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm break-all">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phoneNumber.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="text-sm">{member.phoneNumber}</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
