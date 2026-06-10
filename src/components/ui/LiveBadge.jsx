export default function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-primary/10 border border-green-primary/30 text-green-primary text-xs font-display font-600">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-primary" />
      </span>
      Active
    </span>
  )
}
