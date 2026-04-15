'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import ServicesGrid from '@/components/ServicesGrid'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import ChatWidget from '@/components/ChatWidget'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

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
    <>
      <Header />
      <ChatWidget />
      <main className="scroll-container">
        <div id="hero" className="snap-section">
          <Hero />
        </div>
        <div id="social-proof" className="snap-section">
          <SocialProof />
        </div>
        <div id="services" className="snap-section">
          <ServicesGrid />
        </div>
        <div id="pricing" className="snap-section">
          <Pricing />
        </div>
        <div id="case-studies" className="snap-section">
          <CaseStudies />
        </div>
        <div id="about" className="snap-section">
          <About />
        </div>
        <div id="testimonials" className="snap-section">
          <Testimonials />
        </div>
        <div id="faq" className="snap-section">
          <FAQ />
        </div>
        <div className="snap-section">
          <Newsletter />
        </div>
        <div id="contact" className="snap-section">
          <ContactForm />
        </div>
        <div className="snap-section">
          <Footer />
        </div>
      </main>
    </>
  )
}
