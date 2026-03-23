import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { purchaseHistory } from '../data'

export default function Account() {
  return (
    <div className="space-y-6 pb-32">
      <SectionHeader eyebrow="Account" title="Profil user dengan summary dan riwayat transaksi." description="Halaman akun didesain untuk siap disambungkan ke auth & order API berbasis JWT/Firebase backend." />
      <div className="glass rounded-[32px] p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/15 text-2xl font-bold text-accent shadow-neon">Z</div>
          <div>
            <h3 className="text-xl font-semibold">Zallstore Member</h3>
            <p className="text-sm text-white/55">Status: Premium Buyer • Tier Platinum</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {purchaseHistory.map((order, index) => (
          <motion.div key={order.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }} className="glass rounded-[28px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-semibold text-white">{order.item}</h4>
                <p className="mt-1 text-sm text-white/50">{order.date}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs ${order.status === 'Selesai' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'}`}>
                {order.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
