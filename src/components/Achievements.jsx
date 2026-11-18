import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Trophy, Award, Medal, Star, TrendingUp, ShieldCheck, Users, Sparkles, Mic2 } from 'lucide-react'

const items = [
  {
    icon: Trophy,
    title: 'GATE 2026 (DA)',
    value: '502 Score',
    detail: 'Qualified Data Science & Artificial Intelligence paper in 1st attempt.',
    highlight: true,
    bg: 'bg-indigo-50',
    color: 'text-indigo-600',
    border: 'border-indigo-200'
  },
  {
    icon: TrendingUp,
    title: 'IIIT Bhopal (MCA)',
    value: '9.7 CGPA',
    detail: 'Master of Computer Applications (2024–2027) | Outstanding Academic Standing.',
    highlight: true,
    bg: 'bg-emerald-50',
    color: 'text-emerald-600',
    border: 'border-emerald-200'
  },
  {
    icon: Star,
    title: 'University Topper',
    value: 'Rank 1 Gold',
    detail: 'Recognized as University Topper at Vikram Deb University with 9.5/10 CGPA (B.Sc. CS).',
    highlight: true,
    bg: 'bg-amber-50',
    color: 'text-amber-600',
    border: 'border-amber-200'
  },
  {
    icon: Award,
    title: 'OJEE 2024',
    value: 'Rank 16',
    detail: 'Odisha Joint Entrance Examination for MCA state ranking.',
    highlight: false,
    bg: 'bg-sky-50',
    color: 'text-sky-600',
    border: 'border-slate-200'
  },
  {
    icon: Medal,
    title: 'NIMCET 2024',
    value: 'AIR 713',
    detail: 'National Level All India Entrance Examination for MCA admission across NITs.',
    highlight: false,
    bg: 'bg-violet-50',
    color: 'text-violet-600',
    border: 'border-slate-200'
  },
  {
    icon: Sparkles,
    title: 'Oracle Certified',
    value: 'Agentic AI',
    detail: 'Foundations Associate in Autonomous AI Agents and Multi-Agent Workflows.',
    highlight: true,
    bg: 'bg-purple-50',
    color: 'text-purple-600',
    border: 'border-purple-200'
  },
  {
    icon: Star,
    title: 'Data Structures & Algo',
    value: '400+ Solved',
    detail: 'Solved 400+ algorithmic problems across LeetCode and GeeksforGeeks.',
    highlight: false,
    bg: 'bg-cyan-50',
    color: 'text-cyan-600',
    border: 'border-slate-200'
  },
  {
    icon: ShieldCheck,
    title: 'IBM SkillsBuild',
    value: 'Cybersecurity',
    detail: 'Certified in threat modeling, network security, and defensive security architectures.',
    highlight: false,
    bg: 'bg-blue-50',
    color: 'text-blue-600',
    border: 'border-slate-200'
  },
  {
    icon: Users,
    title: 'Class Representative',
    value: '60+ Peers',
    detail: 'Elected CR for 60+ MCA students at IIIT Bhopal, coordinating faculty-student communication.',
    highlight: false,
    bg: 'bg-rose-50',
    color: 'text-rose-600',
    border: 'border-slate-200'
  },
]

function AnimatedValue({ target, isInView }) {
  const [count, setCount] = useState(0)
  const hasDecimal = target.includes('.')
  const floatVal = parseFloat(target.replace(/[^0-9.]/g, '')) || 0
  const isNumeric = !isNaN(floatVal) && floatVal > 0 && /\d/.test(target)
  const prefix = target.match(/^[^\d]*/)?.[0] || ''
  const suffix = target.replace(/^[^\d]*[0-9.]*/, '')

  useEffect(() => {
    if (!isInView || !isNumeric) return
    let start = 0
    const duration = 1200
    const steps = 40
    const increment = floatVal / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= floatVal) {
        setCount(floatVal)
        clearInterval(timer)
      } else {
        setCount(hasDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, floatVal, hasDecimal, isNumeric])

  if (!isNumeric) return <span>{target}</span>
  return <span>{prefix}{hasDecimal ? count.toFixed(1) : count}{suffix}</span>
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="py-24 lg:py-32 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full uppercase tracking-wider mb-3">
            Honors & Accolades
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Achievements & Recognition
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Verified competitive examination results, university gold medal, and industry certifications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 shadow-sm hover:shadow-md ${
                item.highlight ? `${item.border} ring-1 ring-indigo-500/10` : 'border-slate-200/90 hover:border-indigo-300'
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                  <item.icon size={22} />
                </div>
                {item.highlight && (
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full">
                    Distinction
                  </span>
                )}
              </div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                {item.title}
              </h3>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                <AnimatedValue target={item.value} isInView={isInView} />
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
