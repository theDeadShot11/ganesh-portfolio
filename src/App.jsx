import Navbar   from './components/layout/Navbar'
import Footer   from './components/layout/Footer'
import Hero     from './components/sections/Hero'
import About    from './components/sections/About'
import Skills   from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Resume   from './components/sections/Resume'
import Contact  from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative bg-bg-deep min-h-screen">
      <Navbar />

      <main>
        <Hero />

        {/* Section divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border-green to-transparent" />
        </div>

        <About />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border-green to-transparent" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border-green to-transparent" />
        </div>

        <Experience />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border-green to-transparent" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border-green to-transparent" />
        </div>

        <Education />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border-green to-transparent" />
        </div>

        <Resume />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border-green to-transparent" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  )
}
