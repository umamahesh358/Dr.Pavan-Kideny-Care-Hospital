import { motion } from 'framer-motion'
import { Shield, Award, Clock } from 'lucide-react'

const stats = [
  { icon: Shield, value: '11+', label: 'Years of Experience', color: '#710908' },
  { icon: Award, value: 'AP', label: 'Patients Treated Across Andhra Pradesh', color: '#FB6603' },
  { icon: Clock, value: '24/7', label: 'Emergency Care', color: '#A35E5D' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function HeroSection() {
  return (
    <section id="home" className="bg-hero h-screen flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display font-black text-[22vw] leading-none text-[#710908]/[0.028] whitespace-nowrap tracking-tighter">KIDNEY</span>
      </div>
      <div className="absolute top-16 right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(251,102,3,0.12), transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(113,9,8,0.09), transparent 70%)', filter: 'blur(40px)' }} />

      {/* Right — Hero Image: absolutely pinned to bottom-right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute bottom-0 right-0 z-10 flex items-end justify-end pr-6 lg:pr-16 xl:pr-24"
      >
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(251,102,3,0.13), transparent 65%)', filter: 'blur(32px)' }} />

          <img
            src="/images/heroImg.png"
            alt="Expert Kidney Care"
            className="relative z-10 object-contain object-bottom drop-shadow-2xl"
            style={{ height: '80vh', width: 'auto' }}
          />

        </div>
      </motion.div>

      {/* Left — Text content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full">
          <div className="max-w-xl pt-20">
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB6603] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB6603]" />
              </span>
              <span className="text-xs font-semibold text-[#710908] tracking-wide">Best Nephrologist in Andhra Pradesh · Est. 2022</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="font-display font-bold leading-[1.08] mb-5">
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#1a0a0a]">Advanced Kidney Care,</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl gradient-text">Delivered with Precision and Compassion.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.25)} className="text-[#710908] text-sm sm:text-base font-semibold mb-3">
              Dr. Pavan Kumar <span className="text-[#4a0605]/50 font-medium">— Senior Nephrologist</span>
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="text-[#4a0605]/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              With 11 years of focused practice in nephrology, Dr. Pavan Kumar has built a reputation for clear diagnosis, careful treatment planning, and genuine patient support. Patients from across Andhra Pradesh — including smaller towns and peripheral regions — travel to our clinic for specialised kidney care delivered with both clinical excellence and quiet empathy.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-10">
              <a href="#contact" className="btn-primary">Book Your Consultation</a>
              <a href="tel:+919876543210" className="btn-ghost">24/7 Emergency Support</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap gap-3">
              {stats.map(({ icon: Icon, value, label, color }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 300 }}
                  className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `linear-gradient(135deg, ${color}18, ${color}28)` }}>
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a0a0a] text-base leading-none">{value}</div>
                    <div className="text-[11px] text-[#4a0605]/55 mt-0.5 font-medium">{label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-20 border-t border-[#710908]/08 py-4">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {['Dedicated Kidney Care', 'Serving Peripheral Communities', 'Compassionate Clinical Practice', '11 Years of Practice'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#4a0605]/50 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FB6603]" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
