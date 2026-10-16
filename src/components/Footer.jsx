import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const quickLinks = [
  { label: 'Home',         hash: '#home' },
  { label: 'About',        hash: '#about' },
  { label: 'Specialities', hash: '#services' },
  { label: 'Team',         hash: '#doctor', page: '/team' },
  { label: 'Doctor',       hash: '#doctor' },
  { label: 'Contact',      hash: '#contact' },
]

const services = [
  'CKD Management',
  'Dialysis Support',
  'Kidney Stone Treatment',
  'AKI Treatment',
  'Transplant Follow-Up',
]

const contactItems = [
  { icon: Phone,   text: '+91 98765 43210',                  href: 'tel:+919876543210' },
  { icon: Mail,    text: 'info@drpavankidneycare.com',        href: 'mailto:info@drpavankidneycare.com' },
  { icon: MapPin,  text: 'Door no: 13-204, beside Sono Vision, T V R Colony, Poranki, Vijayawada, AP 521137', href: null },
  { icon: Clock,   text: 'Mon–Sat: 9 AM – 7 PM',             href: null },
]

const linkHoverStyle = { color: '#FB6603' }
const linkBaseStyle = { color: 'rgba(219,171,157,0.80)', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }

function FooterLink({ href, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a href={href}
      style={{ ...linkBaseStyle, ...(hovered ? linkHoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {children}
    </a>
  )
}

export default function Footer() {
  const [showTop, setShowTop] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'
  // On Home, hash links scroll in-page; on other routes, route back to Home + hash.
  const sectionHref = (hash) => (onHome ? hash : `/${hash}`)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer id="contact-footer" style={{ background: 'linear-gradient(135deg, #710908 0%, #4a0605 55%, #2d0403 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* Glass overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6" style={{ paddingTop: 80, paddingBottom: 48 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* Col 1 — Brand */}
            <div>
              <div className="mb-4">
                <img src="/images/Dr. Pavan Kidney Care Logo.png" alt="Dr. Pavan's Kidney Care Clinic" className="h-20 w-auto object-contain brightness-0 invert" />
              </div>
              <p style={{ fontSize: 14, color: 'rgba(219,171,157,0.80)', lineHeight: 1.7 }}>
                Vijayawada &amp; Poranki's trusted nephrology centre — delivering expert kidney care with compassion since 2009. NABH Accredited · ISO 9001:2015.
              </p>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <p className="font-bold text-white mb-5" style={{ fontSize: 14 }}>Quick Links</p>
              <ul className="space-y-3">
                {quickLinks.map(({ label, hash, page }) => (
                  <li key={label}><FooterLink href={page || sectionHref(hash)}>{label}</FooterLink></li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Services */}
            <div>
              <p className="font-bold text-white mb-5" style={{ fontSize: 14 }}>Our Services</p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}><FooterLink href={sectionHref('#services')}>{s}</FooterLink></li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <p className="font-bold text-white mb-5" style={{ fontSize: 14 }}>Contact Us</p>
              <ul className="space-y-4">
                {contactItems.map(({ icon: Icon, text, href }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon size={15} style={{ color: '#FB6603', marginTop: 2, flexShrink: 0 }} />
                    {href
                      ? <FooterLink href={href}>{text}</FooterLink>
                      : <span style={{ fontSize: 14, color: 'rgba(219,171,157,0.80)' }}>{text}</span>
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}>
            <p style={{ fontSize: 12, color: 'rgba(219,171,157,0.50)' }}>
              © {new Date().getFullYear()} Dr. Pavan's Kidney Care Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </div>
          </div>
        </div>

        {/* ECG gradient bar */}
        <div style={{ height: 4, background: 'linear-gradient(90deg, #710908, #FB6603, #FC9F5E, #FB6603, #710908)' }} />
      </footer>

      {/* Floating CTA — WhatsApp & Call */}
      <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-3">
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
          style={{ background: '#25D366', boxShadow: '0 6px 24px rgba(37,211,102,0.45)' }}
        >
          <svg viewBox="0 0 24 24" fill="white" width="26" height="26">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.75.75 0 00.916.916l5.573-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.362l-.355-.212-3.683.972.986-3.595-.232-.371A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
        </motion.a>

        <motion.a
          href="tel:+919876543210"
          aria-label="Call us"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
          style={{ background: 'linear-gradient(135deg, #710908, #FB6603)', boxShadow: '0 6px 24px rgba(113,9,8,0.45)' }}
        >
          <Phone size={22} color="white" />
        </motion.a>
      </div>

      {/* Scroll-to-top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="fixed bottom-8 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white"
            style={{
              background: 'linear-gradient(135deg, #FB6603, #FC9F5E)',
              boxShadow: '0 6px 24px rgba(251,102,3,0.45)',
              border: 'none',
              cursor: 'pointer',
            }}>
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
