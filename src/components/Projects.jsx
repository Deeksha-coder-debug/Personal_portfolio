import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, ArrowUpRight, Layers, Container, Sparkles, Rocket, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    title: 'Enterprise Mutual Fund CRM & Advisory Platform',
    category: 'Full-Stack Fintech & AI',
    description: 'Full-stack wealth management platform serving an AMFI-registered distributor, digitizing lead capture and financial advisory.',
    points: [
      'Architected and developed a full-stack wealth management platform serving an AMFI-registered distributor.',
      'Built interactive AI conversational assistant ("TMFS Investor Mitra") supporting 4 languages (English, Hindi, Odia, Telugu) with Web Speech API voice recognition.',
      'Built financial planning calculators for SIP, retirement, education, and goal-based investing with real-time compound-growth charts.',
      'Implemented secure Admin CRM with Role-Based Access Control (RBAC), Google OAuth authentication and deployed on Vercel.'
    ],
    image: '/images/mutual-fund-crm.png',
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Vercel'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: 'https://tirumala-mutual-fund-services.vercel.app/',
    badges: ['Full Stack', 'Live', 'Fintech & AI'],
    featured: true
  },
  {
    title: 'Heart Disease Risk Predictor',
    category: 'Production Machine Learning API',
    description: 'Production-ready RESTful API serving a Logistic Regression prediction model trained on 4,240+ records from the Framingham Heart Study dataset.',
    points: [
      'Developed and deployed a Python-based REST API using FastAPI serving a Logistic Regression model trained on 4,240+ records.',
      'Implemented feature engineering and cross-validation using Pandas and NumPy, achieving 85% classification accuracy.',
      'Containerized application components with Docker and deployed live to Render, ensuring high availability and reliable request-response behavior.'
    ],
    image: '/images/heart-disease.png',
    tags: ['FastAPI', 'Docker', 'Streamlit', 'Machine Learning', 'Scikit-Learn', 'Render'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: 'https://heart-disease-risk-predictor-api-project.onrender.com/',
    badges: ['Live', 'Dockerized', 'Production Ready'],
    featured: true
  },
  {
    title: 'Hybrid CNN-BiLSTM Stock Forecasting (Research)',
    category: 'Deep Learning & Optimization',
    description: 'Research project co-authored under Prof. Dharmendra Dangi at Department of IT, IIIT Bhopal across 25 equities and 6,281 observations.',
    points: [
      'Engineered a hybrid CNN-BiLSTM neural network combining spatial feature extraction with bidirectional sequential memory and VADER sentiment scores.',
      'Designed Genetic Algorithm for hyperparameter search, evaluating only 18 of 576 configurations (96.9% fewer evaluations).',
      'Improved validation MSE by 19.3% versus standard grid search; co-authored two research papers (status: submitted).'
    ],
    image: '/images/stock-prediction.png',
    tags: ['Deep Learning', 'CNN-BiLSTM', 'Genetic Algorithm', 'TensorFlow', 'VADER'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: 'https://github.com/Deeksha-coder-debug',
    badges: ['Research', 'Deep Learning'],
    featured: true
  },
  {
    title: 'Full-Stack Task Management System',
    category: 'Backend Architecture',
    description: 'Production Python/Django web application with MySQL database, custom authentication middleware, and robust session-based security.',
    points: [
      'Implemented custom authentication, complete CRUD workflows, database operations, and session-based security.',
      'Debugged application logic and SQL queries while enforcing per-user data isolation through custom authentication and access controls.',
      'Utilized Django ORM and structured error handling to eliminate application-level edge cases and exceptions.'
    ],
    image: '/images/Task-manager.png',
    tags: ['Django', 'MySQL', 'Django ORM', 'Session Auth', 'CRUD'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: 'https://todo-django-app-m60s.onrender.com/',
    badges: ['Live', 'Production Ready'],
    featured: false
  },
  {
    title: 'Plant Disease Detection',
    category: 'Computer Vision',
    description: 'Agricultural diagnostic system using Deep Convolutional Neural Networks to classify and detect plant leaf diseases with high precision.',
    points: [
      'Engineered CNN architecture trained on leaf image datasets for real-time agricultural diagnostics.',
      'Implemented data augmentation, dropout regularization, and transfer learning, achieving 85% test accuracy.'
    ],
    image: '/images/plant-disease.png',
    tags: ['CNN', 'TensorFlow', 'Keras', 'OpenCV', 'Data Augmentation'],
    github: 'https://github.com/Deeksha-coder-debug',
    demo: 'https://github.com/Deeksha-coder-debug/ML-Projects',
    badges: ['AI Powered', 'Computer Vision'],
    featured: false
  }
]

const badgeStyles = {
  'Live': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Dockerized': 'bg-sky-50 text-sky-700 border-sky-200',
  'Production Ready': 'bg-slate-100 text-slate-800 border-slate-200',
  'Full Stack': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Fintech & AI': 'bg-purple-50 text-purple-700 border-purple-200',
  'Research': 'bg-amber-50 text-amber-700 border-amber-200',
  'Deep Learning': 'bg-blue-50 text-blue-700 border-blue-200',
  'AI Powered': 'bg-rose-50 text-rose-700 border-rose-200',
  'Computer Vision': 'bg-teal-50 text-teal-700 border-teal-200'
}

function ProjectImage({ src, alt }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100">
        <Layers size={32} className="text-slate-400 mb-2" />
        <span className="text-xs text-slate-500 font-semibold">{alt}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full uppercase tracking-wider mb-3">
            Featured Portfolio
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Engineered Projects & Research
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            From production cloud microservices and enterprise fintech platforms to peer-reviewed neural network research.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group flex flex-col bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl ${
                project.featured
                  ? 'border-indigo-200/90 ring-1 ring-indigo-500/10'
                  : 'border-slate-200/90 hover:border-indigo-300'
              }`}
            >
              {/* Image banner */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 border-b border-slate-100">
                <ProjectImage src={project.image} alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badges on banner */}
                <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end max-w-[80%]">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full border shadow-sm backdrop-blur-md ${badgeStyles[badge] || 'bg-white/90 text-slate-800 border-slate-200'}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Bullet points from resume */}
                  <ul className="space-y-1.5 mb-5 text-left">
                    {project.points.slice(0, 3).map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-600 leading-normal">
                        <CheckCircle2 size={13} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-100">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-semibold bg-slate-50 text-slate-600 rounded border border-slate-200 group-hover:border-indigo-100 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link buttons */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors"
                    >
                      <Github size={14} /> Source Code
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 ml-auto group/link"
                      >
                        Live Demo
                        <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
