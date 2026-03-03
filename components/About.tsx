'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 via-secondary-500 to-highlight opacity-50 blur-xl" />
              
              {/* Avatar Placeholder */}
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl bg-dark-charcoal border border-border-gray overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">LL</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Lunar Labs</h3>
                  <p className="text-muted-gray">Digital Innovation Studio</p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 px-6 py-3 bg-dark-charcoal border border-border-gray rounded-xl shadow-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm text-white font-medium">Available for Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20">
              About Us
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Building the <span className="text-gradient">Future</span> of B2B
            </h2>

            <div className="space-y-4 text-muted-gray leading-relaxed mb-8">
              <p>
                Lunar Labs is a digital innovation studio founded by experienced 
                engineers and designers who believe in the power of technology to 
                transform businesses.
              </p>
              <p>
                We specialize in helping B2B companies navigate their digital 
                transformation journey—from initial concept to scalable products 
                that drive real business results.
              </p>
              <p>
                Our approach combines technical excellence with strategic thinking, 
                ensuring every solution we build aligns with your business objectives 
                and delivers measurable ROI.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Expert Team',
                'Agile Process',
                'Transparent Pricing',
                'Post-Launch Support',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary-500/20 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-secondary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-gray">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Retention' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
