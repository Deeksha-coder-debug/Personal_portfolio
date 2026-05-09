import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Hammer, GitBranch, Clock, Target } from 'lucide-react'

const currentWork = [
  {
    icon: Hammer,
    title: 'AI Placement Mentor RAG',
    status: 'In Progress',
    desc: 'Building a RAG-based career assistant with LangChain, ChromaDB, and FastAPI. Personalized placement guidance and resume feedback.',
    stack: ['LangChain', 'ChromaDB', 'FastAPI', 'OpenAI'],
    eta: 'June 2026'
  },
  {
    icon: GitBranch,
    title: 'Open Source Contributions',
    status: 'Active',
    desc: 'Contributing to ML tooling libraries and FastAPI ecosystem projects. Focusing on documentation and beginner-friendly issues.',
    stack: ['Python', 'FastAPI', 'Git'],
    eta: 'Ongoing'
  },
  {
    icon: Target,
    title: 'System Design Learning',
    status: 'Learning',
    desc: 'Deep diving into distributed systems, message queues, caching strategies, and scalable backend architecture patterns.',
    stack: ['Redis', 'RabbitMQ', 'PostgreSQL', 'Docker Swarm'],
    eta: 'Ongoing'
  }
]

export default function Building() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="building" className="py-28 lg:py-36 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-purple/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">Now</span>
          <h2 className="text-3xl lg:text-[42px] font-black mt-4 text-slate-100">Currently Building</h2>
          <p className="mt-4 text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            What I am working on right now — shipping code, learning systems, and growing as an engineer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {currentWork.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-7 rounded-2xl glass border border-white/[0.05] hover:border-accent-purple/15 transition-all duration-400 card-hover"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/[0.04] rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-bg-secondary/80 flex items-center justify-center">
                    <item.icon size={20} className="text-accent-purple" />
                  </div>
                  <span className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider bg-bg-secondary/80 text-slate-400 rounded-md border border-white/[0.05]">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed mb-5">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.stack.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-bold bg-bg-secondary/50 text-slate-500 rounded border border-white/[0.04]">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                  <Clock size={12} />
                  <span>ETA: {item.eta}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
