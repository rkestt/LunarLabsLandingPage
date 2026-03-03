'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

const budgetOptions = [
  { value: '', label: 'Select your budget' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k+', label: '$50,000+' },
]

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitError('')
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form data:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 bg-near-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-highlight bg-highlight/10 rounded-full border border-highlight/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Let&apos;s Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-lg text-muted-gray max-w-2xl mx-auto">
            Ready to transform your idea into reality? Tell us about your project 
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-dark-charcoal border border-border-gray rounded-2xl p-12 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-gray mb-8">
                  Thank you for reaching out. We&apos;ll review your project details 
                  and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 text-primary-400 font-medium hover:text-primary-300 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-dark-charcoal/50 border border-border-gray rounded-2xl p-8 md:p-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-near-black border border-border-gray rounded-lg text-white placeholder:text-muted-gray focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Company *
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-near-black border border-border-gray rounded-lg text-white placeholder:text-muted-gray focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Acme Inc."
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-error flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-near-black border border-border-gray rounded-lg text-white placeholder:text-muted-gray focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Project Budget *
                      </label>
                      <select
                        {...register('budget')}
                        id="budget"
                        className="w-full px-4 py-3 bg-near-black border border-border-gray rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      >
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-sm text-error flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.budget.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-near-black border border-border-gray rounded-lg text-white placeholder:text-muted-gray focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-error flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-error flex-shrink-0" />
                      <p className="text-error text-sm">{submitError}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-primary text-white font-semibold rounded-lg transition-all hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>

                  <p className="mt-4 text-center text-sm text-muted-gray">
                    By submitting, you agree to our privacy policy. We&apos;ll never share your information.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
