import { useState } from 'react'

export default function Subscribe() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name') || undefined,
      email: form.get('email'),
      company: form.get('company') || undefined,
      role: form.get('role') || undefined,
      interests: form.getAll('interests') || undefined
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Subscription failed')
      const data = await res.json()
      setMessage(data.message || 'Thanks for subscribing!')
      e.currentTarget.reset()
    } catch (err) {
      setMessage('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="subscribe" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold text-white text-center">Subscribe for founder-grade insights</h2>
          <p className="mt-2 text-white/70 text-center">Get case studies, playbooks, and early access to program cohorts.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />
            <input name="email" type="email" required placeholder="Work email" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />
            <input name="company" placeholder="Company" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />
            <input name="role" placeholder="Role" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />

            <div className="sm:col-span-2 grid grid-cols-2 gap-3 text-white/80 text-sm">
              {['Leadership', 'Behavior', 'Resilience', 'Culture'].map((i) => (
                <label key={i} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <input type="checkbox" name="interests" value={i} className="accent-fuchsia-500" />
                  {i}
                </label>
              ))}
            </div>

            <button disabled={loading} className="sm:col-span-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              {loading ? 'Submitting...' : 'Subscribe Now'}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-white/90">{message}</p>
          )}
        </div>
      </div>
    </section>
  )
}
