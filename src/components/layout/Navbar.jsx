import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import content from '../../data/content.json'

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Resume',     href: '#resume' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen,   setMobileOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section detection
      const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top:      { backgroundColor: 'rgba(8,12,10,0)',    borderColor: 'rgba(31,46,31,0)' },
          scrolled: { backgroundColor: 'rgba(8,12,10,0.88)', borderColor: 'rgba(31,46,31,1)' },
        }}
        transition={{ duration: 0.3 }}
        style={{ backdropFilter: scrolled ? 'blur(16px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <span className="w-8 h-8 rounded-lg bg-green-dim border border-green-primary/30 flex items-center justify-center group-hover:bg-green-dim/80 transition-colors">
              <span className="font-display font-800 text-green-primary text-sm">G</span>
            </span>
            <span className="font-display font-700 text-text-primary text-sm hidden sm:block">
              {content.meta.name.split(' ')[0]}
              <span className="text-green-primary">.</span>
            </span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`
                    relative px-3 py-1.5 rounded-lg text-sm font-body font-500
                    transition-colors duration-200
                    ${isActive
                      ? 'text-green-primary'
                      : 'text-text-secondary hover:text-text-primary'}
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-lg bg-green-dim/40"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href={content.contact.resumePdf}
            download
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-green-primary/10 border border-green-primary/30 text-green-primary text-sm font-display font-600 hover:bg-green-primary/20 transition-colors duration-200"
          >
            <Download size={14} />
            Download CV
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-border-green"
            style={{
              background: 'rgba(8,12,10,0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-2 transition-colors font-body text-sm"
                >
                  {label}
                </button>
              ))}
              <a
                href={content.contact.resumePdf}
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 mt-2 px-4 py-3 rounded-lg bg-green-primary/10 border border-green-primary/30 text-green-primary text-sm font-display font-600"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
