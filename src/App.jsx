import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased selection:bg-indigo-500/20 selection:text-indigo-900 overflow-x-hidden relative">
      {/* Dynamic ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/45 via-sky-200/30 to-transparent rounded-full blur-3xl animate-blob" />
        <div className="absolute top-[20%] -right-40 w-[550px] h-[550px] bg-gradient-to-bl from-violet-200/40 via-fuchsia-100/30 to-transparent rounded-full blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute top-[60%] left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/50 via-indigo-100/35 to-transparent rounded-full blur-3xl animate-blob [animation-delay:8s]" />
        <div className="absolute -bottom-40 right-[15%] w-[600px] h-[600px] bg-gradient-to-tl from-sky-200/35 via-indigo-200/30 to-transparent rounded-full blur-3xl animate-blob [animation-delay:6s]" />
        <div className="absolute inset-0 dot-grid opacity-[0.45] pointer-events-none" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
