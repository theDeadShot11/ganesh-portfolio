import { motion } from 'framer-motion'
import { staggerContainer } from '../animations/variants'

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  )
}

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-green-primary opacity-60" />
      <span className="text-green-primary font-display text-xs font-600 tracking-widest uppercase">
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`font-display text-3xl md:text-4xl font-800 text-text-primary mb-6 ${className}`}>
      {children}
    </h2>
  )
}
