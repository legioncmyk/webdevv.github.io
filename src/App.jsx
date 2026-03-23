import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BottomNavbar from './components/Navbar/BottomNavbar'
import WhatsAppButton from './components/WhatsAppButton'
import { pageVariants } from './animations/transitions'
import { useCountdown } from './hooks/useCountdown'
import Home from './pages/Home'
import Apps from './pages/Apps'
import Video from './pages/Video'
import Photo from './pages/Photo'
import Account from './pages/Account'

const tabs = {
  home: Home,
  apps: Apps,
  video: Video,
  photo: Photo,
  account: Account
}

function SplashScreen() {
  const [text, setText] = useState('')
  const label = 'ZALLSTORE DIGITAL HUB'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(label.slice(0, index + 1))
      index += 1
      if (index === label.length) clearInterval(timer)
    }, 70)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, y: -40 }} className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-5 bg-[#070707]">
      <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-accent/30 bg-accent/10 font-display text-4xl text-accent shadow-neon">
        Z
      </motion.div>
      <p className="font-display text-2xl tracking-[0.3em] text-gradient">{text}</p>
    </motion.div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [showSplash, setShowSplash] = useState(true)
  const countdown = useCountdown(useMemo(() => new Date(Date.now() + 1000 * 60 * 60 * 7).toISOString(), []))

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  const CurrentPage = tabs[activeTab]

  return (
    <div className="min-h-screen">
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>
      <div className="mx-auto min-h-screen max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent/75">Digital Commerce</p>
            <h1 className="font-display text-xl sm:text-2xl">ZALLSTORE DIGITAL HUB</h1>
          </div>
          <div className="glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">online / premium</div>
        </header>

        <AnimatePresence mode="wait">
          <motion.main
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <CurrentPage countdown={countdown} onNavigate={setActiveTab} />
          </motion.main>
        </AnimatePresence>
      </div>
      <WhatsAppButton />
      <BottomNavbar active={activeTab} onNavigate={setActiveTab} />
    </div>
  )
}
