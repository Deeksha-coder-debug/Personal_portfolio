import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Trophy, Award, Medal, Star, TrendingUp } from 'lucide-react'

const items = [
  { icon: Trophy, title: 'GATE DA 2026', value: 'Qualified', detail: 'Score: 502 | Data Science & AI Paper', highlight: true },
  { icon: Medal, title: 'NIMCET 2024', value: 'AIR 713', detail: 'National Level MCA Entrance Examination', highlight: false },
  { icon: Award, title: 'OJEE 2024', value: 'Rank 16', detail: 'Odisha Joint Entrance Examination for MCA', highlight: true },
  { icon: Star, title: 'University Topper', value: 'Gold Medalist', detail: 'B.Sc. Computer Science | Vikram Deb University', highlight: false },
  { icon: TrendingUp, title: 'Academic Excellence', value: '9+ CGPA', detail: 'MCA at IIIT Bhopal (Current)', highlight: true },
]

function AnimatedValue({ target, isInView }) {
  const [count, setCount] = useState(0)
  const num = parseInt(target.replace(/\D/g, '')) || 0
  const prefix = target.match(/^[^\d]*/)?.[0] || ''
  const suffix = target.match(/[^\d]*$/)?.[0] || ''

  useEffect(() => {
    if (!isInView || num === 0) return
    let start = 0
    const duration = 1600
    const step = num / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, num])

  if (num === 0) return <span>{target}</span>
  return <span>{prefix}{count}{suffix}</span>
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="py-28 lg:py-36 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-cyan/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">Track Record</span>
          <h2 className="text-3xl lg:text-[42px] font-black mt-4 text-slate-100">Achievements</h2>
          <p className="mt-4 text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            Consistent academic excellence and competitive examination success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative p-7 rounded-2xl border transition-all duration-400 card-hover ${
                item.highlight
                  ? 'glass-strong border-accent-cyan/10 glow-cyan'
                  : 'glass border-white/[0.05] hover:border-accent-cyan/10'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.highlight ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-bg-secondary/80 text-slate-500'
                }`}>
                  <item.icon size={24} />
                </div>
                {item.highlight && (
                  <span className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider bg-bg-secondary text-slate-400 rounded-md border border-white/[0.05]">
                    Top
                  </span>
                )}
              </div>
              <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{item.title}</h3>
              <p className="text-3xl font-black text-slate-100 mb-2">
                <AnimatedValue target={item.value} isInView={isInView} />
              </p>
              <p className="text-[12px] text-slate-500 leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
