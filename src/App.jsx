import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import About from './components/About'
import Tech from './components/Tech'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{background:'#0c0a06'}}>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Tech />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
