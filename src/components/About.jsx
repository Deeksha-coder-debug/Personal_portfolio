import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Brain, Server, Container, Sparkles, GraduationCap, Trophy, Users } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'Deep Learning & Research',
    desc: 'Research Intern @ IIIT Bhopal; developed hybrid CNN-BiLSTM models with VADER sentiment for stock forecasting. Authored 2 research papers with Genetic Algorithm optimization (19.3% MSE gain).',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    text: 'text-indigo-600'
  },
  {
    icon: Server,
    title: 'Backend & Cloud Deployment',
    desc: 'Engineered RESTful APIs with FastAPI & Django. Containerized applications with Docker and deployed production services on Render and Vercel with structured error handling.',
    color: 'from-sky-500 to-sky-600',
    bg: 'bg-sky-50',
    text: 'text-sky-600'
  },
  {
    icon: Code2,
    title: 'Enterprise Fintech & Full Stack',
    desc: 'Built an enterprise-grade Mutual Fund CRM & Advisory Platform using Next.js, React, TypeScript, PostgreSQL, and Prisma ORM with multi-language AI assistant and financial calculators.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    text: 'text-violet-600'
  },
  {
    icon: Sparkles,
    title: 'GenAI & Autonomous Systems',
    desc: 'Hands-on with RAG architectures, LangChain, Vector Databases (ChromaDB, FAISS), Prompt Engineering, and Oracle Certified in Agentic AI foundations.',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    text: 'text-amber-600'
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left bio column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 tracking-wider uppercase mb-4">
              <GraduationCap size={14} />
              About Sai Deeksha
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-[1.2] mb-6">
              AI/ML Engineer & Researcher driven by <span className="text-gradient">practical intelligence</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              <p>
                I am an <strong className="text-slate-900 font-semibold">MCA candidate at IIIT Bhopal (CGPA 9.7/10.0)</strong> and a <strong className="text-slate-900 font-semibold">Research Intern</strong> in the Department of Information Technology under Prof. Dharmendra Dangi, focusing on deep learning architectures and intelligent systems.
              </p>
              <p>
                My work spans designing and deploying production-grade systems—ranging from containerized <strong className="text-slate-900 font-semibold">FastAPI REST microservices with Docker</strong> and <strong className="text-slate-900 font-semibold">Next.js + PostgreSQL fintech platforms</strong> to cutting-edge research in hybrid <strong className="text-slate-900 font-semibold">CNN-BiLSTM neural networks</strong> optimized via Genetic Algorithms.
              </p>
              <p>
                With a recognized track record as <strong className="text-slate-900 font-semibold">University Topper (9.5/10 CGPA) at Vikram Deb University</strong>, <strong className="text-slate-900 font-semibold">GATE 2026 DA Qualifier</strong> (Score 502), NIMCET AIR 713, and OJEE Rank 16, I combine deep theoretical foundations with disciplined problem-solving demonstrated across <strong className="text-slate-900 font-semibold">400+ DSA problems</strong>.
              </p>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Core Stack Highlights</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'FastAPI',
                  'Docker',
                  'Next.js',
                  'React',
                  'TypeScript',
                  'PostgreSQL',
                  'Prisma ORM',
                  'Django',
                  'Machine Learning',
                  'Deep Learning',
                  'LangChain',
                  'MySQL'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold bg-white text-slate-700 rounded-lg border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs`}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
