const items = [
  { title: "Auto mileage tracking", desc: "Battery-smart GPS that just works." },
  { title: "AI expense categorizer", desc: "Bank sync + smart write-off suggestions." },
  { title: "Real-time tax estimate", desc: "Know what to set aside each week." },
  { title: "Audit-ready reports", desc: "1-tap CSV/PDF for taxes and your CPA." },
  { title: "Multi-gig earnings", desc: "Uber, Lyft, DoorDash — all in one place." },
]

export default function Features() {
  return (
    <section id="features" className="container mx-auto px-4 py-16 md:py-20">
      <h2 className="text-3xl font-bold mb-8">Features built for gig workers</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="card p-6">
            <h3 className="text-lg font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
