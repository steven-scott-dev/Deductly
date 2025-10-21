import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <section id="pricing"><Pricing /></section>
      <CTA />
      <Footer />
    </main>
  )
}
