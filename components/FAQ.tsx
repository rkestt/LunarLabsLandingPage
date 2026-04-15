'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Quanto tempo serve per sviluppare un MVP?',
    answer: 'I tempi variano in base alla complessità. Un MVP base richiede typically 2-4 settimane. Definiamo milestone chiare e tempistiche precise in fase di kickoff.',
  },
  {
    question: 'Quali tecnologie utilizzate?',
    answer: 'Usiamo tecnologie modern e testate: React/Next.js, TypeScript, Tailwind CSS, PostgreSQL, Node.js. Scegliamo stack basati su performance e manutenibilità, mai boilerplate.',
  },
  {
    question: 'Come funziona il processo di sviluppo?',
    answer: '1) Discovery: analisi requisiti e UX. 2) MVP Definition: definizione feature minime. 3) Sviluppo iterativo con sprint settimanali. 4) Testing continuo. 5) Delivery e documentazione.',
  },
  {
    question: 'Offrite supporto post-lancio?',
    answer: 'Sì, offriamo piani di manutenzione e supporto opzionali. Include fix bug, aggiornamenti sicurezza e migliorie minori con SLA garantiti.',
  },
  {
    question: 'Quali garanzie offrite?',
    answer: 'Garantiamo codice testato, documentazione completa, e trasparenza totale. Nessun costo nascosto. Se qualcosa non va, sistemiamo senza sorprese.',
  },
  {
    question: 'Come gestite le revisioni?',
    answer: 'Includiamo 2 cicli di revisione nel prezzo. Ogni sprint include demo e feedback. Lavoriamo in iterazioni piccole per ricevere costantemente il tuo input.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 bg-github-black">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">FAQ</span>
          </h2>
          <p className="text-cloud-dancer/60 text-lg max-w-xl mx-auto">
            Domande frequenti sui nostri servizi e processo
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-github-border rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-github-gray/30 hover:bg-github-gray/50 transition-colors"
              >
                <span className="font-medium text-cloud-dancer pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} className="text-cloud-dancer/50 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-${index}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 pt-2 text-cloud-dancer/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}