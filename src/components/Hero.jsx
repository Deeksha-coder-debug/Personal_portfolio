import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

function Typewriter({ texts, speed = 70, pause = 2200 }) {
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplay(current.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        if (charIndex > 0) {
          setDisplay(current.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setDeleting(false)
          setIndex((index + 1) % texts.length)
        }
      }
    }, deleting ? speed / 2.5 : speed)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, index, texts, speed, pause])

  return (
    <span className="text-slate-400">
      {display}
      <span className="animate-pulse text-accent-cyan">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-accent-cyan/[0.07] rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent-purple/[0.06] rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-cyan/[0.03] rounded-full blur-[140px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)`,
            backgroundSize: '72px 72px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Internships
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500 bg-bg-secondary/60 border border-white/[0.06] rounded-full">
            MCA @ IIIT Bhopal
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl sm:text-7xl lg:text-[88px] font-black tracking-tight mb-3 leading-[1.05]"
        >
          <span className="text-gradient">Sai Deeksha</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-slate-200"
        >
          Talabaktula
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-8 mb-8"
        >
          <p className="text-lg sm:text-xl">
            <Typewriter
              texts={[
                'AI/ML Engineer',
                'Backend Developer',
                'GenAI & LLM Specialist',
                'Python & FastAPI Expert'
              ]}
              speed={65}
            />
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[15px] text-slate-500 max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Building production-grade intelligent systems with Python, FastAPI, Django,
          and Large Language Models. Passionate about scalable backend architecture
          and AI application deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 bg-slate-100 text-bg rounded-xl font-semibold hover:bg-white transition-all shadow-xl shadow-accent-cyan/10"
          >
            <FileText size={17} />
            Download Resume
          </motion.a>
          <motion.a
            href="https://github.com/Deeksha-coder-debug"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 glass rounded-xl font-semibold text-slate-300 hover:text-slate-100 border border-white/[0.06] hover:border-accent-cyan/20 transition-all"
          >
            <Github size={17} />
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/saideekshatalabaktula"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 glass rounded-xl font-semibold text-slate-300 hover:text-slate-100 border border-white/[0.06] hover:border-accent-purple/20 transition-all"
          >
            <Linkedin size={17} />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="flex items-center justify-center gap-10 sm:gap-14 mt-16"
        >
          {[
            { label: 'CGPA', value: '9.0+' },
            { label: 'GATE DA', value: '502' },
            { label: 'Projects', value: '5+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-slate-100">{stat.value}</p>
              <p className="text-[10px] text-slate-600 mt-1 uppercase tracking-[0.2em] font-semibold">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-700 hover:text-accent-cyan transition-colors">
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Explore</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
