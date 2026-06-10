import { motion } from 'framer-motion'
import { cardHover, fadeUp } from '../animations/variants'

export default function DashboardCard({
  children,
  className = '',
  glowOnHover = true,
  animate = true,
}) {
  const Component = animate ? motion.div : 'div'
  const motionProps = animate
    ? {
        variants: fadeUp,
        initial: 'rest',
        whileHover: glowOnHover ? 'hover' : undefined,
      }
    : {}

  return (
    <Component
      {...motionProps}
      className={`
        relative rounded-2xl p-6
        bg-surface border border-border-green
        transition-colors duration-300
        ${glowOnHover ? 'hover:border-green-primary/30 hover:shadow-green-glow' : ''}
        ${className}
      `}
      style={{
        background: 'linear-gradient(145deg, rgba(16,21,16,0.95) 0%, rgba(24,31,24,0.9) 100%)',
      }}
    >
      {/* Subtle top-left corner accent */}
      <span
        className="pointer-events-none absolute top-0 left-0 w-16 h-16 rounded-tl-2xl opacity-30"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(34,197,94,0.18) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </Component>
  )
}
