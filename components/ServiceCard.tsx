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
  value,
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
      className={`relative p-8 rounded-2xl border transition-all duration-300 ${
        isFeatured
          ? 'bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border-primary-500/30 shadow-glow'
          : 'bg-dark-charcoal/50 border-border-gray hover:border-primary-500/30 hover:shadow-card-hover'
      }`}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
        isFeatured
          ? 'bg-gradient-primary text-white'
          : 'bg-border-gray/50 text-primary-400'
      }`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3 font-display">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-gray mb-6 leading-relaxed">
        {description}
      </p>

      {/* Value Tag */}
      <div className="flex items-center justify-between pt-4 border-t border-border-gray/50">
        <span className="text-sm text-muted-gray">Starting at</span>
        <span className={`text-lg font-semibold ${isFeatured ? 'text-primary-400' : 'text-white'}`}>
          {value}
        </span>
      </div>

      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
          Most Popular
        </div>
      )}
    </motion.div>
  )
}
