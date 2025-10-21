export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-accent/15 px-3 py-1 text-accent font-medium">
            New • For gig workers
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Keep more of what you earn.
          </h1>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Deductly automatically tracks mileage, scans expenses, and estimates taxes —
            so you can focus on the road, not the receipts.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className="btn-primary">Get early access</a>
            <a href="#features" className="btn-ghost">See how it works</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
    </section>
  )
}
