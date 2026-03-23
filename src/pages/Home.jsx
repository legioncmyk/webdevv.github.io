import { motion } from 'framer-motion'
import { ShieldCheck, TimerReset, WalletCards, Star, Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { fadeUp, staggerContainer } from '../animations/transitions'
import { testimonials } from '../data'

const highlights = [
  { icon: ShieldCheck, title: 'Aman', text: 'Akun premium kurasi aman, seller-ready, dan minim drama.' },
  { icon: TimerReset, title: 'Proses Cepat', text: 'Checkout sampai delivery didesain cepat dengan alur yang efisien.' },
  { icon: WalletCards, title: 'Harga Pelajar', text: 'Pricing kompetitif untuk student, creator, dan UMKM yang butuh value.' }
]

export default function Home({ countdown, onNavigate }) {
  return (
    <div className="space-y-8 pb-32">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-hero-grid px-5 py-8 shadow-neon">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,46,46,0.16),transparent_30%)]" />
        <div className="relative space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-2 text-[11px] uppercase tracking-[0.25em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Marketplace + Creative Agency
          </div>
          <div className="space-y-4">
            <h1 className="max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Premium Account. <span className="text-gradient">Cinematic Services.</span> One Futuristic Hub.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              ZALLSTORE DIGITAL HUB menggabungkan marketplace akun premium dengan jasa videografi & fotografi berkelas startup-agency.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-[28px] border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
            {Object.entries(countdown).map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white/5 p-3 text-center">
                <p className="text-2xl font-bold text-accent">{value}</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">{label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={() => onNavigate('apps')} className="rounded-2xl bg-accent px-5 py-3 text-sm font-semibold shadow-neon">Explore Premium Apps</button>
            <button onClick={() => onNavigate('video')} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold">Lihat Services</button>
          </div>
        </div>
      </section>

      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-5">
        <SectionHeader eyebrow="Highlights" title="Fast-moving digital commerce, crafted with premium feel." description="Setiap section dirancang mobile-first dengan glow merah, glassmorphism, dan micro interaction yang terasa mahal." />
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="glass rounded-[28px] p-5">
              <item.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="glass rounded-[32px] p-5">
          <SectionHeader eyebrow="Live Promo" title="Flash Sale minggu ini." description="Trigger urgency dengan countdown real-time, rating bintang, dan positioning premium untuk conversion lebih tinggi." />
          <div className="mt-5 flex flex-wrap gap-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
          </div>
          <div className="mt-5 rounded-[24px] border border-accent/20 bg-accent/10 p-4 text-sm text-white/80">
            User baru saja membeli <span className="font-semibold text-accent">Canva Pro</span> • 10 detik lalu
          </div>
        </div>
        <div className="glass rounded-[32px] p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Typing Promo</p>
          <div className="mt-4 rounded-[26px] bg-black/30 p-5 font-display text-2xl leading-relaxed text-white">
            ZALLSTORE DIGITAL HUB // premium ecosystem for creators, students, and brands.
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader eyebrow="Testimonials" title="Dipercaya creator, pelajar, dan bisnis lokal." description="Fake social proof sudah disiapkan untuk memberi feel production-ready dan bisa diganti ke data real kapan saja." />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass rounded-[28px] p-5">
              <div className="flex gap-1 text-accent">★★★★★</div>
              <p className="mt-4 text-sm leading-7 text-white/70">“{item.text}”</p>
              <div className="mt-5">
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
