import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Building from './components/Building'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-slate-100 antialiased selection:bg-accent-cyan/15 overflow-x-hidden">
      {/* Global ambient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-accent-cyan/[0.025] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-purple/[0.02] rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Building /> */}
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
