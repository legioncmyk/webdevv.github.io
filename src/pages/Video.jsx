import { useState } from 'react'
import { PlayCircle, X } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

export default function Video() {
  const [open, setOpen] = useState(false)
  return (
    <div className="space-y-6 pb-32">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 px-5 py-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.6),rgba(255,46,46,0.18))]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-25 blur-[2px]" />
        <div className="relative space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Videography Studio</p>
          <h1 className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">We Create Cinematic Moments</h1>
          <p className="max-w-xl text-sm leading-7 text-white/70">Dari event sekolah sampai brand campaign, visual bergerak kami dibangun dengan storytelling, pace, dan color mood yang serius.</p>
          <button onClick={() => setOpen(true)} className="inline-flex items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold shadow-neon">
            <PlayCircle className="h-5 w-5" /> Preview Showreel
          </button>
        </div>
      </section>
      <SectionHeader eyebrow="Packages" title="Pilihan paket videografi yang scalable." description="Agency-style pricing cards dengan positioning jelas untuk target market pelajar sampai professional brand." />
      <div className="grid gap-4 md:grid-cols-3">
        {services.video.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-[32px] border border-white/10 bg-[#111] p-4 shadow-neon">
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 rounded-full bg-white/10 p-2"><X className="h-4 w-4" /></button>
            <div className="aspect-video rounded-[24px] bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            <p className="mt-4 text-sm text-white/60">Preview placeholder untuk modal video/showreel. Bisa diganti embed video production kapan saja.</p>
          </div>
        </div>
      )}
    </div>
  )
}
