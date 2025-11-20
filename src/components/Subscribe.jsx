import { useState } from 'react'
import { motion } from 'framer-motion'

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
      setMessage(data.message || 'You’re in. Check your email for next steps!')
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
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <h2 className="text-3xl font-bold text-white text-center">Ready to turn ideas into income—without fighting your brain?</h2>
          <p className="mt-2 text-white/70 text-center">Join the Dyslexic Women in Business waitlist for playbooks, templates, and cohort invites.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />
            <input name="email" type="email" required placeholder="Best email" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />
            <input name="company" placeholder="Business / Project" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />
            <input name="role" placeholder="What do you do?" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50" />

            <div className="sm:col-span-2 grid grid-cols-2 gap-3 text-white/80 text-sm">
              {['Offer Clarity', 'Pricing & Sales', 'Content That Converts', 'Systems & Focus'].map((i) => (
                <label key={i} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <input type="checkbox" name="interests" value={i} className="accent-fuchsia-500" />
                  {i}
                </label>
              ))}
            </div>

            <button disabled={loading} className="sm:col-span-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
              {loading ? 'Submitting...' : 'Get the Playbook + Join the Waitlist'}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-white/90">{message}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
