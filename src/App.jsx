import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  )
}