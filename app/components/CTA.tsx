'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      setState('loading')

      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error('failed')

      setState('done')

      // ✅ Fire GA4 custom event when submission succeeds
      console.log('🧠 waitlist_signup fired')
      if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'waitlist_signup', {
    event_category: 'engagement',
    event_label: 'Join Waitlist',
    value: 1,
  })
}

    } catch (err) {
      console.error('❌ waitlist signup failed', err)
      setState('error')
    }
  }

  return (
    <section id="cta" className="container mx-auto px-4 py-12 md:py-20">
      <div className="card p-6 text-center sm:text-left">
        <h2 className="text-2xl font-bold">Get early access</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Join the waitlist — be first to try the app and help shape the roadmap.
        </p>

        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 outline-none dark:border-white/10 dark:bg-white/5"
          />
          <button
            type="submit"
            className="btn-primary"
            disabled={state === 'loading' || state === 'done'}
          >
            {state === 'idle' && 'Join waitlist'}
            {state === 'loading' && 'Submitting…'}
            {state === 'done' && 'Thanks!'}
          </button>
        </form>

        {state === 'error' && (
          <p className="mt-2 text-sm text-red-500">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  )
}
