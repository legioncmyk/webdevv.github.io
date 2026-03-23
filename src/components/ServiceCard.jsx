import { motion } from 'framer-motion'

export default function ServiceCard({ service }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="glass rounded-[28px] p-5 neon-border">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent/75">Package</p>
          <h3 className="mt-2 font-display text-2xl">{service.name}</h3>
        </div>
        <div className="rounded-2xl border border-accent/20 bg-accent/10 px-3 py-2 text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Budget</p>
          <p className="text-sm font-semibold text-accent">{service.price}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-white/65">{service.description}</p>
      <button className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-accent/40 hover:text-accent">
        Lihat Detail
      </button>
    </motion.div>
  )
}
