export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-10 text-sm text-gray-500">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Deductly. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#cta">Waitlist</a>
        </nav>
      </div>
    </footer>
  )
}
