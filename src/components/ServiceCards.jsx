import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    desc: 'Careful monitoring, medication management, and lifestyle planning to slow the progression of chronic kidney disease at every stage.',
    image: '/images/Chronic%20Kidney%20Disease.png',
    alt: 'Illustration of chronic kidney disease showing renal cortex, medulla and fibrosis',
    accent: '#710908',
    link: '/services/ckd',
  },
  {
    badge: 'Dialysis Support',
    title: 'Dialysis Care',
    desc: 'Haemodialysis and peritoneal dialysis managed with precision, in a calm and supportive clinical environment.',
    image: '/images/Dialysis%20Support.png',
    alt: 'Modern hemodialysis machine used for kidney dialysis treatment',
    accent: '#FB6603',
    link: '/services/dialysis',
  },
  {
    badge: 'Kidney Stone Treatment',
    title: 'Kidney Stone Solutions',
    desc: 'Accurate diagnosis and targeted treatment, combined with long-term dietary prevention strategies tailored to each patient.',
    image: '/images/Kidney%20Stones.png',
    alt: 'Diagram of kidney stones within the renal pelvis and calyxes',
    accent: '#A35E5D',
    link: '/services/kidney-stones',
  },
  {
    badge: 'CT Scan',
    title: 'CT (Computed Tomography) Scan',
    desc: 'High-resolution cross-sectional imaging for detailed assessment of kidneys, abdomen, and related structures.',
    image: '/images/a_clean_high_resolution_product_style_rendering_o.png',
    alt: 'CT scan machine in a modern clinical setting',
    accent: '#710908',
    link: '/services/ct-scan',
  },
  {
    badge: 'USG',
    title: 'USG (Ultrasonography)',
    desc: 'Radiation-free ultrasound imaging for kidney, urinary-tract, abdominal, and soft-tissue evaluation.',
    image: '/images/a_clean_studio_style_product_medical_equipment_re.png',
    alt: 'Ultrasound probe being used for diagnostic imaging',
    accent: '#FB6603',
    link: '/services/ultrasonography',
  },
  {
    badge: 'Digital X-ray',
    title: 'Digital X-ray',
    desc: 'Quick digital radiographic imaging for initial assessment of bones, chest, abdomen, and selected urinary concerns.',
    image: '/images/a_clean_isolated_product_medical_equipment_render.png',
    alt: 'Digital X-ray imaging display in a medical facility',
    accent: '#A35E5D',
    link: '/services/digital-x-ray',
  },
  {
    badge: 'Hormone Assays',
    title: 'Advanced Hormone Assays',
    desc: 'Precision laboratory testing for thyroid, adrenal, metabolic, and kidney-related hormonal evaluation.',
    image: '/images/Mindray%20BS-3000%20Analyzer%20Workstation.png',
    alt: 'Medical laboratory analyzer workstation for hormone testing',
    accent: '#710908',
    link: '/services/advanced-hormone-assays',
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
            From early chronic kidney disease to dialysis and transplant follow-up — each service is delivered with clinical precision and genuine care.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5 sm:gap-6 relative z-10">
          {services.map(({ badge, title, desc, image, alt, accent, link }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={link}
                style={cardStyle}
                className="p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 lg:gap-8 group sm:min-h-[190px] block transition-all duration-400 no-underline"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(251,102,3,0.45)'
                  e.currentTarget.style.boxShadow = '0 28px 80px rgba(251,102,3,0.22), 0 8px 28px rgba(251,102,3,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.75)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(113,9,8,0.08), 0 4px 16px rgba(113,9,8,0.04)'
                }}
              >
                {/* Image container — fixed uniform frame with object-contain */}
                <div className="relative w-full sm:w-[240px] md:w-[260px] lg:w-[280px] h-[155px] sm:h-[150px] shrink-0">
                  {/* Colored glow behind the frame */}
                  <div
                    className="absolute -inset-1.5 rounded-[22px] pointer-events-none opacity-60"
                    style={{ background: `radial-gradient(circle, ${accent}25 0%, transparent 72%)`, filter: 'blur(12px)' }}
                  />

                  <div
                    className="relative w-full h-full rounded-2xl p-2.5 flex items-center justify-center overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      border: '1.5px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: `0 12px 30px rgba(113,9,8,0.08), 0 1px 0 rgba(255,255,255,0.95) inset, 0 0 0 1px ${accent}14`,
                    }}
                  >
                    <img
                      src={image}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content — uniform typographic balance */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <span
                    className="inline-flex self-start px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-2"
                    style={{ background: `${accent}14`, color: accent }}
                  >
                    {badge}
                  </span>
                  <h3
                    className="font-display font-bold mb-1.5 text-xl sm:text-2xl lg:text-[26px] leading-tight"
                    style={{ color: '#710908' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed line-clamp-2" style={{ color: '#A35E5D' }}>
                    {desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex sm:items-center justify-end sm:justify-center shrink-0">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{ background: `${accent}14` }}
                  >
                    <ArrowUpRight size={22} style={{ color: accent }} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
