import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/introduction" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/purpose" className="hover:text-blue-400 transition-colors">
                  Purpose
                </Link>
              </li>
              <li>
                <Link href="/description" className="hover:text-blue-400 transition-colors">
                  Description
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-blue-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
