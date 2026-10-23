import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowUp, Activity } from 'lucide-react'
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
  { label: 'CKD Management',       link: '/services/ckd' },
  { label: 'Dialysis Support',     link: '/services/dialysis' },
  { label: 'Kidney Stone Care',    link: '/services/kidney-stones' },
  { label: 'AKI Treatment',        link: '/services/aki' },
  { label: 'Transplant Follow-Up', link: '/services/transplant' },
  { label: 'CT Scan',              link: '/services/ct-scan' },
  { label: 'Ultrasonography (USG)',link: '/services/ultrasonography' },
  { label: 'Digital X-ray',        link: '/services/digital-x-ray' },
  { label: 'Hormone Assays',       link: '/services/advanced-hormone-assays' },
]

const linkHoverStyle = { color: '#FB6603' }
const linkBaseStyle = { color: 'rgba(219,171,157,0.82)', fontSize: 13.5, textDecoration: 'none', transition: 'color 0.2s' }

function FooterLink({ href, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      style={{ ...linkBaseStyle, ...(hovered ? linkHoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
      <footer
        id="contact-footer"
        style={{
          background: 'linear-gradient(135deg, #710908 0%, #4a0605 55%, #250302 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient atmospheric glows */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(251,102,3,0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '-60px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(163,94,93,0.14) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6" style={{ paddingTop: 80, paddingBottom: 48 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">

            {/* Col 1 — Brand & Care Mission */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                {/* Seamlessly blended brand logo — zero harsh white sticker box */}
                <div className="mb-5 relative inline-block group">
                  <div
                    className="absolute -inset-2 rounded-2xl pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity"
                    style={{
                      background: 'radial-gradient(circle, rgba(251,102,3,0.20) 0%, transparent 72%)',
                      filter: 'blur(12px)',
                    }}
                  />
                  <img
                    src="/images/dr_pavan_logo_dark_footer.png"
                    alt="Dr. PAVAN KIDNEY CARE"
                    className="h-13 sm:h-14 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <p style={{ fontSize: 14, color: 'rgba(219,171,157,0.85)', lineHeight: 1.75, maxWidth: 360 }}>
                  Specialised nephrology and kidney care delivered with clinical precision, advanced technology, and compassionate listening for patients across Andhra Pradesh.
                </p>

                {/* Sub-badge: Diagnostics Partner */}
                <div
                  className="mt-6 p-3.5 rounded-xl flex items-center gap-3"
                  style={{
                    background: 'rgba(255,255,255,0.035)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(251,102,3,0.15)', color: '#FB6603' }}
                  >
                    <Activity size={16} />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Comprehensive Diagnostic Wing</p>
                    <p style={{ fontSize: 11.5, color: 'rgba(219,171,157,0.70)' }}>
                      In-house CT, Ultrasound, Digital X-ray &amp; Hormone Labs
                    </p>
                  </div>
                </div>
              </div>

              {/* General timings and email */}
              <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
                <div className="flex items-center gap-2.5">
                  <Mail size={13} style={{ color: '#FB6603' }} className="shrink-0" />
                  <FooterLink href="mailto:info@drpavankidneycare.com">info@drpavankidneycare.com</FooterLink>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock size={13} style={{ color: '#FB6603' }} className="shrink-0" />
                  <span style={{ fontSize: 13, color: 'rgba(219,171,157,0.80)' }}>Mon–Sat: 9:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div className="lg:col-span-2">
              <p className="font-bold text-white mb-5 tracking-wide" style={{ fontSize: 14 }}>
                Quick Links
              </p>
              <ul className="space-y-3">
                {quickLinks.map(({ label, hash, page }) => (
                  <li key={label}>
                    <FooterLink href={page || sectionHref(hash)}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Clinical & Diagnostic Services */}
            <div className="lg:col-span-2">
              <p className="font-bold text-white mb-5 tracking-wide" style={{ fontSize: 14 }}>
                Our Services
              </p>
              <ul className="space-y-2.5">
                {services.map(({ label, link }) => (
                  <li key={label}>
                    <FooterLink href={link}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Our Centres & Diagnostics */}
            <div className="lg:col-span-4">
              <p className="font-bold text-white mb-5 tracking-wide" style={{ fontSize: 14 }}>
                Our Centres &amp; Diagnostics
              </p>

              <div className="space-y-3.5">
                {/* 1. Poranki Kidney Care Centre */}
                <div
                  className="p-3.5 rounded-xl transition-all duration-300 hover:border-orange-500/40"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <p className="font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 mb-1.5" style={{ color: '#FB6603' }}>
                    <MapPin size={13} className="shrink-0" /> Poranki Centre (Vijayawada)
                  </p>
                  <p style={{ fontSize: 12.5, color: 'rgba(219,171,157,0.85)', lineHeight: 1.5 }}>
                    Door no: 13-204, Beside Sono Vision, T V R Colony, Poranki, Vijayawada, AP 521137
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <Phone size={12} style={{ color: '#FB6603' }} className="shrink-0" />
                    <FooterLink href="tel:+919876543210">+91 98765 43210</FooterLink>
                  </div>
                </div>

                {/* 2. Machilipatnam Kidney Care Centre */}
                <div
                  className="p-3.5 rounded-xl transition-all duration-300 hover:border-orange-500/40"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <p className="font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 mb-1.5" style={{ color: '#FB6603' }}>
                    <MapPin size={13} className="shrink-0" /> Machilipatnam Centre
                  </p>
                  <p style={{ fontSize: 12.5, color: 'rgba(219,171,157,0.85)', lineHeight: 1.5 }}>
                    Beside Anjaneya Swamy Temple, Police Quarters, Machilipatnam - 521001
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <div className="flex items-center gap-1.5">
                      <Phone size={12} style={{ color: '#FB6603' }} className="shrink-0" />
                      <FooterLink href="tel:+917207099144">+91 72070 99144</FooterLink>
                    </div>
                    <span style={{ color: 'rgba(219,171,157,0.40)' }}>·</span>
                    <div className="flex items-center gap-1.5">
                      <Phone size={12} style={{ color: '#FB6603' }} className="shrink-0" />
                      <FooterLink href="tel:+917207099166">+91 72070 99166</FooterLink>
                    </div>
                  </div>
                </div>

                {/* 3. iRIS Imaging & Diagnostics Facility */}
                <div
                  className="p-3.5 sm:p-4 rounded-xl transition-all duration-300 hover:border-orange-500/40"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Seamlessly blended iRIS Logo */}
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <img
                      src="/images/iris_diagnostics_dark_footer.png"
                      alt="iRIS IMAGING & DIAGNOSTICS — Compassion · Innovation · Trust"
                      className="h-9 sm:h-10 w-auto object-contain"
                    />
                    <span
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(251,102,3,0.15)', color: '#FB6603' }}
                    >
                      Diagnostics
                    </span>
                  </div>

                  <p style={{ fontSize: 12.5, color: 'rgba(219,171,157,0.85)', lineHeight: 1.5 }}>
                    D.No: 13-204, Beside SonoVision, Poranki, Krishna - 521137
                  </p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <div className="flex items-center gap-1.5">
                      <Phone size={12} style={{ color: '#FB6603' }} className="shrink-0" />
                      <FooterLink href="tel:08662585888">0866 258 5888</FooterLink>
                    </div>
                    <span style={{ color: 'rgba(219,171,157,0.40)' }}>·</span>
                    <div className="flex items-center gap-1.5">
                      <Phone size={12} style={{ color: '#FB6603' }} className="shrink-0" />
                      <FooterLink href="tel:+919675219999">+91 967 521 9999</FooterLink>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom copyright bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}
          >
            <p style={{ fontSize: 12, color: 'rgba(219,171,157,0.55)' }}>
              © {new Date().getFullYear()} Dr. PAVAN KIDNEY CARE &amp; iRIS IMAGING &amp; DIAGNOSTICS. All rights reserved.
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
            }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
