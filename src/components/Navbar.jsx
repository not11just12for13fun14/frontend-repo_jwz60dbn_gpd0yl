import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Programs' },
    { href: '#process', label: 'Method' },
    { href: '#about', label: 'Why Us' },
    { href: '#subscribe', label: 'Subscribe' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur border border-white/10 px-4 py-3 text-white">
          <a href="#" className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="HR Vision" className="h-8 w-8" />
            <span className="font-semibold tracking-tight">HR NeuroVision</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#subscribe" className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow">
              Subscribe Now
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="mt-2 rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-4 text-white">
            <div className="grid gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#subscribe" onClick={() => setOpen(false)} className="block text-center rounded-lg px-3 py-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 font-semibold">
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
