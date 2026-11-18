import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="py-12 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Identity */}
          <div>
            <p className="text-base font-bold text-slate-900">
              Sai Deeksha Talabaktula
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              MCA @ IIIT Bhopal (9.7 CGPA) &bull; GATE 2026 DA &bull; AI/ML, GenAI & Backend Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github, href: 'https://github.com/Deeksha-coder-debug', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/saideekshatalabaktula', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:deeksha.jeypore@gmail.com', label: 'Email' },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={item.label}
                className="p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 transition-all shadow-xs"
              >
                <item.icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright & Scroll to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500 flex items-center gap-1">
              Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> using React & Tailwind
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl bg-slate-50 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 transition-all shadow-xs"
              aria-label="Scroll to top of page"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
