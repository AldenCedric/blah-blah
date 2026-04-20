import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-white/10 bg-transparent text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
          <div>
            <h3 className="mb-4 font-bold text-zinc-100">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/introduction" className="transition-colors hover:text-rose-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/purpose" className="transition-colors hover:text-rose-300">
                  Purpose
                </Link>
              </li>
              <li>
                <Link href="/description" className="transition-colors hover:text-rose-300">
                  Description
                </Link>
              </li>
              <li>
                <Link href="/support" className="transition-colors hover:text-rose-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-zinc-500">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
