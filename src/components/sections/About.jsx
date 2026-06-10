import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionHeading } from '../ui/SectionWrapper'
import StatCard from '../ui/StatCard'
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '../animations/variants'
import content from '../../data/content.json'

export default function About() {
  const { about } = content

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left — text */}
        <motion.div variants={fadeLeft}>
          <SectionLabel>Who I Am</SectionLabel>
          <SectionHeading>
            Strategy, data,<br />
            <span className="text-gradient">and delivery.</span>
          </SectionHeading>

          <div className="space-y-4">
            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="font-body text-base text-text-secondary leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Divider detail */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mt-8">
            <div className="h-px flex-1 bg-border-green" />
            <span className="text-xs text-text-muted font-body tracking-widest uppercase">Career Arc</span>
            <div className="h-px flex-1 bg-border-green" />
          </motion.div>

          {/* Career arc timeline strip */}
          <motion.div variants={staggerContainer} className="flex flex-wrap items-center gap-2 mt-4">
            {[
              { label: 'BE IT', sub: '2022' },
              { label: '→' },
              { label: 'Jio Platforms', sub: '2022–24' },
              { label: '→' },
              { label: 'MSc Analytics', sub: 'NUI Galway' },
              { label: '→' },
              { label: 'Techno-Functional', sub: '2026–' },
            ].map((item, i) =>
              item.label === '→' ? (
                <span key={i} className="text-green-primary text-lg font-display">→</span>
              ) : (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="px-3 py-1.5 rounded-lg border border-border-green bg-surface text-center"
                >
                  <p className="font-display text-xs font-600 text-text-primary">{item.label}</p>
                  {item.sub && <p className="font-body text-[10px] text-text-muted">{item.sub}</p>}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* Right — stat cards */}
        <motion.div variants={fadeRight} className="flex flex-col gap-4">
          <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-4">
            {about.stats.map((stat, i) => (
              <StatCard key={i} value={stat.value} label={stat.label} sub={stat.sub} />
            ))}
          </motion.div>

          {/* Availability note */}
          <motion.div
            variants={fadeUp}
            className="mt-2 p-4 rounded-xl border border-green-primary/20 bg-green-dim/10"
          >
            <div className="flex items-start gap-3">
              <span className="relative flex h-2 w-2 mt-1 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-primary" />
              </span>
              <p className="font-body text-sm text-text-secondary">
                {content.meta.availabilityNote}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
