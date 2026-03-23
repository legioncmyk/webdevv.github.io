import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="glass neon-border group relative overflow-hidden rounded-[28px] p-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl shadow-neon">
          {product.image}
        </div>
        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-accent">
          {product.badge}
        </span>
      </div>
      <div className="relative mt-5 space-y-2">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-xs uppercase tracking-[0.3em] text-white/45">{product.category}</p>
        <div className="flex items-center justify-between pt-4">
          <div>
            <p className="text-xs text-white/45">Harga mulai</p>
            <p className="text-xl font-semibold text-gradient">Rp{product.price.toLocaleString('id-ID')}</p>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs ${product.status === 'ready' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/10 text-white/50'}`}>
            {product.status === 'ready' ? 'Ready' : 'Sold'}
          </span>
        </div>
      </div>
      <button className="relative mt-5 w-full rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-neon transition hover:brightness-110">
        Beli Sekarang
      </button>
    </motion.article>
  )
}
