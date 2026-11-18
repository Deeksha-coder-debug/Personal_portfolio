import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, ArrowDown, Sparkles, Code2, Cpu, Brain, Rocket, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

function Typewriter({ texts, speed = 65, pause = 2200 }) {
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
    <span className="text-slate-800 font-semibold">
      {display}
      <span className="animate-pulse text-indigo-600 font-bold ml-0.5">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Decorative floating badges for creativity */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block overflow-hidden">
        {/* Floating pill 1 */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 left-[8%] glass px-4 py-2.5 rounded-2xl shadow-lg border border-indigo-100 flex items-center gap-2.5 text-xs font-bold text-slate-700 pointer-events-auto hover:scale-105 transition-transform"
        >
          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Brain size={16} />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-extrabold">Research</p>
            <p className="font-semibold text-slate-800">CNN-BiLSTM & GA</p>
          </div>
        </motion.div>

        {/* Floating pill 2 */}
        <motion.div
          animate={{ y: [12, -12, 12], rotate: [2, -2, 2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-36 right-[8%] glass px-4 py-2.5 rounded-2xl shadow-lg border border-sky-100 flex items-center gap-2.5 text-xs font-bold text-slate-700 pointer-events-auto hover:scale-105 transition-transform"
        >
          <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
            <Rocket size={16} />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-extrabold">Production</p>
            <p className="font-semibold text-slate-800">FastAPI & Docker ML</p>
          </div>
        </motion.div>

        {/* Floating pill 3 */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-1, 2, -1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-36 left-[7%] glass px-4 py-2.5 rounded-2xl shadow-lg border border-emerald-100 flex items-center gap-2.5 text-xs font-bold text-slate-700 pointer-events-auto hover:scale-105 transition-transform"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Award size={16} />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-extrabold">Academics</p>
            <p className="font-semibold text-slate-800">9.7 CGPA @ IIIT Bhopal</p>
          </div>
        </motion.div>

        {/* Floating pill 4 */}
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [2, -1, 2] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-36 right-[8%] glass px-4 py-2.5 rounded-2xl shadow-lg border border-violet-100 flex items-center gap-2.5 text-xs font-bold text-slate-700 pointer-events-auto hover:scale-105 transition-transform"
        >
          <div className="w-7 h-7 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center">
            <Code2 size={16} />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-extrabold">Fintech CRM</p>
            <p className="font-semibold text-slate-800">Next.js & PostgreSQL</p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 shadow-sm mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-bold tracking-wide uppercase text-emerald-800">
            Available for Internships & Full-Time Roles
          </span>
        </motion.div>

        {/* College Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 text-xs font-bold tracking-widest uppercase text-indigo-700 bg-indigo-50/80 border border-indigo-200/60 rounded-full">
            IIIT Bhopal &bull; Master of Computer Applications
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-5xl sm:text-7xl lg:text-[84px] font-black tracking-tight leading-[1.08] mb-3 text-slate-900"
        >
          <span className="text-gradient">Sai Deeksha</span>
          <br className="hidden sm:inline" />{' '}
          <span className="text-slate-900">Talabaktula</span>
        </motion.h1>

        {/* Animated Typewriter Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-9 mb-6 flex items-center justify-center"
        >
          <p className="text-xl sm:text-2xl font-medium text-slate-600">
            <Typewriter
              texts={[
                'AI/ML & GenAI Systems Engineer',
                'Deep Learning Research Intern @ IIIT Bhopal',
                'FastAPI & Docker ML Production Deployer',
                'Enterprise Next.js & PostgreSQL Developer',
                'GATE 2026 (DA) Qualifier • Score 502'
              ]}
              speed={60}
            />
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          MCA candidate at <strong className="text-slate-900 font-semibold">IIIT Bhopal (9.7/10 CGPA)</strong> and <strong className="text-slate-900 font-semibold">GATE 2026 DA qualifier</strong> with research experience in deep learning, time-series forecasting, and genetic algorithm optimization. Skilled in Python, Machine Learning, and deploying scalable full-stack applications.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          <motion.a
            href="https://drive.google.com/file/d/1unWqqyi4_s3lZl-oCWdabGIzw2Ugl8jv/view"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/25 hover:from-indigo-700 hover:to-indigo-800 transition-all text-sm"
          >
            <FileText size={17} />
            View Resume
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 bg-white text-slate-800 rounded-xl font-semibold border border-slate-300/80 hover:border-indigo-400 hover:text-indigo-600 shadow-sm transition-all text-sm"
          >
            <Sparkles size={16} className="text-indigo-600" />
            Explore Projects
          </motion.a>

          <motion.a
            href="https://github.com/Deeksha-coder-debug"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-3.5 bg-white text-slate-700 rounded-xl font-semibold border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 shadow-sm transition-all text-sm"
          >
            <Github size={17} />
            GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/saideekshatalabaktula"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-3.5 bg-white text-slate-700 rounded-xl font-semibold border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 shadow-sm transition-all text-sm"
          >
            <Linkedin size={17} />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: 'MCA CGPA', value: '9.7 / 10', sub: 'IIIT Bhopal' },
            { label: 'GATE 2026 DA', value: 'Score 502', sub: 'Qualified' },
            { label: 'Univ. Topper', value: '9.5 CGPA', sub: 'Gold Medalist' },
            { label: 'DSA Solved', value: '400+', sub: 'LeetCode & GfG' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="glass p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <p className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                {stat.value}
              </p>
              <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                {stat.label}
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-14"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-colors group"
          >
            <span className="text-[11px] tracking-widest uppercase font-bold text-slate-500 group-hover:text-indigo-600">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
