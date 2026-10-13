import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(30px) saturate(180%)',
  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
  border: '1px solid rgba(255,255,255,0.75)',
  borderRadius: 28,
  boxShadow: '0 20px 60px rgba(113,9,8,0.08), 0 4px 16px rgba(113,9,8,0.04)',
  transition: 'box-shadow 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease',
}

const services = [
  {
    badge: 'CKD Management',
    title: 'Chronic Kidney Disease',
    desc: 'Proactive, comprehensive care designed to slow disease progression through early detection, optimized medication, and sustainable lifestyle guidance.',
    image: '/images/Chronic%20Kidney%20Disease.png',
    alt: 'Illustration of chronic kidney disease showing renal cortex, medulla and fibrosis',
    accent: '#710908',
  },
  {
    badge: 'Dialysis Support',
    title: 'Dialysis Care',
    desc: 'State-of-the-art hemodialysis and peritoneal dialysis in a safe, serene environment. We prioritize your comfort with continuous expert monitoring during every session.',
    image: '/images/Dialysis%20Support.png',
    alt: 'Modern hemodialysis machine used for kidney dialysis treatment',
    accent: '#FB6603',
  },
  {
    badge: 'Kidney Stone Treatment',
    title: 'Kidney Stone Solutions',
    desc: 'Minimally invasive removal procedures utilizing advanced imaging, paired with long-term dietary strategies to prevent future stones.',
    image: '/images/Kidney%20Stones.png',
    alt: 'Diagram of kidney stones within the renal pelvis and calyxes',
    accent: '#A35E5D',
  },
]

export default function ServiceCards() {
  return (
    <section id="services" className="py-20 sm:py-28 px-5 sm:px-6 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(251,102,3,0.06), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-center mb-14 sm:mb-16">
          <div className="section-label justify-center mb-3">Our Core Services & Specialties</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a0a0a]">
            Our Core <span className="gradient-text">Services & Specialties</span>
          </h2>
          <p className="text-[#4a0605]/55 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Comprehensive care spanning the full spectrum of kidney health.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 sm:gap-6 relative z-10">
          {services.map(({ badge, title, desc, image, alt, accent }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={cardStyle}
              className="p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row sm:items-stretch gap-5 sm:gap-6 lg:gap-8 group cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(251,102,3,0.45)'
                e.currentTarget.style.boxShadow = '0 28px 80px rgba(251,102,3,0.22), 0 8px 28px rgba(251,102,3,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.75)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(113,9,8,0.08), 0 4px 16px rgba(113,9,8,0.04)'
              }}
            >
              {/* Image — glass frame */}
              <div className="relative w-full sm:w-[220px] md:w-[260px] lg:w-[300px] h-[180px] sm:h-auto shrink-0">
                {/* Colored glow behind the frame */}
                <div className="absolute -inset-2 rounded-[22px] pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${accent}30 0%, transparent 72%)`, filter: 'blur(14px)' }} />

                <div className="relative w-full h-full rounded-2xl p-2.5"
                  style={{
                    background: 'rgba(255,255,255,0.55)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1.5px solid rgba(255,255,255,0.95)',
                    boxShadow: `0 16px 36px rgba(113,9,8,0.14), 0 1px 0 rgba(255,255,255,0.95) inset, 0 0 0 1px ${accent}1a`,
                  }}>
                  <div className="w-full h-full rounded-[13px] overflow-hidden">
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <span className="inline-flex self-start px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase"
                  style={{ background: `${accent}14`, color: accent }}>
                  {badge}
                </span>
                <h3 className="font-display font-bold mt-3 mb-2 text-xl sm:text-2xl lg:text-3xl leading-tight"
                  style={{ color: '#710908' }}>
                  {title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: '#A35E5D' }}>
                  {desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex sm:items-center justify-end sm:justify-center shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
                  style={{ background: `${accent}14` }}
                >
                  <ArrowUpRight size={22} style={{ color: accent }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
