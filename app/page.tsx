'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import ServicesGrid from '@/components/ServicesGrid'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVH()
    window.addEventListener('resize', setVH)
    return () => window.removeEventListener('resize', setVH)
  }, [])

  return (
    <main className="scroll-container">
      <div className="snap-section">
        <Hero />
      </div>
      <div className="snap-section">
        <SocialProof />
      </div>
      <div className="snap-section">
        <ServicesGrid />
      </div>
      <div className="snap-section">
        <About />
      </div>
      <div className="snap-section">
        <ContactForm />
      </div>
      <div className="snap-section">
        <Footer />
      </div>
    </main>
  )
}
