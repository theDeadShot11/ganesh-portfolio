export default function MetricBadge({ value, label }) {
  return (
    <div className="inline-flex flex-col items-center justify-center px-3 py-2 rounded-lg border border-green-primary/25 bg-green-dim/20 min-w-[72px]">
      <span className="font-display text-lg font-800 text-green-primary leading-none">{value}</span>
      <span className="font-body text-[10px] text-text-muted text-center leading-tight mt-0.5 max-w-[80px]">{label}</span>
    </div>
  )
}
