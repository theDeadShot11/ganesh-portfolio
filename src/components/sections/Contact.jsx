import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionHeading } from '../ui/SectionWrapper'
import { fadeUp, staggerContainer } from '../animations/variants'
import content from '../../data/content.json'

const CONTACT_BUTTONS = [
  {
    icon:  Mail,
    label: 'Email',
    value: (c) => c.email,
    href:  (c) => `mailto:${c.email}`,
    desc:  'Send an email directly',
  },
  {
    icon:  Phone,
    label: 'Phone',
    value: (c) => c.phone,
    href:  (c) => `tel:${c.phone.replace(/\s+/g, '')}`,
    desc:  'Call or WhatsApp',
  },
  {
    icon:  Linkedin,
    label: 'LinkedIn',
    value: () => 'linkedin.com/in/ganesh-yadava',
    href:  (c) => c.linkedin,
    desc:  'Connect professionally',
    external: true,
  },
]

export default function Contact() {
  const { contact, meta } = content

  return (
    <SectionWrapper id="contact">
      {/* Section headline */}
      <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
        <SectionLabel>Get In Touch</SectionLabel>
        <SectionHeading className="text-center">
          Let's <span className="text-gradient">connect.</span>
        </SectionHeading>
        <p className="font-body text-text-secondary leading-relaxed">
          {meta.availabilityNote}
        </p>
      </motion.div>

      {/* Contact buttons */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12"
      >
        {CONTACT_BUTTONS.map(({ icon: Icon, label, value, href, desc, external }) => (
          <motion.a
            key={label}
            variants={fadeUp}
            href={href(contact)}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-border-green bg-surface hover:border-green-primary/35 hover:shadow-green-glow transition-all duration-300 text-center"
            style={{
              background: 'linear-gradient(145deg, rgba(16,21,16,0.95) 0%, rgba(24,31,24,0.9) 100%)',
            }}
          >
            {/* Icon container */}
            <div className="relative w-12 h-12 rounded-xl bg-green-dim/30 border border-green-primary/20 flex items-center justify-center group-hover:bg-green-dim/50 transition-colors">
              <Icon size={20} className="text-green-primary" />
              {external && (
                <ArrowUpRight
                  size={10}
                  className="absolute top-1.5 right-1.5 text-green-primary opacity-60"
                />
              )}
            </div>

            <div>
              <p className="font-display text-xs font-600 text-text-muted uppercase tracking-widest mb-1">{label}</p>
              <p className="font-body text-sm font-500 text-text-primary group-hover:text-green-primary transition-colors break-all">
                {value(contact)}
              </p>
              <p className="font-body text-xs text-text-muted mt-1">{desc}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Location note */}
      <motion.div variants={fadeUp} className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-green bg-surface text-text-muted text-xs font-body">
          <MapPin size={12} className="text-green-primary" />
          {meta.location}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
