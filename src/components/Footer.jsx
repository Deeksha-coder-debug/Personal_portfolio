import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="py-14 border-t border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col items-center text-center gap-5">
          {/* Name — centered */}
          <div>
            <p className="text-lg font-bold text-slate-100">Sai Deeksha Talabaktula</p>
            <p className="text-[12px] text-slate-500 mt-1">MCA @ IIIT Bhopal | AI/ML & Backend Engineer</p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-white/[0.06]" />

          {/* Bottom row */}
          <div className="flex items-center gap-6">
            <p className="text-[11px] text-slate-700 flex items-center gap-1">
              Built with <Heart size={11} className="text-slate-700" /> using React & Tailwind
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg text-slate-600 hover:text-accent-cyan hover:bg-white/[0.03] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}


// import { motion } from 'framer-motion'
// import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

// export default function Footer() {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

//   return (
//     <footer className="py-12 border-t border-white/[0.04] relative">
//       <div className="max-w-7xl mx-auto px-5 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="text-center md:text-left">
//             <p className="text-base font-bold text-slate-200">Sai Deeksha Talabaktula</p>
//             <p className="text-[11px] text-slate-600 mt-1">MCA @ IIIT Bhopal | AI/ML & Backend Engineer</p>
//           </div>

//           <div className="flex items-center gap-2">
//             {[
//               { icon: Github, href: 'https://github.com/Deeksha-coder-debug' },
//               { icon: Linkedin, href: 'https://linkedin.com/in/saideekshatalabaktula' },
//               { icon: Mail, href: 'mailto:deeksha.jeypore@gmail.com' },
//             ].map((item, i) => (
//               <motion.a
//                 key={i}
//                 href={item.href}
//                 target={item.href.startsWith('http') ? '_blank' : undefined}
//                 rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                 whileHover={{ scale: 1.15, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="p-2.5 rounded-xl text-slate-600 hover:text-accent-cyan hover:bg-white/[0.03] transition-all"
//               >
//                 <item.icon size={18} />
//               </motion.a>
//             ))}
//           </div>

//           <div className="flex items-center gap-4">
//             <p className="text-[11px] text-slate-700 flex items-center gap-1">
//               Built with <Heart size={11} className="text-slate-700" /> using React & Tailwind
//             </p>
//             <motion.button
//               onClick={scrollToTop}
//               whileHover={{ scale: 1.1, y: -2 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 rounded-lg text-slate-600 hover:text-accent-cyan hover:bg-white/[0.03] transition-all"
//             >
//               <ArrowUp size={15} />
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
