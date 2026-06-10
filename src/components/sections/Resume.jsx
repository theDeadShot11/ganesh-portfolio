import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, FileText } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionHeading } from '../ui/SectionWrapper'
import { fadeUp } from '../animations/variants'
import content from '../../data/content.json'

export default function Resume() {
  const { resume, contact } = content
  const [previewVisible, setPreviewVisible] = useState(false)

  return (
    <SectionWrapper id="resume">
      <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12">
        <SectionLabel>Resume</SectionLabel>
        <SectionHeading className="text-center">
          {resume.heading}
        </SectionHeading>
        <p className="font-body text-text-secondary">
          Available as a PDF download or inline preview below.
        </p>
      </motion.div>

      {/* Action buttons */}
      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href={resume.pdfPath}
          download
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-primary text-bg-deep font-display font-700 text-sm hover:bg-green-mid transition-colors shadow-green-glow"
        >
          <Download size={16} />
          Download PDF
        </a>
        <button
          onClick={() => setPreviewVisible(!previewVisible)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border-green bg-surface text-text-primary font-display font-600 text-sm hover:border-green-primary/40 hover:bg-surface-2 transition-all"
        >
          <Eye size={16} />
          {previewVisible ? 'Hide Preview' : 'Preview in Browser'}
        </button>
      </motion.div>

      {/* PDF Preview */}
      {previewVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-border-green overflow-hidden shadow-green-glow"
        >
          {/* Preview header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border-green bg-surface">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-green-primary" />
              <span className="font-body text-sm text-text-secondary">Ganesh_Yadava_CV.pdf</span>
            </div>
            <a
              href={resume.pdfPath}
              download
              className="flex items-center gap-1.5 text-xs text-green-primary font-display font-600 hover:text-green-mid transition-colors"
            >
              <Download size={12} />
              Download
            </a>
          </div>

          {/* iFrame embed */}
          <div className="bg-surface-2" style={{ height: '80vh', minHeight: '600px' }}>
            <iframe
              src={`${resume.pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Ganesh Yadava CV Preview"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      )}

      {/* Placeholder when preview is hidden */}
      {!previewVisible && (
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-dashed border-border-green p-12 flex flex-col items-center justify-center gap-4 bg-surface/40 cursor-pointer hover:border-green-primary/30 transition-colors"
          onClick={() => setPreviewVisible(true)}
        >
          <div className="w-14 h-14 rounded-2xl bg-green-dim/30 border border-green-primary/20 flex items-center justify-center">
            <FileText size={24} className="text-green-primary" />
          </div>
          <div className="text-center">
            <p className="font-display text-sm font-600 text-text-primary mb-1">Click to preview</p>
            <p className="font-body text-xs text-text-muted">Opens inline — no new tab needed</p>
          </div>
        </motion.div>
      )}
    </SectionWrapper>
  )
}
