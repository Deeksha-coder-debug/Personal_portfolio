import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, FileText, Eye, CheckCircle, AlertCircle } from 'lucide-react'

const highlights = [
  'Academic credentials & CGPA',
  'Technical skills & certifications',
  'Project descriptions with metrics',
  'Achievements & competitive ranks',
  'Contact & professional links',
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resume" className="py-28 lg:py-36 relative">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">Resume</span>
          <h2 className="text-3xl lg:text-[42px] font-black mt-4 text-slate-100">Download My Resume</h2>
          <p className="mt-4 text-[15px] text-slate-500 max-w-lg mx-auto leading-relaxed">
            Full academic and professional details in PDF format.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 lg:p-12 border border-white/[0.06] glow-cyan"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-2/5">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="aspect-[3/4] max-w-[240px] mx-auto rounded-2xl bg-bg border-2 border-white/[0.06] flex flex-col items-center justify-center p-8 text-center shadow-2xl shadow-black/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-bg-secondary flex items-center justify-center mb-5">
                  <FileText size={30} className="text-accent-cyan" />
                </div>
                <p className="text-base font-bold text-slate-200">Sai Deeksha</p>
                <p className="text-sm text-slate-500 mt-0.5">Talabaktula</p>
                <div className="w-10 h-px bg-white/[0.06] my-4" />
                <p className="text-[11px] text-slate-600">MCA @ IIIT Bhopal</p>
                <p className="text-[11px] text-slate-600 mt-0.5">Resume PDF</p>
                <div className="mt-5 px-3 py-1 bg-emerald-950/30 border border-emerald-900/30 rounded-full">
                  <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-wider">Updated 2026</span>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-3/5 space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-200 mb-4">What is inside?</h3>
                <ul className="space-y-3">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-[13px] text-slate-400">
                      <CheckCircle size={15} className="text-accent-cyan/70 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="p-4 rounded-xl bg-bg-secondary/40 border border-white/[0.04]">
                <div className="flex items-start gap-2.5">
                  <AlertCircle size={14} className="text-amber-500/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 mb-1">How to replace your resume</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Place your PDF file at <code className="text-accent-cyan bg-white/[0.03] px-1 rounded">public/resume.pdf</code>. 
                      The download button links to <code className="text-accent-cyan bg-white/[0.03] px-1 rounded">/resume.pdf</code> which Vite serves from the public folder.
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 text-bg rounded-xl font-semibold hover:bg-white transition-all shadow-lg shadow-accent-cyan/10"
                >
                  <Download size={17} />
                  Download PDF
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 glass rounded-xl font-semibold text-slate-300 hover:text-slate-100 border border-white/[0.06] hover:border-accent-cyan/15 transition-all"
                >
                  <Eye size={17} />
                  View Online
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
