import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Users, Heart, Headphones } from 'lucide-react'

const stats = [
  { icon: Clock,      display: '11+', label: 'Years of Dedicated Nephrology Practice' },
  { icon: Users,      display: '24/7', label: 'Emergency Care Available Round the Clock' },
  { icon: Heart,      display: 'AP',  label: 'Serving Patients Across Andhra Pradesh' },
  { icon: Headphones, display: '2',   label: 'Care Centres — Machilipatnam & Poranki' },
]

function Counter({ target, suffix = '', duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame
    let start = null
    const step = (ts) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
      else setCount(target)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="relative py-10 sm:py-14 px-5 sm:px-6" style={{ background: '#FFFDFB' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-full"
          style={{
            background: 'linear-gradient(135deg, #710908 0%, #A35E5D 55%, #FB6603 100%)',
            boxShadow: '0 24px 60px rgba(113,9,8,0.25), 0 8px 24px rgba(251,102,3,0.15)',
          }}
        >
          {/* Glass sheen */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, transparent 55%)' }} />

          <div className="relative z-10 flex flex-wrap sm:flex-nowrap items-center justify-between sm:divide-x sm:divide-white/15 px-6 sm:px-10 py-5 sm:py-6 gap-y-5">
            {stats.map(({ icon: Icon, target, suffix, display, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="flex items-center gap-3 w-1/2 sm:w-auto sm:flex-1 justify-center px-2 sm:px-4"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.22)' }}>
                  <Icon size={17} className="text-white" />
                </div>
                <div className="text-left leading-none">
                  <p className="font-display font-bold text-white" style={{ fontSize: 24 }}>
                    {display ?? <Counter target={target} suffix={suffix} />}
                  </p>
                  <p className="mt-1" style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
