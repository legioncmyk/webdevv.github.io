import { Home, Film, Image as ImageIcon, Layers3, UserRound } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'apps', label: 'Premium', icon: Layers3 },
  { key: 'video', label: 'Videografi', icon: Film },
  { key: 'photo', label: 'Fotografi', icon: ImageIcon },
  { key: 'account', label: 'Akun', icon: UserRound }
]

export default function BottomNavbar({ active, onNavigate }) {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-white/10 bg-black/70 p-2 backdrop-blur-2xl shadow-neon">
      <div className="grid grid-cols-5 gap-1">
        {items.map(({ key, label, icon: Icon }) => {
          const isActive = active === key
          return (
            <motion.button
              whileTap={{ scale: 0.92 }}
              key={key}
              onClick={() => onNavigate(key)}
              className={`relative flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-3 text-[11px] transition ${isActive ? 'bg-accent/18 text-white shadow-neon' : 'text-white/60'}`}
            >
              {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-2xl border border-accent/30 bg-accent/10" />}
              <Icon className={`relative z-10 h-4 w-4 ${isActive ? 'text-accent' : ''}`} />
              <span className="relative z-10 truncate">{label}</span>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}
