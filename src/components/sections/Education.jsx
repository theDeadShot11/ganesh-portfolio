import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Award, CheckCircle } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionHeading } from '../ui/SectionWrapper'
import TagPill from '../ui/TagPill'
import { fadeUp, staggerContainer } from '../animations/variants'
import content from '../../data/content.json'

export default function Education() {
  const { education, certifications, achievements } = content

  return (
    <SectionWrapper id="education">
      <motion.div variants={fadeUp}>
        <SectionLabel>Education</SectionLabel>
        <SectionHeading>
          Built to learn,<br />
          <span className="text-gradient">built to lead.</span>
        </SectionHeading>
        <p className="font-body text-text-secondary max-w-xl mb-12">
          An engineering foundation sharpened by postgraduate business analytics - each step a deliberate investment in techno-functional capability.
        </p>
      </motion.div>

      {/* Education cards */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            variants={fadeUp}
            className={`
              rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300
              hover:shadow-green-glow
              ${idx === 0 ? 'border-green-primary/30 bg-gradient-to-br from-green-dim/15 via-surface to-surface-2' : 'border-border-green bg-surface hover:border-green-primary/20'}
            `}
          >
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${idx === 0 ? 'bg-green-primary/15 border border-green-primary/30' : 'bg-surface-2 border border-border-green'}`}>
                <GraduationCap size={20} className={idx === 0 ? 'text-green-primary' : 'text-text-secondary'} />
              </div>
              <div>
                <h3 className="font-display text-base font-700 text-text-primary">{edu.degree}</h3>
                <p className={`font-body text-sm font-500 ${idx === 0 ? 'text-green-primary' : 'text-text-secondary'}`}>
                  {edu.institution}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                  <span className="flex items-center gap-1 text-text-muted text-xs font-body">
                    <MapPin size={10} /> {edu.location}
                  </span>
                  <span className="text-text-muted text-xs font-body">{edu.period}</span>
                  {edu.cgpa && (
                    <span className="text-text-muted text-xs font-body">CGPA: {edu.cgpa}</span>
                  )}
                </div>
              </div>
            </div>

            {/* MSc framing copy */}
            {edu.framing && (
              <div className="p-3 rounded-lg border border-green-primary/15 bg-green-dim/10">
                <p className="font-body text-xs text-text-secondary leading-relaxed italic">
                  "{edu.framing}"
                </p>
              </div>
            )}

            {/* Modules */}
            <div>
              <p className="text-[10px] font-display font-600 text-text-muted uppercase tracking-widest mb-2">Relevant Modules</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.modules.map((mod, i) => (
                  <TagPill key={i} variant="label">{mod}</TagPill>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications + Achievements */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Certifications */}
        <motion.div
          variants={fadeUp}
          className="p-5 rounded-xl border border-border-green bg-surface"
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={16} className="text-green-primary" />
            <h4 className="font-display text-sm font-700 text-text-primary">Certifications</h4>
          </div>
          <ul className="space-y-2.5">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-green-primary flex-shrink-0" />
                <span className="font-body text-sm text-text-secondary">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={fadeUp}
          className="p-5 rounded-xl border border-border-green bg-surface"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={16} className="text-green-primary" />
            <h4 className="font-display text-sm font-700 text-text-primary">Achievements</h4>
          </div>
          <ul className="space-y-4">
            {achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-primary/70 flex-shrink-0" />
                <div>
                  <p className="font-display text-sm font-600 text-text-primary">{a.title}</p>
                  <p className="font-body text-xs text-text-muted mt-0.5">{a.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
