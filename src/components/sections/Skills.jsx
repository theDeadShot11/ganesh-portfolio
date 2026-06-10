import { motion } from 'framer-motion'
import { Briefcase, BarChart2, Code2 } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionHeading } from '../ui/SectionWrapper'
import DashboardCard from '../ui/DashboardCard'
import TagPill from '../ui/TagPill'
import { fadeUp, staggerContainer } from '../animations/variants'
import content from '../../data/content.json'

const ICONS = {
  briefcase: Briefcase,
  chart:     BarChart2,
  code:      Code2,
}

export default function Skills() {
  const { skills } = content

  return (
    <SectionWrapper id="skills">
      <motion.div variants={fadeUp}>
        <SectionLabel>Capabilities</SectionLabel>
        <SectionHeading>
          What I bring<br />
          <span className="text-gradient">to the table.</span>
        </SectionHeading>
        <p className="font-body text-text-secondary max-w-xl mb-12">
          Three interconnected skill clusters - bridging business requirements, data analysis, and technical execution.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {skills.map((cluster, idx) => {
          const Icon = ICONS[cluster.icon] || Briefcase
          return (
            <DashboardCard key={idx} className="flex flex-col gap-5">
              {/* Cluster header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-dim/50 border border-green-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-green-primary" />
                </div>
                <h3 className="font-display text-sm font-700 text-text-primary leading-tight">
                  {cluster.cluster}
                </h3>
              </div>

              {/* Divider */}
              <div className="h-px bg-border-green" />

              {/* Skill pills */}
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
                {cluster.items.map((item, i) => (
                  <TagPill key={i} variant="default">
                    {item}
                  </TagPill>
                ))}
              </motion.div>

              {/* Count */}
              <div className="mt-auto pt-2 flex items-center gap-1.5">
                <span className="text-green-primary font-display font-700 text-sm">{cluster.items.length}</span>
                <span className="text-text-muted font-body text-xs">competencies</span>
              </div>
            </DashboardCard>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
