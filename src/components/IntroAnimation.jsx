import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroAnimation({ onDone }) {
  const [phase, setPhase] = useState('hand') // hand -> kidney -> pulse
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      document.body.style.overflow = ''
      onDone?.()
      return
    }

    const t1 = setTimeout(() => setPhase('kidney'), 350)
    const t2 = setTimeout(() => setPhase('pulse'), 950)
    const t3 = setTimeout(() => setVisible(false), 3000)
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3)
      document.body.style.overflow = ''
    }
  }, [onDone])

  const kidneyAnimate =
    phase === 'hand'
      ? { opacity: 0, scale: 0.6, y: -8 }
      : phase === 'kidney'
      ? { opacity: 1, scale: 1, y: 0 }
      : { opacity: 1, scale: [1, 1.1, 1], y: 0 }

  const kidneyTransition =
    phase === 'pulse'
      ? { duration: 0.85, repeat: Infinity, ease: 'easeInOut' }
      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }

  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ''; onDone?.() }}>
      {visible && (
        <motion.div
          key="intro"
          role="status"
          aria-label="Loading Dr. PAVAN KIDNEY CARE"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center px-6"
          style={{ background: 'linear-gradient(135deg, #2a0403 0%, #4a0605 35%, #710908 65%, #8b1110 100%)' }}
        >
          <div className="relative" style={{ width: 440, height: 294 }}>
            {/* Hand — reveals top to bottom, like a curtain dropping */}
            <motion.img
              src="/logos/logo-hand.png"
              alt=""
              className="absolute object-contain"
              style={{ top: '4%', right: '7.5%', width: '98%', height: '90%' }}
              initial={{ clipPath: 'inset(0 0 100% 0)', y: -10 }}
              animate={{ clipPath: 'inset(0 0 0% 0)', y: 0 }}
              transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Kidney — settles into the palm, then pulses */}
            <motion.img
              src="/logos/logo-kidney.png"
              alt=""
              className="absolute object-contain"
              style={{ top: '13%', left: '22.5%', width: '54%', height: '55%', filter: 'drop-shadow(0 0 18px rgba(251,102,3,0.55))' }}
              initial={{ opacity: 0, scale: 0.6, y: -8 }}
              animate={kidneyAnimate}
              transition={kidneyTransition}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-7 text-center"
          >
            <p className="font-display font-bold text-white tracking-wide" style={{ fontSize: 20 }}>
              Dr. PAVAN KIDNEY CARE
            </p>
            <p className="mt-1.5 font-medium" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
              Premium Nephrology Care
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
