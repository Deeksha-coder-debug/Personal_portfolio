import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, FileText, Eye, CheckCircle2, Sparkles, Award, ExternalLink } from 'lucide-react'

const highlights = [
  'Education: IIIT Bhopal MCA (9.7/10 CGPA) & Vikram Deb Univ. Topper (9.5 CGPA)',
  'Research: 2 Co-Authored Papers on CNN-BiLSTM & GA Optimization @ IIIT Bhopal',
  'Exams: GATE 2026 (DA) Score 502, NIMCET AIR 713, OJEE Rank 16',
  'Projects: Enterprise Mutual Fund CRM (Next.js, PostgreSQL), FastAPI + Docker ML API, Django System',
  'Certifications: Oracle Certified Agentic AI Foundations & IBM Cybersecurity',
  'Technical Stack: Python, FastAPI, Docker, Next.js, React, PostgreSQL, LangChain, RAG',
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resume" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full uppercase tracking-wider mb-3">
            Official Curriculum Vitae
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Download Updated Resume
          </h2>
          <p className="mt-3 text-slate-600 max-w-lg mx-auto text-sm sm:text-base">
            Verified academic credentials, peer-reviewed deep learning research, production deployments, and certifications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 relative overflow-hidden"
        >
          {/* Decorative aura */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-100/50 via-sky-100/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Visual preview card */}
            <div className="w-full md:w-5/12 flex justify-center">
              <motion.a
                href="https://drive.google.com/file/d/1unWqqyi4_s3lZl-oCWdabGIzw2Ugl8jv/view"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-full max-w-[260px] aspect-[1/1.38] rounded-2xl bg-slate-50 border-2 border-slate-200 flex flex-col items-center justify-between p-6 text-center shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="w-full flex justify-between items-center text-xs text-slate-400">
                  <span className="font-bold text-indigo-600">PDF Document</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200">
                    Latest 2026
                  </span>
                </div>

                <div className="my-auto">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Sai Deeksha</h3>
                  <p className="text-xs text-slate-500 font-medium">Talabaktula</p>
                  <div className="w-10 h-0.5 bg-indigo-500/30 mx-auto my-3" />
                  <p className="text-[11px] font-bold text-slate-700">MCA @ IIIT Bhopal</p>
                  <p className="text-[10px] text-slate-500 font-semibold">CGPA: 9.7 / 10.0</p>
                  <p className="text-[10px] text-emerald-600 font-bold mt-1">GATE 2026 DA (502)</p>
                </div>

                <div className="w-full text-center pt-2 border-t border-slate-200/80">
                  <p className="text-[10px] text-indigo-600 font-semibold group-hover:underline flex items-center justify-center gap-1">
                    Open on Google Drive <ExternalLink size={10} />
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Checklist & Buttons */}
            <div className="w-full md:w-7/12 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-indigo-600" />
                  Key Resume Inclusions
                </h3>
                <ul className="space-y-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-normal">
                      <CheckCircle2 size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.a
                  href="/Deeksha_Talabaktula_aiml_resume.pdf"
                  download="Deeksha_Talabaktula_aiml_resume.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl font-semibold shadow-md shadow-indigo-600/20 hover:from-indigo-700 hover:to-indigo-800 transition-all text-sm"
                >
                  <Download size={16} />
                  Download PDF
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1unWqqyi4_s3lZl-oCWdabGIzw2Ugl8jv/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 rounded-xl font-semibold border border-slate-300 hover:border-indigo-400 hover:text-indigo-600 shadow-xs transition-all text-sm"
                >
                  <ExternalLink size={16} />
                  View on Google Drive
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
