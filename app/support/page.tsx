import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DollarSign, Zap, Wrench, Award, HelpCircle, Users } from 'lucide-react'

export const metadata = {
  title: 'Support & Budget - SmartWheel',
  description: 'Learn about SmartWheel support services and detailed budget breakdown',
}

export default function SupportPage() {
  const budgetItems = [
    {
      category: 'Wheelchair Base Unit',
      description: 'High-quality, durable wheelchair frame with reinforced structure',
      cost: '$3,500',
      percentage: 35,
    },
    {
      category: 'GPS Module & Antennas',
      description: 'Professional-grade GPS receiver with multi-band antennas for accuracy',
      cost: '$800',
      percentage: 8,
    },
    {
      category: 'Voice Control System',
      description: 'Advanced microphone arrays and voice recognition processor',
      cost: '$1,200',
      percentage: 12,
    },
    {
      category: 'Health Sensors Package',
      description: 'Heart rate monitor, blood oxygen, temperature, and activity sensors',
      cost: '$900',
      percentage: 9,
    },
    {
      category: 'Battery & Power System',
      description: 'Long-life lithium battery pack with power management system',
      cost: '$700',
      percentage: 7,
    },
    {
      category: 'Control Unit & Electronics',
      description: 'Central processing unit with communication modules',
      cost: '$1,100',
      percentage: 11,
    },
    {
      category: 'Software & Integration',
      description: 'Embedded software, cloud platform, and mobile app',
      cost: '$800',
      percentage: 8,
    },
    {
      category: 'Testing & Quality Assurance',
      description: 'Rigorous testing and certification to safety standards',
      cost: '$600',
      percentage: 6,
    },
    {
      category: 'Manufacturing & Assembly',
      description: 'Labor and assembly costs',
      cost: '$500',
      percentage: 5,
    },
  ]

  const supportFeatures = [
    {
      icon: Users,
      title: '24/7 Customer Support',
      description: 'Round-the-clock technical support via phone, email, and chat. Our expert team is always ready to help.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Comprehensive warranty covering parts and labor. Access to certified repair centers nationwide.',
    },
    {
      icon: Award,
      title: 'Training & Education',
      description: 'In-home training sessions and online tutorials to maximize your SmartWheel experience.',
    },
    {
      icon: HelpCircle,
      title: 'Troubleshooting Guides',
      description: 'Extensive documentation, video guides, and step-by-step troubleshooting resources.',
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
              System Support & Cost Breakdown
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Transparent pricing and comprehensive support services designed to ensure your success with SmartWheel.
            </p>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Comprehensive Support Services
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We&apos;re committed to your success. Our support services ensure you get the most out of your SmartWheel system.
          </p>

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

      {/* Budget Summary Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Estimated Total System Cost
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Detailed breakdown of the SmartWheel system components and associated costs
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-0 bg-white text-center">
              <DollarSign size={40} className="text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Total System Cost</p>
              <p className="text-4xl font-bold text-blue-600">${(totalCost / 1000).toFixed(1)}K</p>
            </Card>

            <Card className="p-8 border-0 bg-white text-center">
              <Award size={40} className="text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Financing Available</p>
              <p className="text-2xl font-bold text-green-600">Yes</p>
              <p className="text-sm text-gray-600 mt-2">12-24 month plans</p>
            </Card>

            <Card className="p-8 border-0 bg-white text-center">
              <Zap size={40} className="text-orange-600 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">3-Year Warranty</p>
              <p className="text-2xl font-bold text-orange-600">Included</p>
              <p className="text-sm text-gray-600 mt-2">Full coverage</p>
            </Card>
          </div>

          {/* Detailed Budget Breakdown */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Component Breakdown</h3>

              <div className="space-y-6">
                {budgetItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{item.category}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-blue-600 ml-4">{item.cost}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{item.percentage}% of total</p>
                  </div>
                ))}
              </div>

              {/* Total Row */}
              <div className="mt-8 pt-8 border-t-2 border-gray-300 flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">Total Estimated Cost</span>
                <span className="text-3xl font-bold text-blue-600">$10,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Financing Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border border-gray-200 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">12-Month Plan</h3>
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">Monthly Payment</p>
                <p className="text-3xl font-bold text-blue-600">$850</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>0% interest for 12 months</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Early payment option</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Flexible payment dates</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-white relative">
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">18-Month Plan</h3>
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">Monthly Payment</p>
                <p className="text-3xl font-bold text-blue-600">$580</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>0% interest for 18 months</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Lowest monthly payment</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Extra 3-month warranty</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border border-gray-200 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24-Month Plan</h3>
              <div className="mb-6">
                <p className="text-gray-600 text-sm mb-2">Monthly Payment</p>
                <p className="text-3xl font-bold text-blue-600">$420</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>0% interest for 24 months</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Maximum budget flexibility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Extended 5-year warranty</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance & Assistance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Insurance & Financial Assistance
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 border-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medicare Coverage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SmartWheel is eligible for Medicare reimbursement in many cases. As a classified medical device, 
                portions of the cost may be covered depending on medical necessity and your specific plan.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Estimated coverage: 40-60% of system cost</p>
            </Card>

            <Card className="p-8 border-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Private Insurance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many private insurance plans cover assistive technology. We work with major insurers and can assist 
                with documentation and prior authorization requirements.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Check with your provider for details</p>
            </Card>
          </div>

          <Card className="p-8 border-0 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Assistance Programs</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Non-Profit Grants</h4>
                <p className="text-gray-700 text-sm">Eligible individuals may qualify for grants from disability-focused organizations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vocational Rehabilitation</h4>
                <p className="text-gray-700 text-sm">VR programs often cover mobility devices that enable employment.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Veteran Benefits</h4>
                <p className="text-gray-700 text-sm">Veterans may be eligible for VA healthcare coverage.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is included in the warranty?',
                a: 'All SmartWheel systems come with a 3-year comprehensive warranty covering parts, labor, and software updates. Extended warranties up to 5 years are available.',
              },
              {
                q: 'Do you offer training and setup?',
                a: 'Yes! We provide in-home training for new users, online tutorials, and ongoing support. Training is included with every purchase.',
              },
              {
                q: 'What if something breaks?',
                a: 'We have certified repair centers nationwide. Emergency repairs are prioritized, and warranty coverage typically includes repair or replacement.',
              },
              {
                q: 'Are software updates included?',
                a: 'Yes, all software updates and improvements are included free for the lifetime of your device.',
              },
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
