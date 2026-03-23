export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-accent/80">{eyebrow}</p>
      <div className="space-y-2">
        <h2 className="font-display text-2xl text-white sm:text-3xl">{title}</h2>
        <p className="max-w-xl text-sm leading-7 text-white/65">{description}</p>
      </div>
    </div>
  )
}
