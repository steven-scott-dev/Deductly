export default function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-12 md:py-20">
      <h2 className="text-2xl font-bold">Simple pricing</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-xl font-bold">Free</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>• Manual logging</li>
            <li>• Limited auto mileage</li>
            <li>• Basic reports</li>
          </ul>
          <a href="#cta" className="btn-primary mt-6 inline-block">Start free</a>
        </div>

        <div className="card p-6 border-primary/40">
          <h3 className="text-xl font-bold">Pro — $9.99 / mo</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>• Full auto mileage + AI categorizer</li>
            <li>• Real-time tax estimates</li>
            <li>• Unlimited exports + priority support</li>
          </ul>
          <a href="#cta" className="btn-primary mt-6 inline-block">Start 14-day trial</a>
        </div>
      </div>
    </section>
  )
}
