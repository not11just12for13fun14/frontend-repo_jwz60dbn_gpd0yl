export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-white/70">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} HR NeuroVision Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#subscribe" className="hover:text-white">Subscribe</a>
            <a href="#services" className="hover:text-white">Programs</a>
            <a href="#process" className="hover:text-white">Method</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
