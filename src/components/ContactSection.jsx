import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98765 43210'],
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@drpavankidneycare.com'],
    href: 'mailto:info@drpavankidneycare.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Door no: 13-204, beside Sono Vision', 'T V R Colony, Poranki', 'Vijayawada, Andhra Pradesh 521137'],
    href: 'https://maps.google.com/?q=Door+no+13-204+beside+Sono+Vision+T+V+R+Colony+Poranki+Vijayawada+Andhra+Pradesh+521137',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'],
    href: null,
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28" style={{ background: '#FFFDFB' }}>

      {/* Blobs */}
      <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.07, 0.13, 0.07] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FB6603 0%, transparent 70%)' }} />
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.11, 0.06] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #A35E5D 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6">

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center mb-16">
          <p className="mb-3 font-bold" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FB6603' }}>
            Get in Touch
          </p>
          <h2 className="font-display font-bold leading-tight mb-5" style={{ fontSize: 48, color: '#710908' }}>
            We're Here to Help
          </h2>
          <p className="leading-relaxed" style={{ fontSize: 18, color: '#A35E5D' }}>
            Whether you need a second opinion, long-term management, or immediate care, our team is ready to guide your kidney care journey.
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map(({ icon: Icon, title, lines, href }, i) => {
            const Wrapper = href ? 'a' : 'div'
            return (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <Wrapper
                  {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {})}
                  className="block h-full text-center transition-transform hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.55)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(219,171,157,0.30)',
                    borderRadius: 24,
                    padding: '32px 24px',
                    boxShadow: '0 16px 50px rgba(113,9,8,0.06)',
                  }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(251,102,3,0.08)', border: '1px solid rgba(251,102,3,0.15)' }}>
                    <Icon size={22} style={{ color: '#FB6603' }} />
                  </div>
                  <p className="font-bold mb-3" style={{ fontSize: 15, color: '#710908' }}>{title}</p>
                  {lines.map((line) => (
                    <p key={line} style={{ fontSize: 14, color: '#A35E5D', lineHeight: 1.6 }}>{line}</p>
                  ))}
                </Wrapper>
              </motion.div>
            )
          })}
        </div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden"
          style={{ borderRadius: 32, border: '1px solid rgba(219,171,157,0.30)', boxShadow: '0 24px 80px rgba(113,9,8,0.08)' }}>
          <iframe
            title="Clinic location"
            src="https://maps.google.com/maps?q=T+V+R+Colony%2C+Poranki%2C+Vijayawada%2C+Andhra+Pradesh+521137&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
