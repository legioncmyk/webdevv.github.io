import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import { appProducts } from '../data'

const filters = ['Semua', 'Editing', 'Streaming', 'Musik']

export default function Apps() {
  const [activeFilter, setActiveFilter] = useState('Semua')
  const products = useMemo(() => activeFilter === 'Semua' ? appProducts : appProducts.filter((item) => item.category === activeFilter), [activeFilter])

  return (
    <div className="space-y-6 pb-32">
      <SectionHeader eyebrow="Premium Apps" title="Marketplace akun premium dengan aura neon storefront." description="Filter kategori cepat, card interaktif, status stok, dan CTA yang siap dikembangkan ke checkout real." />
      <div className="flex gap-3 overflow-auto pb-1">
        {filters.map((filter) => (
          <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-sm ${activeFilter === filter ? 'bg-accent text-white shadow-neon' : 'border border-white/10 bg-white/5 text-white/60'}`}>
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}
