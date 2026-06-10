import content from '../../data/content.json'

export default function Footer() {
  return (
    <footer className="border-t border-border-green mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-green-dim border border-green-primary/30 flex items-center justify-center">
            <span className="font-display font-800 text-green-primary text-[10px]">G</span>
          </span>
          <span className="font-display font-600 text-text-secondary text-sm">
            {content.meta.name}
          </span>
        </div>
        <p className="font-body text-xs text-text-muted text-center">
          © {new Date().getFullYear()} {content.meta.name} · {content.meta.location}
        </p>
        <a
          href={`mailto:${content.contact.email}`}
          className="font-body text-xs text-text-muted hover:text-green-primary transition-colors"
        >
          {content.contact.email}
        </a>
      </div>
    </footer>
  )
}
