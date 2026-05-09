import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Projects', href: '#projects' },
  { name: 'Building', href: '#building' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-2xl shadow-black/40 border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <motion.a
            href="#"
            className="text-xl font-extrabold tracking-tight"
            whileHover={{ scale: 1.04 }}
          >
            <span className="text-gradient">SD</span>
            {/* <span className="text-slate-600">.</span> */}
          </motion.a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.3 }}
                className="relative text-[13px] font-medium text-slate-400 hover:text-slate-100 transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-cyan group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://github.com/Deeksha-coder-debug"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl text-slate-500 hover:text-accent-cyan hover:bg-white/[0.04] transition-all"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/saideekshatalabaktula"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl text-slate-500 hover:text-accent-cyan hover:bg-white/[0.04] transition-all"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold bg-slate-100 text-bg rounded-xl hover:bg-white transition-colors shadow-lg shadow-accent-cyan/10"
            >
              <FileText size={14} />
              Resume
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-slate-100"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-white/[0.05] overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-slate-400 hover:text-slate-100 py-3 px-3 rounded-xl hover:bg-white/[0.03] transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] mt-2 px-3">
                <a href="https://github.com/Deeksha-coder-debug" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500"><Github size={18} /></a>
                <a href="https://linkedin.com/in/saideekshatalabaktula" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500"><Linkedin size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
