export default function Method() {
  const steps = [
    {
      title: 'Diagnose',
      copy: 'Behavioral audit and leadership interviews to identify leverage points.'
    },
    {
      title: 'Design',
      copy: 'Craft rituals, prompts, and feedback loops that make the right behavior easy.'
    },
    {
      title: 'Deliver',
      copy: 'Cohort-based training with live coaching and workplace experiments.'
    },
    {
      title: 'Deploy',
      copy: 'Embed into systems, dashboards, and manager toolkits for sustained change.'
    }
  ]

  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our approach</h2>
            <p className="mt-3 text-white/70">Rooted in neuroscience and behavior design, tuned for founders and HR leaders who need outcomes, not workshops.</p>

            <div className="mt-8 space-y-5">
              {steps.map((s) => (
                <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/80 backdrop-blur">
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{s.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-amber-500/10 p-8">
            <div className="aspect-video w-full rounded-xl bg-black/30 ring-1 ring-white/20 flex items-center justify-center text-white/60">
              Founder-friendly dashboards, habit scorecards, and cohort portals included.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
