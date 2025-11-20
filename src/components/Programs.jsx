import { Brain, Rocket, Activity, Shield } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Neuro-Leadership Accelerator',
    desc: '12-week cohort program blending neuroscience, coaching, and real-world leadership labs.'
  },
  {
    icon: Activity,
    title: 'Behavior Change Systems',
    desc: 'Habit architecture for managers and teams to make great behavior automatic.'
  },
  {
    icon: Shield,
    title: 'Resilience & Burnout Immunity',
    desc: 'Nervous-system-informed training to sustain energy, focus, and emotional regulation.'
  },
  {
    icon: Rocket,
    title: 'Culture by Design',
    desc: 'Operationalize values into day-to-day rituals, decisions, and feedback loops.'
  }
]

export default function Programs() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Programs that move the needle</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Designed like a product, delivered like a partnership. Each engagement ties to measurable behavior outcomes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur transition hover:bg-white/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-amber-400/30 text-white ring-1 ring-white/20">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
