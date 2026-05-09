import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Brain, Layers, GitBranch, Cloud, Terminal, Cpu } from 'lucide-react'

const categories = [
  { icon: Code, title: 'Languages', skills: ['Python', 'C', 'C++', 'JavaScript', 'SQL'] },
  { icon: Layers, title: 'Backend', skills: ['FastAPI', 'Django', 'REST API Design', 'Authentication'] },
  { icon: Brain, title: 'AI / ML', skills: ['Machine Learning', 'Deep Learning', 'CNN', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas', 'NumPy'] },
  { icon: Cpu, title: 'GenAI / LLMs', skills: ['LangChain', 'RAG Systems', 'OpenAI API', 'Vector Databases', 'Prompt Engineering'] },
  { icon: Database, title: 'Databases', skills: ['MySQL', 'ChromaDB', 'FAISS'] },
  { icon: Cloud, title: 'Deployment', skills: ['Docker', 'Render', 'Streamlit'] },
  { icon: GitBranch, title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab'] },
  { icon: Terminal, title: 'Frontend', skills: ['HTML5', 'CSS3', 'Bootstrap'] }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 lg:py-36 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-cyan/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">Technical Expertise</span>
          <h2 className="text-3xl lg:text-[42px] font-black mt-4 text-slate-100">Skills & Technologies</h2>
          <p className="mt-4 text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            A comprehensive toolkit for building AI-powered applications and scalable backend systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative p-6 rounded-2xl glass border border-white/[0.05] hover:border-accent-cyan/15 transition-all duration-400 card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-accent-cyan/[0.04] rounded-full blur-2xl group-hover:bg-accent-cyan/[0.07] transition-colors" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-bg-secondary/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <cat.icon size={22} className="text-accent-cyan" />
                </div>
                <h3 className="text-sm font-bold text-slate-100 mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-[11px] font-semibold bg-bg-secondary/50 text-slate-400 rounded-md border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
