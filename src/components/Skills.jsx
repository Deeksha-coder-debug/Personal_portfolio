import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Brain, Layers, GitBranch, Cloud, Terminal, Cpu, Sparkles } from 'lucide-react'

const categories = [
  {
    icon: Code,
    title: 'Programming & CS',
    skills: ['Python', 'C', 'C++', 'SQL', 'JavaScript', 'Data Structures & Algorithms (400+)', 'OOP', 'DBMS'],
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    icon: Brain,
    title: 'AI/ML & Data Science',
    skills: ['Machine Learning', 'Deep Learning', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'CNN-BiLSTM', 'Genetic Algorithms'],
    color: 'text-cyan-600',
    bg: 'bg-cyan-50'
  },
  {
    icon: Cpu,
    title: 'GenAI & LLMs',
    skills: ['Prompt Engineering', 'RAG Architectures', 'LangChain', 'Vector Databases', 'Agentic AI Systems'],
    color: 'text-violet-600',
    bg: 'bg-violet-50'
  },
  {
    icon: Layers,
    title: 'Backend & Databases',
    skills: ['FastAPI', 'Django', 'REST APIs', 'PostgreSQL', 'MySQL', 'Prisma ORM', 'Session Auth & RBAC'],
    color: 'text-sky-600',
    bg: 'bg-sky-50'
  },
  {
    icon: Terminal,
    title: 'Frontend & UI',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Web Speech API'],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    icon: Cloud,
    title: 'Deployment & Containers',
    skills: ['Docker', 'Vercel', 'Render', 'Streamlit', 'Containerization', 'Microservices'],
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    icon: GitBranch,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Jupyter', 'Google Colab', 'VS Code', 'Claude', 'Antigravity'],
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: Sparkles,
    title: 'Certifications & Honors',
    skills: ['Oracle Certified Agentic AI', 'IBM Cybersecurity', 'GATE 2026 DA (502)', 'Vikram Deb Univ Topper'],
    color: 'text-rose-600',
    bg: 'bg-rose-50'
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full uppercase tracking-wider mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive skill set covering production backend engineering, machine learning pipelines, and modern web applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon size={22} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-slate-50 text-slate-700 rounded-md border border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors"
                    >
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
