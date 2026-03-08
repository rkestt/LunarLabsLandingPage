'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Il nome deve avere almeno 2 caratteri'),
  clientType: z.string().min(1, 'Seleziona il tipo di cliente'),
  serviceType: z.string().min(1, 'Seleziona il tipo di servizio'),
  contactType: z.string().min(1, 'Seleziona il metodo di contatto'),
  contactValue: z.string().min(3, 'Inserisci un contatto valido'),
  message: z.string().min(10, 'La descrizione deve avere almeno 10 caratteri'),
})

type FormData = z.infer<typeof formSchema>

const clientOptions = [
  { value: '', label: 'Seleziona tipo cliente' },
  { value: 'pmi', label: 'PMI' },
  { value: 'privato', label: 'Privato' },
  { value: 'startup', label: 'Startup' },
  { value: 'altro', label: 'Altro' },
]

const serviceOptions = [
  { value: '', label: 'Seleziona servizio' },
  { value: 'webapp', label: 'Web App' },
  { value: 'desktop', label: 'Desktop App' },
  { value: 'landing', label: 'Landing Page' },
  { value: 'altro', label: 'Altro' },
]

const contactOptions = [
  { value: '', label: 'Seleziona metodo', placeholder: 'SCEGLI_METODO' },
  { value: 'telegram', label: 'Telegram', placeholder: '@USERNAME' },
  { value: 'whatsapp', label: 'WhatsApp', placeholder: '+39 123...' },
  { value: 'email', label: 'Email', placeholder: 'NOME@EMAIL.COM' },
]

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const selectedContactType = watch('contactType')
  const contactPlaceholder = contactOptions.find(opt => opt.value === selectedContactType)?.placeholder || 'CONTATTO_DETTAGLIO'

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitError('')
      
      // Sostituisci "YOUR_FORMSPREE_ID" con il codice che ti dà Formspree
      const response = await fetch('https://formspree.io/f/xaqpnkza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `Nuovo Lead Lunar Labs: ${data.name}`,
          _target: 'andrea.fiori.ff@gmail.com'
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        const errorData = await response.json()
        setSubmitError(errorData.errors?.[0]?.message || 'Errore durante l\'invio del protocollo.')
      }
    } catch (error) {
      setSubmitError('Errore di rete. Controlla la tua connessione.')
    }
  }

  return (
    <section id="contact" className="w-full h-full py-16 bg-github-black relative flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.3em] uppercase text-primary-500 border-l-2 border-primary-500">
            Interface
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display tracking-tighter uppercase">
            CONFIGURA <span className="text-gradient">L&apos;INVIO</span>
          </h2>
          <p className="text-sm text-cloud-dancer/60 max-w-xl font-medium leading-relaxed">
            Inizializza la comunicazione con il nostro team. 
            Ogni richiesta viene processata attraverso il nostro workflow asincrono.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-github-gray border border-primary-500/30 p-10 text-center glass-card"
              >
                <div className="w-12 h-12 mx-auto mb-6 border border-success flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-display uppercase tracking-tight">
                  SISTEMA SINCRONIZZATO
                </h3>
                <p className="text-[10px] text-cloud-dancer/40 mb-8 uppercase tracking-widest font-bold">
                  Dati ricevuti con successo. In attesa di elaborazione asincrona.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 text-[10px] font-bold text-primary-500 border border-primary-500/30 hover:bg-primary-500/10 transition-colors uppercase tracking-widest"
                >
                  Nuovo Log
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-github-gray/50 border border-github-border p-6 md:p-10 glass-card"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div className="relative group">
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-bold text-cloud-dancer/40 mb-2 uppercase tracking-[0.2em]"
                      >
                        Identifier Name
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full bg-transparent border-b border-github-border py-1.5 text-white placeholder:text-github-border focus:outline-none focus:border-primary-500 transition-colors font-medium text-sm"
                        placeholder="NOME_COMPLETO"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-[10px] font-bold text-error flex items-center gap-2 uppercase tracking-tighter">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Client Type */}
                    <div className="relative group">
                      <label
                        htmlFor="clientType"
                        className="block text-[10px] font-bold text-cloud-dancer/40 mb-2 uppercase tracking-[0.2em]"
                      >
                        Client Category
                      </label>
                      <select
                        {...register('clientType')}
                        id="clientType"
                        className="w-full bg-transparent border-b border-github-border py-1.5 text-white focus:outline-none focus:border-primary-500 transition-colors font-medium appearance-none cursor-pointer text-sm"
                      >
                        {clientOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-github-gray">
                            {option.label.toUpperCase()}
                          </option>
                        ))}
                      </select>
                      {errors.clientType && (
                        <p className="mt-1.5 text-[10px] font-bold text-error flex items-center gap-2 uppercase tracking-tighter">
                          <AlertCircle className="w-3 h-3" />
                          {errors.clientType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Service Type */}
                    <div className="relative group">
                      <label
                        htmlFor="serviceType"
                        className="block text-[10px] font-bold text-cloud-dancer/40 mb-2 uppercase tracking-[0.2em]"
                      >
                        Service Protocol
                      </label>
                      <select
                        {...register('serviceType')}
                        id="serviceType"
                        className="w-full bg-transparent border-b border-github-border py-1.5 text-white focus:outline-none focus:border-primary-500 transition-colors font-medium appearance-none cursor-pointer text-sm"
                      >
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-github-gray">
                            {option.label.toUpperCase()}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="mt-1.5 text-[10px] font-bold text-error flex items-center gap-2 uppercase tracking-tighter">
                          <AlertCircle className="w-3 h-3" />
                          {errors.serviceType.message}
                        </p>
                      )}
                    </div>

                    {/* Contact Type */}
                    <div className="relative group">
                      <label
                        htmlFor="contactType"
                        className="block text-[10px] font-bold text-cloud-dancer/40 mb-2 uppercase tracking-[0.2em]"
                      >
                        Contact Channel
                      </label>
                      <select
                        {...register('contactType')}
                        id="contactType"
                        className="w-full bg-transparent border-b border-github-border py-1.5 text-white focus:outline-none focus:border-primary-500 transition-colors font-medium appearance-none cursor-pointer text-sm"
                      >
                        {contactOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-github-gray">
                            {option.label.toUpperCase()}
                          </option>
                        ))}
                      </select>
                      {errors.contactType && (
                        <p className="mt-1.5 text-[10px] font-bold text-error flex items-center gap-2 uppercase tracking-tighter">
                          <AlertCircle className="w-3 h-3" />
                          {errors.contactType.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Value */}
                  <div className="mb-6">
                    <label
                      htmlFor="contactValue"
                      className="block text-[10px] font-bold text-cloud-dancer/40 mb-2 uppercase tracking-[0.2em]"
                    >
                      Contact Detail / ID
                    </label>
                    <input
                      {...register('contactValue')}
                      type="text"
                      id="contactValue"
                      className="w-full bg-transparent border-b border-github-border py-1.5 text-white placeholder:text-github-border focus:outline-none focus:border-primary-500 transition-colors font-medium text-sm"
                      placeholder={contactPlaceholder}
                    />
                    {errors.contactValue && (
                      <p className="mt-1.5 text-[10px] font-bold text-error flex items-center gap-2 uppercase tracking-tighter">
                        <AlertCircle className="w-3 h-3" />
                        {errors.contactValue.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-bold text-cloud-dancer/40 mb-2 uppercase tracking-[0.2em]"
                    >
                      Project Specifications
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={3}
                      className="w-full bg-github-black/50 border border-github-border p-3 text-white placeholder:text-github-border focus:outline-none focus:border-primary-500 transition-colors resize-none font-medium text-sm"
                      placeholder="DESCRIVI_IL_PROGETTO"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-[10px] font-bold text-error flex items-center gap-2 uppercase tracking-tighter">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary-500 text-white font-bold uppercase tracking-[0.3em] transition-all hover:shadow-purple-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 group rounded-sm text-xs"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <span>Invia Protocollo</span>
                        <div className="w-8 h-px bg-white group-hover:w-12 transition-all" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
