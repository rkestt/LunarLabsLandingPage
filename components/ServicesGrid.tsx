'use client'

import { Rocket, Code2, Palette, Zap, Shield, TrendingUp } from 'lucide-react'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Transform your idea into a market-ready product in weeks, not months. We build functional MVPs that validate your business hypothesis and attract investors.',
    value: '$5,000',
    isFeatured: true,
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailor-made software solutions built with cutting-edge technologies. From web applications to enterprise systems, we engineer robust solutions.',
    value: '$15,000',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that converts visitors into customers. We create intuitive, beautiful interfaces that enhance user experience and brand perception.',
    value: '$3,000',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your existing application and improve user retention. We analyze, optimize, and fine-tune for blazing-fast performance.',
    value: '$2,500',
  },
  {
    icon: Shield,
    title: 'Security Audit',
    description: 'Comprehensive security assessment to protect your business and customer data. Identify vulnerabilities before they become threats.',
    value: '$1,500',
  },
  {
    icon: TrendingUp,
    title: 'Growth Consulting',
    description: 'Strategic guidance to scale your digital product. We help you make data-driven decisions for sustainable business growth.',
    value: '$2,000',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-near-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-secondary-400 bg-secondary-500/10 rounded-full border border-secondary-500/20">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Solutions for <span className="text-gradient">Every Stage</span>
          </h2>
          <p className="text-lg text-muted-gray max-w-2xl mx-auto">
            From initial concept to market dominance, we offer comprehensive 
            digital solutions tailored to your business objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              value={service.value}
              index={index}
              isFeatured={service.isFeatured}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-gray mb-6">
            Need something custom? We tailor solutions to your unique requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary-400 font-medium hover:text-primary-300 transition-colors"
          >
            Discuss Your Project
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
