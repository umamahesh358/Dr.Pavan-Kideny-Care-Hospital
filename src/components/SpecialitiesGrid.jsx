import { motion } from 'framer-motion'
import { Activity, Droplets, Syringe, Microscope, HeartPulse, Stethoscope } from 'lucide-react'

const cards = [
  { icon: Activity,     title: 'CKD Management',                    desc: 'Proactive, comprehensive care designed to slow disease progression through early detection, optimized medication, and sustainable lifestyle guidance.' },
  { icon: Droplets,     title: 'AKI Treatment',                      desc: 'Rapid, decisive intervention and critical care management to protect and restore kidney function during medical emergencies.' },
  { icon: Syringe,      title: 'Dialysis Care',                      desc: 'State-of-the-art hemodialysis and peritoneal dialysis in a safe, serene environment. We prioritize your comfort with continuous expert monitoring during every session.' },
  { icon: Microscope,   title: 'Precision Diagnostics & BP Management', desc: 'Expert-guided renal biopsies for accurate diagnosis, alongside targeted treatments for renal hypertension.' },
  { icon: HeartPulse,   title: 'Transplant Care & Follow-Up',        desc: 'Dedicated post-transplant monitoring, precision immunosuppression management, and holistic support for your new start.' },
  { icon: Stethoscope,  title: 'Kidney Stone Solutions',             desc: 'Minimally invasive removal procedures utilizing advanced imaging, paired with long-term dietary strategies to prevent future stones.' },
]

const cardStyle = {
  background: 'rgba(255,255,255,0.18)',
  backdropFilter: 'blur(30px)',
  WebkitBackdropFilter: 'blur(30px)',
  border: '1px solid rgba(255,255,255,0.35)',
  borderRadius: 28,
  padding: 32,
  cursor: 'default',
  transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease',
}

export default function SpecialitiesGrid() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{ background: '#FFF8F4' }}>

      {/* Decorative blob bottom-left */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FB6603 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }} className="text-center mb-14">
          <p className="mb-3 font-bold" style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FB6603' }}>
            Our Core Services & Specialties
          </p>
          <h2 className="font-display font-bold leading-tight mb-4" style={{ fontSize: 48, color: '#710908' }}>
            Our Core Services & Specialties
          </h2>
          <p style={{ fontSize: 18, color: '#A35E5D' }}>
            Comprehensive care spanning the full spectrum of kidney health.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 24 }}>
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={cardStyle}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.borderColor = 'rgba(251,102,3,0.4)'
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(251,102,3,0.15), 0 8px 24px rgba(113,9,8,0.10)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon container */}
              <motion.div
                className="mb-5 flex items-center justify-center"
                style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(251,102,3,0.10), rgba(113,9,8,0.06))',
                  border: '1px solid rgba(251,102,3,0.15)',
                }}
                whileHover={{ scale: 1.10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon size={28} style={{ color: '#FB6603' }} />
              </motion.div>

              <h3 className="font-display font-bold mb-2" style={{ fontSize: 20, color: '#710908' }}>{title}</h3>
              <p style={{ fontSize: 14, color: '#A35E5D', lineHeight: 1.65 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
