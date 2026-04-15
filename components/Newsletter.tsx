'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    
    // Simulate API call - replace with real integration
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="w-full py-20 bg-github-black">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail size={40} className="text-primary-500 mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">RESTA AGGIORNATO</span>
          </h2>
          <p className="text-cloud-dancer/60 mb-8">
            Niente spam. Solo insight su sviluppo, tech e casi studio.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-primary-500"
            >
              <Check size={20} />
              <span>Iscrizione completata! Controlla la tua email.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="la-tua@email.it"
                required
                className="flex-1 px-4 py-3 bg-github-gray border border-github-border rounded-sm text-cloud-dancer placeholder:text-cloud-dancer/40 focus:outline-none focus:border-primary-500"
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-primary-500 text-white font-bold uppercase tracking-widest disabled:opacity-50 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Iscriviti
                    <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </form>
          )}

          <p className="text-cloud-dancer/40 text-xs mt-4">
            Possono disiscriversi in qualsiasi momento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}