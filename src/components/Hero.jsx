import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
          HR • Neuroscience • Performance
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Build resilient, high-performing teams with science-backed training
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80">
          Practical neuro-leadership programs, behavior change systems, and culture design for modern organizations.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#subscribe" className="pointer-events-auto inline-flex items-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow">
            Subscribe Now
          </a>
          <a href="#services" className="pointer-events-auto inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/20">
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  )
}
