import { motion } from 'framer-motion'
import { pillReveal } from '../animations/variants'

export default function TagPill({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-green-dim/40 text-green-primary border border-green-dim/60 hover:bg-green-dim/70',
    tool:    'bg-surface-2 text-text-secondary border border-border-green hover:border-green-primary/40 hover:text-text-primary',
    label:   'bg-transparent text-text-muted border border-border-green/50',
    live:    'bg-green-primary/10 text-green-primary border border-green-primary/30',
  }

  return (
    <motion.span
      variants={pillReveal}
      className={`
        inline-flex items-center px-2.5 py-1 rounded-md
        text-xs font-body font-500 tracking-wide
        transition-all duration-200 cursor-default
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.span>
  )
}
