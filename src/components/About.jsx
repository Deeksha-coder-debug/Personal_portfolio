import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Brain, Server, Container, Zap, Shield } from 'lucide-react'

const highlights = [
  { icon: Code2, title: 'Backend Engineering', desc: 'Production-ready APIs with FastAPI & Django. Custom auth, middleware, and DB optimization.' },
  { icon: Brain, title: 'AI / Machine Learning', desc: 'End-to-end ML pipelines. CNNs, NLP, predictive modeling with TensorFlow & Scikit-Learn.' },
  { icon: Server, title: 'GenAI & LLMs', desc: 'RAG-based systems, LangChain orchestration, and LLM application development.' },
  { icon: Container, title: 'Deployment & DevOps', desc: 'Docker, cloud deployment on Render.' },
  // { icon: Zap, title: 'Performance', desc: 'Async APIs, query optimization, caching strategies, and low-latency inference.' },
  // { icon: Shield, title: 'Security', desc: 'RBAC, JWT authentication, input validation, and secure deployment practices.' }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">About Me</span>
            <h2 className="text-3xl lg:text-[42px] font-black mt-4 mb-7 text-slate-100 leading-[1.15]">
              Engineer focused on<br />
              <span className="text-gradient">intelligent systems</span>
            </h2>
            <div className="space-y-4 text-[15px] text-slate-400 leading-[1.75]">
              <p>
                I am an <strong className="text-slate-200 font-semibold">MCA student at IIIT Bhopal</strong> with a strong foundation in software engineering
                and artificial intelligence. My work sits at the intersection of robust backend
                architecture and intelligent AI applications.
              </p>
              <p>
                I specialize in building <strong className="text-slate-200 font-semibold">production-grade systems</strong> using Python, FastAPI,
                and Django, with hands-on experience deploying containerized ML services and
                developing RAG-based AI applications.
              </p>
              <p>
                With a <strong className="text-slate-200 font-semibold">CGPA above 9.0</strong> and GATE 2026 qualification,
                I combine academic excellence with practical engineering skills. I am actively seeking
                internships where I can contribute to backend systems, AI/ML pipelines, or LLM-powered products.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-8">
              {['Python', 'FastAPI', 'Django', 'TensorFlow', 'Docker', 'LangChain'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-[11px] font-semibold bg-bg-secondary/60 text-slate-400 rounded-lg border border-white/[0.05]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-6 rounded-2xl glass border border-white/[0.05] hover:border-accent-cyan/15 transition-all duration-400 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-bg-secondary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                  <item.icon size={22} className="text-accent-cyan" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-1.5">{item.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
