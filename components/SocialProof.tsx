'use client'

import { motion } from 'framer-motion'

const companies = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateLabs', logo: 'IL' },
  { name: 'FutureScale', logo: 'FS' },
  { name: 'DataFlow', logo: 'DF' },
  { name: 'CloudNine', logo: 'C9' },
  { name: 'NexGen', logo: 'NG' },
  { name: 'QuantumBit', logo: 'QB' },
  { name: 'SynapseAI', logo: 'SA' },
]

const companiesSecond = [
  { name: 'ApexDigital', logo: 'AD' },
  { name: 'VertexCore', logo: 'VC' },
  { name: 'NovaSpark', logo: 'NS' },
  { name: 'QuantumLeap', logo: 'QL' },
  { name: 'StellarTech', logo: 'ST' },
  { name: 'CipherMind', logo: 'CM' },
  { name: 'EchoSphere', logo: 'ES' },
  { name: 'FusionLab', logo: 'FL' },
]

export default function SocialProof() {
  return (
    <section className="py-16 bg-near-black/50 border-y border-border-gray/50 overflow-hidden">
      <div className="mb-10 text-center">
        <p className="text-sm font-medium text-muted-gray uppercase tracking-wider">
          Trusted by B2B Leaders
        </p>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-20"
          animate={{
            x: [0, -50 * companies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-border-gray/50 flex items-center justify-center text-sm md:text-base font-semibold text-muted-gray hover:text-primary-400 transition-colors">
                {company.logo}
              </div>
              <span className="text-sm md:text-base text-muted-gray whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative flex overflow-hidden mt-8">
        <motion.div
          className="flex gap-12 md:gap-20"
          animate={{
            x: [-50 * companiesSecond.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {[...companiesSecond, ...companiesSecond, ...companiesSecond].map((company, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-border-gray/50 flex items-center justify-center text-sm md:text-base font-semibold text-muted-gray hover:text-secondary-400 transition-colors">
                {company.logo}
              </div>
              <span className="text-sm md:text-base text-muted-gray whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
