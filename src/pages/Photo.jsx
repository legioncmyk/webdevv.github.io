import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { services } from '../data'

const palette = ['from-[#1f1f1f] to-[#4b0a0a]', 'from-[#0b0b0b] to-[#6d1010]', 'from-[#191919] to-[#2d2d2d]']

export default function Photo() {
  const [active, setActive] = useState(null)
  const current = active !== null ? services.photo[active] : null

  return (
    <div className="space-y-6 pb-32">
      <SectionHeader eyebrow="Photography" title="Instagram-aesthetic gallery with premium motion feel." description="Grid masonry-look, hover overlay, dan lightbox fullscreen untuk experience fotografi yang lebih editorial." />
      <div className="columns-2 gap-4 space-y-4 sm:columns-3">
        {services.photo.map((item, index) => (
          <button key={item.id} onClick={() => setActive(index)} className={`group relative block w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${palette[index % palette.length]} p-5 text-left ${index % 2 === 0 ? 'h-72' : 'h-56'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,46,46,0.25),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col justify-end">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">{item.tag}</p>
              <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-5">
          <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-[#111] p-5 shadow-neon">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">{current.tag}</p>
                <h3 className="font-display text-2xl">{current.title}</h3>
              </div>
              <button onClick={() => setActive(null)} className="rounded-full bg-white/10 p-2"><X className="h-4 w-4" /></button>
            </div>
            <div className="mt-5 aspect-[4/3] rounded-[24px] bg-[linear-gradient(135deg,#1c1c1c,#410909)]" />
            <div className="mt-4 flex justify-between">
              <button onClick={() => setActive((active - 1 + services.photo.length) % services.photo.length)} className="rounded-full border border-white/10 p-3"><ChevronLeft className="h-4 w-4" /></button>
              <button onClick={() => setActive((active + 1) % services.photo.length)} className="rounded-full border border-white/10 p-3"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
