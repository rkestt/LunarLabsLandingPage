'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  services: [
    { label: 'Web App', href: '#services' },
    { label: 'Desktop App', href: '#services' },
    { label: 'Landing Pages', href: '#services' },
  ],
  company: [
    { label: 'Chi Siamo', href: '#about' },
    { label: 'Contatti', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="w-full h-full bg-github-black border-t border-github-border relative overflow-hidden flex flex-col justify-between pt-32 pb-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 border border-primary-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-display uppercase tracking-tighter">LN</span>
                </div>
                <span className="text-2xl font-bold text-white font-display uppercase tracking-tighter">
                  Lunar Labs
                </span>
              </div>
              <p className="text-sm text-cloud-dancer/40 mb-10 max-w-sm font-medium leading-relaxed">
                Industrial Digital Engineering. Progettiamo e costruiamo MVP 
                ad alte prestazioni con standard tecnici rigorosi.
              </p>
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">Contact Endpoint</p>
                <a href="mailto:andrea.fiori.ff@gmail.com" className="text-white hover:text-primary-500 transition-colors font-bold tracking-tight">
                  andrea.fiori.ff@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold text-white mb-8 uppercase tracking-[0.3em]">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-bold text-cloud-dancer/30 hover:text-primary-500 transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold text-white mb-8 uppercase tracking-[0.3em]">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-bold text-cloud-dancer/30 hover:text-primary-500 transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-bold text-white mb-8 uppercase tracking-[0.3em]">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-bold text-cloud-dancer/30 hover:text-primary-500 transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-github-border/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <p className="text-[8px] font-bold text-cloud-dancer/20 uppercase tracking-[0.5em]">
              &copy; {new Date().getFullYear()} Lunar Labs. Engineering Stable
            </p>
            <div className="w-12 h-px bg-github-border/50" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-success rounded-full" />
              <p className="text-[8px] font-bold text-cloud-dancer/20 uppercase tracking-widest">All Systems Operational</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-[8px] font-bold text-cloud-dancer/20 uppercase tracking-widest">
              Built for performance
            </p>
            <div className="px-3 py-1 border border-github-border text-[8px] font-bold text-primary-500 uppercase tracking-widest">
              LNR-V2.1
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
