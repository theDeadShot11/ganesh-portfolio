import { motion } from 'framer-motion'
import { fadeUp } from '../animations/variants'

export default function StatCard({ value, label, sub }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        relative flex flex-col items-center text-center p-5 rounded-xl
        border border-border-green
        hover:border-green-primary/40 hover:shadow-green-glow
        transition-all duration-300
      "
      style={{
        background: 'linear-gradient(135deg, rgba(16,21,16,0.95) 0%, rgba(20,83,45,0.12) 100%)',
      }}
    >
      <span className="font-display text-2xl md:text-3xl font-800 text-gradient leading-none mb-1">
        {value}
      </span>
      <span className="font-display text-sm font-600 text-text-primary mt-1">{label}</span>
      <span className="font-body text-xs text-text-muted mt-0.5">{sub}</span>
    </motion.div>
  )
}
