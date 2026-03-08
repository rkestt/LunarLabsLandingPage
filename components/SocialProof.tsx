'use client'

import { motion } from 'framer-motion'

const techStack = [
  { name: 'Next.js', logo: 'NX' },
  { name: 'React', logo: 'RE' },
  { name: 'Node.js', logo: 'NO' },
  { name: 'TypeScript', logo: 'TS' },
  { name: 'Tailwind CSS', logo: 'TW' },
  { name: 'PostgreSQL', logo: 'PS' },
  { name: 'Docker', logo: 'DK' },
  { name: 'Prisma', logo: 'PR' },
]

const values = [
  { name: 'No Boilerplate', logo: 'NB' },
  { name: 'Performance', logo: 'PF' },
  { name: 'SEO Optimized', logo: 'SO' },
  { name: 'Trasparenza', logo: 'TR' },
  { name: 'Innovazione', logo: 'IN' },
  { name: 'Async-First', logo: 'AF' },
  { name: 'User Centered', logo: 'UC' },
  { name: 'Custom MVP', logo: 'MV' },
]

export default function SocialProof() {
  return (
    <section className="w-full h-full py-20 bg-github-black border-y border-github-border/30 overflow-hidden relative flex flex-col justify-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="mb-20 text-center relative z-10 px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white font-display tracking-tighter uppercase mb-4">
          TECH STACK <span className="text-gradient">&</span> VALUES
        </h2>
        <p className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.5em]">
          Industrial Engineering Core
        </p>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative flex overflow-hidden border-y border-github-border/20 py-8 bg-github-gray/30">
        <motion.div
          className="flex gap-16 md:gap-32 items-center"
          animate={{
            x: [0, -100 * techStack.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div
              key={`tech-${index}`}
              className="flex-shrink-0 flex items-center gap-6 group"
            >
              <div className="text-2xl font-bold text-github-border group-hover:text-primary-500 transition-colors font-display">
                {tech.logo}
              </div>
              <span className="text-xs font-bold text-cloud-dancer/40 uppercase tracking-widest group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <div className="w-2 h-2 bg-primary-500/20" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative flex overflow-hidden mt-4 border-y border-github-border/20 py-8 bg-github-gray/30">
        <motion.div
          className="flex gap-16 md:gap-32 items-center"
          animate={{
            x: [-100 * values.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {[...values, ...values, ...values].map((value, index) => (
            <div
              key={`value-${index}`}
              className="flex-shrink-0 flex items-center gap-6 group"
            >
              <div className="text-2xl font-bold text-github-border group-hover:text-primary-500 transition-colors font-display">
                {value.logo}
              </div>
              <span className="text-xs font-bold text-cloud-dancer/40 uppercase tracking-widest group-hover:text-white transition-colors">
                {value.name}
              </span>
              <div className="w-1 h-4 bg-primary-500/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
