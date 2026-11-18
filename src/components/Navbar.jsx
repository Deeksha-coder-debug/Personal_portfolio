import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, FileText, Sparkles } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-sm shadow-slate-900/5 border-b border-slate-200/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:rotate-6 transition-transform">
              <span className="font-black text-sm">SD</span>
            </div>
            <span className="font-bold text-slate-800 tracking-tight text-base hidden sm:inline">
              Sai Deeksha<span className="text-indigo-600 font-black">.</span>
            </span>
          </motion.a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.2 }}
                className="relative text-[13px] font-semibold text-slate-600 hover:text-indigo-600 transition-colors duration-200 group py-1"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-600 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* Socials & Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="https://github.com/Deeksha-coder-debug"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200/80 hover:border-indigo-200 transition-all shadow-sm"
            >
              <Github size={17} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/saideekshatalabaktula"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200/80 hover:border-indigo-200 transition-all shadow-sm"
            >
              <Linkedin size={17} />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1unWqqyi4_s3lZl-oCWdabGIzw2Ugl8jv/view"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-md shadow-indigo-600/20"
            >
              <FileText size={14} />
              Resume
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-strong border-t border-slate-200/80 overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-semibold text-slate-700 hover:text-indigo-600 py-2.5 px-3 rounded-xl hover:bg-indigo-50 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200 mt-2 px-3">
                <a
                  href="https://github.com/Deeksha-coder-debug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-indigo-600"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/saideekshatalabaktula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-indigo-600"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1unWqqyi4_s3lZl-oCWdabGIzw2Ugl8jv/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-lg"
                >
                  <FileText size={13} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
