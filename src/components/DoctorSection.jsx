import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const qualifications = ['MBBS', 'MD – General Medicine', 'DM – Nephrology']

const badges = [
  { label: 'MBBS',           angle: -30 },
  { label: 'MD',             angle: 90  },
  { label: 'DM Nephrology',  angle: 210 },
]

function badgePosition(angleDeg, radius = 55) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    left: `calc(50% + ${Math.cos(rad) * radius}% - 60px)`,
    top:  `calc(50% + ${Math.sin(rad) * radius}% - 20px)`,
  }
}

export default function DoctorSection() {
  return (
    <section id="doctor" className="relative overflow-hidden py-20 sm:py-28" style={{ background: '#FFFDFB' }}>

      {/* Decorative blob top-left */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FB6603 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
            style={{ minHeight: 380 }}
          >
            {/* Radial glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(251,102,3,0.12) 0%, transparent 70%)' }} />
            </div>

            {/* Portrait frame */}
            <div className="relative"
              style={{
                width: 320, height: 320,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '2px solid rgba(255,255,255,0.30)',
                boxShadow: '0 32px 80px rgba(113,9,8,0.18), 0 8px 24px rgba(251,102,3,0.10)',
                padding: 8,
              }}>
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="/images/heroImg1.png"
                  alt="Dr. Pavan Kumar — Consultant Nephrologist & Kidney Specialist"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Floating badges */}
            {badges.map(({ label, angle }) => (
              <motion.div
                key={label}
                animate={{ y: [-12, 0, -12] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: angle / 360 }}
                className="absolute flex items-center justify-center"
                style={{
                  ...badgePosition(angle),
                  background: 'rgba(255,255,255,0.40)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255,255,255,0.50)',
                  borderRadius: 60,
                  padding: '8px 18px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(113,9,8,0.12)',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#710908',
                }}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 font-bold" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FB6603' }}>
              Meet Your Doctor
            </p>
            <h2 className="font-display font-bold leading-tight mb-2" style={{ fontSize: 48, color: '#710908' }}>
              Dr. Pavan Kumar
            </h2>
            <p className="mb-6 font-semibold" style={{ fontSize: 18, color: '#FB6603' }}>
              MBBS, MD (General Medicine), DM (Nephrology) — Consultant Nephrologist &amp; Kidney Specialist
            </p>
            <p className="mb-4 leading-relaxed" style={{ fontSize: 18, color: '#A35E5D' }}>
              With 11 years of dedicated practice in nephrology, Dr. Pavan Kumar has developed a clear and methodical approach to kidney care. His clinical work spans the full spectrum of renal conditions — from early chronic kidney disease to dialysis and post-transplant follow-up.
            </p>
            <p className="mb-10 leading-relaxed" style={{ fontSize: 18, color: '#A35E5D' }}>
              Patients often remark on two qualities: the clarity with which he explains complex medical information, and the unhurried attention he gives during consultations. He believes that informed patients make better decisions, and that good medicine begins with listening. Having served patients from both urban and peripheral regions of Andhra Pradesh, Dr. Pavan remains committed to making specialised nephrology accessible beyond major metropolitan centres.
            </p>

            {/* Qualification pills */}
            <div className="flex flex-wrap gap-3">
              {qualifications.map((q) => (
                <div key={q}
                  style={{
                    background: 'rgba(255,255,255,0.60)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(113,9,8,0.12)',
                    borderRadius: 60,
                    padding: '10px 20px',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#710908',
                  }}>
                  {q}
                </div>
              ))}
            </div>

            <Link to="/team" className="btn-primary inline-flex mt-10">
              Know More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
