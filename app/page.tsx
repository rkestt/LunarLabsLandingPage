import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import ServicesGrid from '@/components/ServicesGrid'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <ServicesGrid />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}
