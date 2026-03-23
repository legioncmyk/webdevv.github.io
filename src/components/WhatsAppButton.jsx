import { MessageCircleMore } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-28 right-4 z-50 flex items-center gap-3 rounded-full border border-accent/30 bg-accent px-4 py-3 text-sm font-semibold text-white shadow-neon"
    >
      <MessageCircleMore className="h-5 w-5" />
      WhatsApp
    </motion.a>
  )
}
