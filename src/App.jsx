import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{background:'var(--ivory)',minHeight:'100dvh'}}>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <About />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}