import { motion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import Avatar from '../ui/Avatar'
import { heroTextReveal, fadeUp, staggerContainer } from '../animations/variants'
import content from '../../data/content.json'

export default function Hero() {
  const { meta, contact } = content

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial green spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.6) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Availability pill */}
            <motion.div custom={0} variants={heroTextReveal} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-primary/30 bg-green-dim/20 text-green-primary text-xs font-display font-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-primary" />
                </span>
                Available for new roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={heroTextReveal}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-800 text-text-primary mb-2 leading-[1.05]"
            >
              {meta.name.split(' ')[0]}
              <br />
              <span className="text-gradient">{meta.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Role */}
            <motion.div custom={2} variants={heroTextReveal} className="mb-4">
              <p className="font-display text-lg md:text-xl font-600 text-text-secondary">
                {meta.role}
                <span className="mx-2 text-green-primary opacity-50">·</span>
                {meta.subRole}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              custom={3}
              variants={heroTextReveal}
              className="font-body text-base md:text-lg text-text-secondary leading-relaxed max-w-lg mb-2"
            >
              {meta.tagline}
            </motion.p>

            {/* Location */}
            <motion.div custom={4} variants={heroTextReveal} className="flex items-center gap-1.5 mb-8">
              <MapPin size={14} className="text-green-primary opacity-70" />
              <span className="font-body text-sm text-text-muted">{meta.location}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div custom={5} variants={heroTextReveal} className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById('about')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-primary text-bg-deep font-display font-700 text-sm hover:bg-green-mid transition-colors duration-200 shadow-green-glow"
              >
                View My Work
                <ArrowDown size={15} />
              </button>
              <a
                href={contact.resumePdf}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border-green bg-surface hover:border-green-primary/40 hover:bg-surface-2 text-text-primary font-display font-600 text-sm transition-all duration-200"
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              custom={6}
              variants={heroTextReveal}
              className="hidden lg:flex items-center gap-2 mt-16 text-text-muted"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown size={14} className="text-green-primary" />
              </motion.div>
              <span className="font-body text-xs tracking-widest uppercase">Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* Right — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-xs md:max-w-sm">
              <Avatar />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
