import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, Send, ArrowUpRight, Sparkles, Phone, Code2 } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email Address',
    value: 'deeksha.jeypore@gmail.com',
    href: 'mailto:deeksha.jeypore@gmail.com',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+91 7846833564',
    href: 'tel:+917846833564',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/saideekshatalabaktula',
    href: 'https://linkedin.com/in/saideekshatalabaktula',
    color: 'text-sky-600',
    bg: 'bg-sky-50'
  },
  {
    icon: Github,
    label: 'GitHub Repositories',
    value: 'github.com/Deeksha-coder-debug',
    href: 'https://github.com/Deeksha-coder-debug',
    color: 'text-slate-800',
    bg: 'bg-slate-100'
  },
  {
    icon: Code2,
    label: 'LeetCode Profile',
    value: 'leetcode.com/saideeksha (400+ Solved)',
    href: 'https://leetcode.com/saideeksha',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900">
            Let&apos;s Connect & Collaborate
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Actively open to Internship & Full-Time opportunities across AI/ML, Backend Development, GenAI, and Software Engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-11 h-11 rounded-xl ${link.bg} ${link.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <link.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
              </motion.a>
            ))}

            {/* Availability Box */}
            <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-200/70 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-indigo-600" />
                <h3 className="text-sm font-bold text-indigo-950">Immediate Availability</h3>
              </div>
              <p className="text-xs text-indigo-900/80 leading-relaxed font-medium">
                Available for internships and full-time hiring in <strong className="text-indigo-950">AI/ML, GenAI, and SDE/Backend roles</strong>. Open to on-site, hybrid, and remote positions across India (willing to relocate).
              </p>
            </div>
          </motion.div>

          {/* Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-1">Send a Message</h3>
            <p className="text-xs text-slate-500 mb-6">Have an opportunity or question? Drop me a direct message below.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 transition-all"
                  placeholder="Recruiter or Engineering Lead"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 transition-all"
                  placeholder="recruiter@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 transition-all resize-none"
                  placeholder="Hi Sai Deeksha, we have an exciting role matching your profile in AI/ML & Backend engineering..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl font-semibold shadow-md shadow-indigo-600/20 hover:from-indigo-700 hover:to-indigo-800 transition-all text-sm"
              >
                <Send size={15} />
                {sent ? 'Thank you! Message Sent Successfully' : 'Send Direct Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
