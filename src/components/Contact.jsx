import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Send, ArrowUpRight, Sparkles } from 'lucide-react'

const links = [
  { icon: Mail, label: 'Email', value: 'deeksha.jeypore@gmail.com', href: 'mailto:deeksha.jeypore@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/Deeksha-coder-debug', href: 'https://github.com/Deeksha-coder-debug' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/saideekshatalabaktula', href: 'https://linkedin.com/in/saideekshatalabaktula' },
  // { icon: MapPin, label: 'Location', value: 'Bhopal, Madhya Pradesh, India' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-28 lg:py-36 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase">Get In Touch</span>
          <h2 className="text-3xl lg:text-[42px] font-black mt-4 text-slate-100">Let us Connect</h2>
          <p className="mt-4 text-[15px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            Open to internship opportunities in Software Development, AI/ML, Backend Engineering, and GenAI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {links.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/[0.05] hover:border-accent-cyan/15 transition-all group card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-bg-secondary/80 flex items-center justify-center group-hover:scale-110 transition-all">
                  <link.icon size={20} className="text-slate-500 group-hover:text-accent-cyan transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-600 mb-0.5 uppercase tracking-wider font-bold">{link.label}</p>
                  <p className="text-[13px] font-semibold text-slate-300 truncate">{link.value}</p>
                </div>
                <ArrowUpRight size={15} className="text-slate-700 group-hover:text-accent-cyan transition-colors" />
              </motion.a>
            ))}

            <div className="p-6 rounded-2xl glass border border-white/[0.05] glow-cyan">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={15} className="text-accent-cyan" />
                <h3 className="text-sm font-bold text-slate-200">Availability</h3>
              </div>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Currently available for <strong className="text-slate-300">internships</strong> starting
                immediately. Open to remote, hybrid, and on-site roles across India.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text" required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-3.5 bg-bg-secondary/40 border border-white/[0.06] rounded-xl text-[13px] text-slate-200 placeholder-slate-700 focus:outline-none focus:border-accent-cyan/30 focus:ring-1 focus:ring-accent-cyan/10 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email" required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-3.5 bg-bg-secondary/40 border border-white/[0.06] rounded-xl text-[13px] text-slate-200 placeholder-slate-700 focus:outline-none focus:border-accent-cyan/30 focus:ring-1 focus:ring-accent-cyan/10 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-3.5 bg-bg-secondary/40 border border-white/[0.06] rounded-xl text-[13px] text-slate-200 placeholder-slate-700 focus:outline-none focus:border-accent-cyan/30 focus:ring-1 focus:ring-accent-cyan/10 transition-all resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 text-bg rounded-xl font-semibold hover:bg-white transition-all shadow-lg shadow-accent-cyan/10"
              >
                <Send size={15} />
                {sent ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
