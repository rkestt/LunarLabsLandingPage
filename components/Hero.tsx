'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-lunar">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary-500/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display text-7xl md:text-9xl font-bold mb-8 leading-[0.85] tracking-tighter"
        >
          <span className="text-white block mb-4">COSTRUIAMO CON</span>
          <span className="text-gradient uppercase">LUNAR LABS</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-cloud-dancer/80 max-w-2xl mx-auto mb-14 font-medium leading-relaxed"
        >
          Sviluppiamo MVP ad alte prestazioni con metodo e tecnologie 
          all&apos;avanguardia. Nessun boilerplate, solo codice puro 
          e soluzioni su misura costruite per durare.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="#contact">
            <motion.button
              className="group relative px-12 py-5 bg-primary-500 text-white font-bold rounded-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 uppercase tracking-widest">Inizia Progetto</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>

          <Link href="#services">
            <motion.button
              className="px-12 py-5 text-cloud-dancer font-bold rounded-sm border border-github-border hover:border-primary-500/50 transition-all uppercase tracking-widest bg-github-gray/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              I Nostri Servizi
            </motion.button>
          </Link>
        </motion.div>

        {/* Technical Stats/Strengths */}
        <motion.div
          variants={itemVariants}
          className="mt-28 pt-12 border-t border-github-border/50 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto"
        >
          {[
            { value: '100%', label: 'CUSTOM CODE' },
            { value: 'ASYNC', label: 'WORKFLOW' },
            { value: 'PERF', label: 'OPTIMIZED' },
            { value: 'ZERO', label: 'BOILERPLATE' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display group-hover:text-primary-500 transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.3em] font-bold text-cloud-dancer/40 uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-gray/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-1.5 bg-muted-gray rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
