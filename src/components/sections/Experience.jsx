import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Calendar, ExternalLink } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionHeading } from '../ui/SectionWrapper'
import MetricBadge from '../ui/MetricBadge'
import { fadeUp, staggerContainer } from '../animations/variants'
import content from '../../data/content.json'

const TYPE_STYLES = {
  'Current Venture / Product Leadership': 'bg-green-primary/10 text-green-primary border-green-primary/30',
  'Freelance':  'bg-surface-2 text-text-secondary border-border-green',
  'Full-time':  'bg-blue-900/20 text-blue-300/80 border-blue-800/30',
}

export default function Experience() {
  const { experience } = content
  const [expanded, setExpanded] = useState(experience[0]?.id || null)

  return (
    <SectionWrapper id="experience">
      <motion.div variants={fadeUp}>
        <SectionLabel>Work History</SectionLabel>
        <SectionHeading>
          Where I've <span className="text-gradient">delivered.</span>
        </SectionHeading>
        <p className="font-body text-text-secondary max-w-xl mb-12">
          From enterprise-scale platform delivery at Jio Platforms to functional consulting and product leadership — a deliberate path toward techno-functional roles.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border-green ml-[19px] hidden md:block" />

        <div className="flex flex-col gap-6">
          {experience.map((job, idx) => {
            const isOpen = expanded === job.id
            const typeCls = TYPE_STYLES[job.type] || TYPE_STYLES['Full-time']

            return (
              <motion.div key={job.id} variants={fadeUp} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full border-2 items-center justify-center bg-bg-deep z-10"
                  style={{ borderColor: job.current ? '#22C55E' : '#1F2E1F' }}
                >
                  <div className={`w-3 h-3 rounded-full ${job.current ? 'bg-green-primary' : 'bg-text-muted'}`} />
                </div>

                {/* Card */}
                <div
                  className={`
                    rounded-2xl border transition-all duration-300 overflow-hidden
                    ${isOpen ? 'border-green-primary/30 shadow-green-glow' : 'border-border-green hover:border-green-primary/20'}
                  `}
                  style={{
                    background: 'linear-gradient(145deg, rgba(16,21,16,0.95) 0%, rgba(24,31,24,0.9) 100%)',
                  }}
                >
                  {/* Card header — always visible */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : job.id)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-display font-600 border ${typeCls}`}>
                          {job.type}
                        </span>
                        {job.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-primary/10 text-green-primary text-[10px] font-display font-600">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-primary" />
                            </span>
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-700 text-text-primary">{job.role}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                        <span className="font-body text-sm font-500 text-green-primary">{job.company}</span>
                        <span className="flex items-center gap-1 text-text-muted text-xs font-body">
                          <MapPin size={11} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-text-muted text-xs font-body">
                          <Calendar size={11} /> {job.period}
                        </span>
                      </div>
                      <p className="font-body text-sm text-text-secondary mt-2 italic">{job.headline}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <ChevronDown size={18} className="text-text-muted" />
                    </motion.div>
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-border-green pt-4">
                          {/* Metric badges for Jio */}
                          {job.metrics && (
                            <div className="flex flex-wrap gap-3 mb-5">
                              {job.metrics.map((m, i) => (
                                <MetricBadge key={i} value={m.value} label={m.label} />
                              ))}
                            </div>
                          )}

                          {/* Bullet points */}
                          <ul className="space-y-2.5">
                            {job.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-green-primary" />
                                <span className="font-body text-sm text-text-secondary leading-relaxed">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
