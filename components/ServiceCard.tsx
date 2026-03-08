'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  value: string
  index: number
  isFeatured?: boolean
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  isFeatured = false,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-none border transition-all duration-300 glass-card ${
        isFeatured
          ? 'border-primary-500/50 shadow-purple-glow'
          : 'border-github-border hover:border-primary-500/30'
      }`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 flex items-center justify-center mb-8 border border-github-border ${
        isFeatured
          ? 'bg-primary-500 text-white'
          : 'bg-github-gray text-primary-500'
      }`}>
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-4 font-display uppercase tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-cloud-dancer/70 mb-6 leading-relaxed font-medium">
        {description}
      </p>

      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-primary-500 text-white text-[10px] font-bold uppercase tracking-tighter">
          Priority Solution
        </div>
      )}
    </motion.div>
  )
}
