import { Card } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'

export const metadata = {
  title: 'Support & Budget',
}

export default function SupportPage() {
  const contacts = [
    {
      name: 'Angelica GONZALES',
      phoneNumber: '+63 930 728 5667',
      email: 'acgonzales6674val@student.fatima.edu.ph',
    },
    {
      name: 'Caitlin Lyris PE LIM',
      phoneNumber: '+63 976 222 9942',
      email: 'clpelim6895val@studejt.fatima.edu.ph',
    },
    {
      name: 'Chloe DIAZ',
      phoneNumber: '+63 948 594 2066',
      email: 'cndiaz6634val@student.fatima.edu.ph',
    },
    {
      name: 'Louiesel Urmatan',
      phoneNumber: '+63 964 183 0037',
      email: 'lpurmatan6560val@student.fatima.edu.ph',
    },
    {
      name: 'Lovely Jane AGAM',
      phoneNumber: '+63 924 512 4598',
      email: 'lbagam6362val@student.fatima.edu.ph',
    },
    {
      name: 'Dhanilette Dollisin OCAMPO',
      phoneNumber: '+63 960 314 9160',
      email: 'ddocampo6567val@student.fatima.edu.ph',
    },
    {
      name: 'Christian PAMINTUAN',
      phoneNumber: '+63 926 758 9716',
      email: 'cypamintuan6259val@student.fatima.edu.ph',
    },
    {
      name: 'Howard AGUSTIN',
      phoneNumber: '+63 962 432 6147',
      email: 'haagustin5505val@student.fatima.edu.ph',
    },
    {
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
      cost: ' - 3,000',
    },
    {
      item: 'Heart Rate Sensor',
      cost: ' - 30,000',
    },
    {
      item: 'Voice Recognition Module',
      cost: ' - 20,000',
    },
    {
      item: 'Microcontroller',
      cost: ' - 3,500',
    },
    {
      item: 'Wires, connectors, installation materials, battery',
      cost: ' - 50,000',
    },
  ]

  const totalPrices = [
    {
      totalItem: 'Total Estimated Budget',
      totalCost: ' = 112,500',
    },
  ]

  return (
    <div className="page-shell">
      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="neon-title">Support and Budget</h1>
          <p className="neon-subtitle mt-4 max-w-4xl">
            
          </p>
        </div>
      </section>

      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            {totalPrices.map((feature) => (
              <Card key={feature.totalItem} className="neon-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">{feature.totalItem}</h2>
                <p className="text-3xl font-semibold text-emerald-300">{feature.totalCost}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prices.map((feature) => (
              <Card key={feature.item} className="neon-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{feature.item}</h3>
                <p className="text-rose-300 font-medium">{feature.cost}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel alt-section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((member) => (
              <Card key={member.name} className="neon-card p-7">
                <div className="mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-fuchsia-600 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-4">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-zinc-300 hover:text-rose-300 transition-colors">
                    <Mail size={18} />
                    <span className="text-sm break-all">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phoneNumber.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 text-zinc-300 hover:text-rose-300 transition-colors"
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
