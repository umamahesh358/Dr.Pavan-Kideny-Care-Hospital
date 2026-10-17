import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Calendar } from 'lucide-react'

const highlights = [
  { text: 'Clear, Unhurried Consultations', detail: 'Every patient gets full attention' },
  { text: 'Advanced Diagnostic Equipment', detail: 'Fully equipped at Poranki since 2026' },
  { text: 'Personalised Treatment Plans', detail: "Tailored to each patient's condition" },
  { text: 'Multilingual Patient Support', detail: 'Telugu, Hindi, English & more' },
]

const milestones = [
  { year: '2022', label: 'Founded — Machilipatnam' },
  { year: '2024', label: 'Dialysis Programme' },
  { year: '2026', label: 'Expanded to Poranki' },
  { year: 'Now',  label: 'Serving All of AP' },
]



export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-6 bg-hero overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Clinic visual */}
          <motion.div initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="/images/fc431dd1-ae05-46d9-8373-ad0608ec1343.png"
                  alt="Dr. Pavan Kidney Care Clinic — Poranki, Vijayawada"
                  className="w-full h-full object-cover object-center"
                />
              </div>

            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-3 sm:-left-5 glass-strong rounded-2xl px-4 py-3 shadow-xl z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #710908, #FB6603)' }}>
                  <Calendar size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#710908] leading-none">Since</div>
                  <div className="text-[10px] text-[#4a0605]/50 font-medium">2022</div>
                </div>
              </div>
            </motion.div>

            <div className="mt-8 glass-card rounded-2xl p-4 sm:p-5">
              <div className="text-xs font-bold text-[#4a0605]/50 uppercase tracking-widest mb-4">Our Journey</div>
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-[#710908]/20 via-[#FB6603]/30 to-[#710908]/20" />
                {milestones.map(({ year, label }) => (
                  <div key={year} className="flex flex-col items-center gap-2 relative z-10">
                    <div className="w-6 h-6 rounded-full border-2 border-[#FB6603] bg-[#FFF8F4] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#FB6603]" />
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold text-[#710908]">{year}</div>
                      <div className="text-[10px] text-[#4a0605]/50 font-medium">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
            <div className="section-label mb-3">About Our Clinic</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2">A Clinic Built for</h2>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="gradient-text">Patients, Not Just Procedures</span>
            </h2>
            <p className="text-[#4a0605]/62 leading-relaxed mb-8 text-sm sm:text-base">
              Kidney disease can feel isolating — especially when specialised care is concentrated in major cities. Dr. Pavan&apos;s Kidney Care Clinic was created to change that. Starting in Machilipatnam in 2022 and expanding to a fully equipped centre in Poranki in 2026, we have focused on making advanced nephrology accessible to patients from smaller towns and surrounding districts across Andhra Pradesh. Here, every consultation is unhurried. Every treatment plan is explained in clear language. And every patient is treated with the dignity and attention they deserve.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map(({ text, detail }, i) => (
                <motion.li key={text} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 glass-card rounded-2xl px-4 py-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(113,9,8,0.1), rgba(251,102,3,0.15))' }}>
                    <CheckCircle2 size={16} className="text-[#FB6603]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1a0a0a]">{text}</div>
                    <div className="text-xs text-[#4a0605]/50">{detail}</div>
                  </div>
                </motion.li>
              ))}
            </ul>

            <a href="#about" className="btn-primary inline-flex">Learn More <ArrowRight size={15} /></a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
