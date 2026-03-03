'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  services: [
    { label: 'MVP Development', href: '#services' },
    { label: 'Custom Software', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Growth Consulting', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark-charcoal/50 border-t border-border-gray">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LL</span>
                </div>
                <span className="text-xl font-bold text-white font-display">
                  Lunar Labs
                </span>
              </div>
              <p className="text-muted-gray mb-6 max-w-sm">
                B2B Digital Innovation Studio. We build digital products that 
                drive growth and transform businesses.
              </p>
              <div className="flex gap-4">
                {['twitter', 'linkedin', 'github'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-border-gray/50 flex items-center justify-center text-muted-gray hover:text-primary-400 hover:bg-border-gray transition-colors"
                  >
                    <span className="text-sm font-medium uppercase">
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-gray hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-gray hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-gray hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border-gray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-gray">
              &copy; {new Date().getFullYear()} Lunar Labs. All rights reserved.
            </p>
            <p className="text-sm text-muted-gray">
              Crafted with precision in the digital realm.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
