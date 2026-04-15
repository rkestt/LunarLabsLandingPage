'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      setSent(true)
      setTimeout(() => {
        setMessage('')
        setSent(false)
        setIsOpen(false)
      }, 2000)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 bg-github-gray border border-github-border rounded-sm overflow-hidden"
          >
            <div className="p-4 bg-github-black border-b border-github-border">
              <h4 className="font-bold text-white">Parliamo?</h4>
              <p className="text-cloud-dancer/60 text-sm">
                Rispondiamo in 24h
              </p>
            </div>
            <div className="p-4">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-primary-500"
                >
                  Messaggio inviato! Ti contatteremo presto.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ciao! Raccontami del tuo progetto..."
                    className="w-full p-3 bg-github-black border border-github-border rounded-sm text-cloud-dancer text-sm resize-none focus:outline-none focus:border-primary-500"
                    rows={3}
                  />
                  <motion.button
                    type="submit"
                    disabled={!message.trim()}
                    className="w-full mt-3 py-3 bg-primary-500 text-white font-bold uppercase text-sm tracking-widest disabled:opacity-50"
                    whileHover={{ scale: message.trim() ? 1.02 : 1 }}
                    whileTap={{ scale: message.trim() ? 0.98 : 1 }}
                  >
                    Invia
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}