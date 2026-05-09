import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, ArrowUpRight, Layers, Container, Sparkles, Rocket } from 'lucide-react'

const projects = [
  {
    title: 'AI-Powered Multi-Stock Forecasting System',
    description: 'An intelligent stock forecasting system using Deep Learning networks and technical indicators. Features multi-ticker support, real-time data ingestion, and interactive visualization dashboards for trend analysis.',
    image: '/images/stock-prediction.png',
    tags: ['Python', 'LSTM', 'TensorFlow', 'Pandas', 'Streamlit'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: '#',
    badges: ['AI Powered', 'Ongoing'],
    featured: true
  },
  {
    title: 'Heart Disease Risk Predictor',
    description: 'Production-grade ML inference API built with FastAPI and Docker. Deployed a Logistic Regression model trained on the Framingham dataset with real-time risk assessment via Streamlit frontend.',
    image: '/images/heart-disease.png',
    tags: ['FastAPI', 'Docker', 'Scikit-Learn', 'Pandas', 'Render'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: 'https://heart-disease-risk-predictor-api-project.onrender.com/',
    badges: ['Live', 'Dockerized', 'Production Ready'],
    featured: true
  },
  {
    title: 'Plant Disease Detection',
    description: 'Computer vision system using CNN architecture to identify crop diseases from leaf images. Achieved 85% accuracy with data augmentation and transfer learning for agricultural diagnostics.',
    image: '/images/plant-disease.png',
    tags: ['CNN', 'TensorFlow', 'Keras', 'OpenCV', 'Data Augmentation'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: 'https://github.com/Deeksha-coder-debug/ML-Projects',
    badges: ['AI Powered'],
    featured: false
  },
  {
    title: 'Django Task Manager',
    description: 'Secure full-stack task management application with custom authentication middleware, role-based access control, and normalized MySQL schema design for multi-tenant data isolation.',
    image: '/images/Task-manager.png',
    tags: ['Django', 'MySQL', 'RBAC', 'Middleware', 'Authentication'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: 'https://todo-django-app-m60s.onrender.com/',
    badges: ['Live', 'Production Ready'],
    featured: false
  },
  {
    title: 'AI Placement Mentor RAG',
    description: 'An intelligent RAG-based career assistant that leverages LangChain and vector databases to provide personalized placement guidance, resume feedback, and interview preparation using domain-specific knowledge.',
    image: '/images/rag.png',
    tags: ['LangChain', 'RAG', 'ChromaDB', 'OpenAI', 'FastAPI'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: '#',
    badges: ['Upcoming', 'AI Powered'],
    featured: true
  }
]

const badgeConfig = {
  'Live': { icon: Rocket, color: 'bg-emerald-500/90 text-bg', shadow: 'shadow-emerald-500/20' },
  'Dockerized': { icon: Container, color: 'bg-accent-cyan/90 text-bg', shadow: 'shadow-accent-cyan/20' },
  'AI Powered': { icon: Sparkles, color: 'bg-accent-purple/90 text-white', shadow: 'shadow-accent-purple/20' },
  'Production Ready': { icon: Rocket, color: 'bg-slate-100 text-bg', shadow: 'shadow-slate-100/10' },
  'Upcoming': { icon: Sparkles, color: 'bg-slate-600 text-slate-100', shadow: 'shadow-slate-600/10' },
  'Ongoing': { icon: Sparkles, color: 'bg-amber-500/90 text-bg', shadow: 'shadow-amber-500/20' },
}

function ProjectImage({ src, alt }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-bg-secondary">
        <Layers size={32} className="text-slate-700 mb-2" />
        <span className="text-[11px] text-slate-600 font-semibold">{alt}</span>
      </div>
    )
  }
  return <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={() => setError(true)} loading="lazy" />
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 lg:py-36 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent-purple/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">Portfolio</span>
          <h2 className="text-3xl lg:text-[42px] font-black mt-4 text-slate-100">Featured Projects</h2>
          <p className="mt-4 text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            Production-ready applications demonstrating backend engineering, AI/ML deployment, and system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.35 } }}
              className={`group relative rounded-2xl overflow-hidden glass border transition-all duration-500 ${
                project.featured
                  ? 'border-white/[0.08] glow-cyan'
                  : 'border-white/[0.05] hover:border-accent-cyan/10'
              }`}
            >
              {project.featured && (
                <div className="absolute -inset-px bg-gradient-to-b from-accent-cyan/10 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className="relative h-52 overflow-hidden">
                <ProjectImage src={project.image} alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
                <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end max-w-[70%]">
                  {project.badges.map((badge) => {
                    const cfg = badgeConfig[badge]
                    return (
                      <span key={badge} className={`inline-flex items-center gap-1 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider rounded-full shadow-lg ${cfg.color} ${cfg.shadow}`}>
                        <cfg.icon size={10} />
                        {badge}
                      </span>
                    )
                  })}
                </div>
              </div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors pr-2 leading-snug">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-slate-600 group-hover:text-accent-cyan transition-colors mt-1 flex-shrink-0" />
                </div>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-bold bg-bg-secondary/60 text-slate-500 rounded border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-accent-cyan transition-colors">
                    <Github size={14} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-accent-cyan transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
