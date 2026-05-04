import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Manifesto from './components/Manifesto'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#08070a', minHeight: '100dvh' }}>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Portfolio />
        <Manifesto />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
