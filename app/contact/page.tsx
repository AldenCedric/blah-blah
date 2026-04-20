'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Project Lead & Chief Engineer',
      email: 'sarah.johnson@smartwheel.com',
      phone: '+1 (555) 123-4501',
      bio: 'PhD in Robotics and Biomedical Engineering with 15 years of experience in assistive technology.',
      specialty: 'System Architecture & Innovation',
    },
    {
      name: 'Michael Chen',
      role: 'GPS & Navigation Specialist',
      email: 'michael.chen@smartwheel.com',
      phone: '+1 (555) 123-4502',
      bio: 'Expert in GPS technology and autonomous navigation systems. Former lead engineer at navigation tech company.',
      specialty: 'Location Services & Mapping',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Voice Control & AI Engineer',
      email: 'emily.rodriguez@smartwheel.com',
      phone: '+1 (555) 123-4503',
      bio: 'Specializes in voice recognition and natural language processing. 10+ years in AI/ML development.',
      specialty: 'Voice Systems & Machine Learning',
    },
    {
      name: 'Dr. James Williams',
      role: 'Health Systems & Sensors Lead',
      email: 'james.williams@smartwheel.com',
      phone: '+1 (555) 123-4504',
      bio: 'MD with research background in biomedical sensors. Ensures all health monitoring meets medical standards.',
      specialty: 'Health Monitoring & Medical Compliance',
    },
    {
      name: 'Lisa Patterson',
      role: 'Customer Support Manager',
      email: 'lisa.patterson@smartwheel.com',
      phone: '+1 (555) 123-4505',
      bio: 'Dedicated to ensuring every customer has an excellent experience. Advocates for user feedback.',
      specialty: 'Customer Relations & Support',
    },
    {
      name: 'David Kim',
      role: 'Software & Integration Engineer',
      email: 'david.kim@smartwheel.com',
      phone: '+1 (555) 123-4506',
      bio: 'Full-stack developer focused on integrating all SmartWheel systems seamlessly.',
      specialty: 'Cloud Integration & Software Development',
    },
  ]

  return (
    <div className="page-shell">
      <section className="section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="neon-tag mb-4">Get In Touch</Badge>
            <h1 className="neon-title mb-6">
              Contact SmartWheel
            </h1>
            <p className="neon-subtitle text-lg leading-relaxed">
              Have questions about SmartWheel? We&apos;d love to hear from you. Reach out to our team directly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zinc-100 mb-12 text-center">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="neon-card p-8 text-center">
              <div className="inline-block p-4 bg-rose-500/15 rounded-lg mb-4 border border-rose-300/30">
                <Mail size={32} className="text-rose-300" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Email</h3>
              <p className="text-zinc-400 mb-4">We respond within 24 hours</p>
              <a href="mailto:info@smartwheel.com" className="text-rose-300 font-semibold hover:text-rose-200">
                info@smartwheel.com
              </a>
            </Card>

            <Card className="neon-card p-8 text-center">
              <div className="inline-block p-4 bg-emerald-500/15 rounded-lg mb-4 border border-emerald-300/30">
                <Phone size={32} className="text-emerald-300" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Phone</h3>
              <p className="text-zinc-400 mb-4">Available 24/7 for emergencies</p>
              <a href="tel:+15551234567" className="text-emerald-300 font-semibold hover:text-emerald-200">
                +1 (555) 123-4567
              </a>
            </Card>

            <Card className="neon-card p-8 text-center">
              <div className="inline-block p-4 bg-fuchsia-500/15 rounded-lg mb-4 border border-fuchsia-300/30">
                <MapPin size={32} className="text-fuchsia-300" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Headquarters</h3>
              <p className="text-zinc-400">Tech Innovation Hub</p>
              <p className="text-fuchsia-300 font-semibold">San Francisco, USA</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zinc-100 mb-12 text-center">
            Send Us a Message
          </h2>

          <Card className="neon-card p-8 md:p-12">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-emerald-500/20 border border-emerald-300/30 rounded-full">
                    <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-100 mb-2">Message Sent!</h3>
                <p className="text-zinc-300">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-zinc-200 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900/80 border border-white/15 rounded-lg text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-zinc-200 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900/80 border border-white/15 rounded-lg text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-zinc-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900/80 border border-white/15 rounded-lg text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-zinc-200 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900/80 border border-white/15 rounded-lg text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-zinc-200 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900/80 border border-white/15 rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Information</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-zinc-200 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-zinc-900/80 border border-white/15 rounded-lg text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-500 text-white py-3 text-lg font-semibold">
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      <section className="section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zinc-100 mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-xl text-zinc-400 text-center mb-16 max-w-3xl mx-auto">
            Dedicated professionals committed to advancing wheelchair technology and improving lives.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="neon-card p-8">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-fuchsia-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-1">{member.name}</h3>
                  <p className="text-rose-300 font-semibold text-sm mb-1">{member.role}</p>
                  <p className="text-zinc-400 text-sm mb-4">{member.specialty}</p>
                </div>

                <p className="text-zinc-300 text-sm mb-6 leading-relaxed">{member.bio}</p>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-zinc-300 hover:text-rose-300 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm break-all">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 text-zinc-300 hover:text-rose-300 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zinc-100 mb-12 text-center">
            Other Ways to Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="neon-card p-8">
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">Business Hours</h3>
              <div className="space-y-3 text-zinc-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-white/10 text-rose-300 font-semibold">
                  <span>Emergency Support</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </Card>

            <Card className="neon-card p-8">
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="/" className="block text-zinc-300 hover:text-rose-300 font-semibold">
                  → Home
                </a>
                <a href="/about" className="block text-zinc-300 hover:text-rose-300 font-semibold">
                  → About SmartWheel
                </a>
                <a href="/features" className="block text-zinc-300 hover:text-rose-300 font-semibold">
                  → Product Features
                </a>
                <a href="/support" className="block text-zinc-300 hover:text-rose-300 font-semibold">
                  → Support & Pricing
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
