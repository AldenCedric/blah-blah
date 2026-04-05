import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Zap, MapPin, Heart, Mic } from 'lucide-react'

export const metadata = {
  title: 'SmartWheel - Home',
  description: 'Discover the future of mobility with SmartWheel',
}

export default function Home() {
  return (
    <div className="w-full">
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
                    Introduction <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Description
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
