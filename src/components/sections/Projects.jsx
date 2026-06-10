import { motion } from 'framer-motion'
import { TrendingUp, ShoppingCart, Activity, Camera, Music, Globe, PieChart } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionHeading } from '../ui/SectionWrapper'
import DashboardCard from '../ui/DashboardCard'
import TagPill from '../ui/TagPill'
import LiveBadge from '../ui/LiveBadge'
import { fadeUp, staggerContainer, staggerContainerSlow } from '../animations/variants'
import content from '../../data/content.json'

const FEATURED_ICONS = {
  'burden-of-borrowing': TrendingUp,
  'tesco-basket':        ShoppingCart,
  'athlete-platform':    Activity,
}

const COMPACT_ICONS = {
  'facial-recognition-voting': Camera,
  'spotify-recommendation':    Music,
  'market-entry-strategy':     Globe,
  'portfolio-optimisation':    PieChart,
}

const FEATURED_ACCENTS = [
  'from-green-dim/20 to-transparent',
  'from-blue-900/10 to-transparent',
  'from-green-dim/15 to-transparent',
]

export default function Projects() {
  const { featured, compact } = content.projects

  return (
    <SectionWrapper id="projects">
      <motion.div variants={fadeUp}>
        <SectionLabel>Portfolio</SectionLabel>
        <SectionHeading>
          What I've <span className="text-gradient">built & analysed.</span>
        </SectionHeading>
        <p className="font-body text-text-secondary max-w-xl mb-12">
          A mix of capstone analytics work, live product delivery, and strategic consulting — each grounded in real data and real outcomes.
        </p>
      </motion.div>

      {/* Featured projects */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featured.map((project, idx) => {
          const Icon = FEATURED_ICONS[project.id] || TrendingUp
          const accent = FEATURED_ACCENTS[idx % FEATURED_ACCENTS.length]

          return (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border-green hover:border-green-primary/35 hover:shadow-green-glow transition-all duration-300 flex flex-col overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(16,21,16,0.95) 0%, rgba(24,31,24,0.9) 100%)',
              }}
            >
              {/* Card top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${accent} via-green-primary/40`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + live badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-dim/40 border border-green-primary/20 flex items-center justify-center">
                    <Icon size={18} className="text-green-primary" />
                  </div>
                  {project.isLive && <LiveBadge />}
                </div>

                {/* Label */}
                <p className="font-body text-xs text-text-muted mb-2 tracking-wide">{project.label}</p>

                {/* Title */}
                <h3 className="font-display text-base font-700 text-text-primary mb-3 leading-tight group-hover:text-green-primary transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Outcomes */}
                <div className="p-3 rounded-lg bg-green-dim/15 border border-green-primary/15 mb-4">
                  <p className="text-[11px] font-display font-600 text-green-primary uppercase tracking-widest mb-1">Outcome</p>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">{project.outcomes}</p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, i) => (
                    <TagPill key={i} variant="tool">{tool}</TagPill>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Compact projects */}
      <motion.div variants={fadeUp} className="mb-4">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border-green" />
          <span className="text-xs text-text-muted font-body tracking-widest uppercase">More Projects</span>
          <div className="h-px flex-1 bg-border-green" />
        </div>
      </motion.div>

      <motion.div variants={staggerContainerSlow} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {compact.map((project) => {
          const Icon = COMPACT_ICONS[project.id] || PieChart
          return (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="flex gap-4 p-4 rounded-xl border border-border-green hover:border-green-primary/25 hover:shadow-green-glow transition-all duration-300"
              style={{ background: 'rgba(16,21,16,0.7)' }}
            >
              <div className="w-9 h-9 rounded-lg bg-green-dim/30 border border-green-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={16} className="text-green-primary opacity-80" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-[10px] text-text-muted mb-0.5 tracking-wide">{project.label}</p>
                <h4 className="font-display text-sm font-700 text-text-primary mb-1">{project.title}</h4>
                <p className="font-body text-xs text-text-secondary leading-relaxed mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tools.map((tool, i) => (
                    <TagPill key={i} variant="tool">{tool}</TagPill>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
