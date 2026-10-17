import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home',     section: 'home' },
  { label: 'Services', section: 'services' },
  { label: 'About',    section: 'about' },
  { label: 'Team',     page: '/team' },
  { label: 'Doctor',   section: 'doctor' },
  { label: 'Contact',  section: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('home')
  const location                = useLocation()
  const onHome                  = location.pathname === '/'

  const sectionHref = (id) => (onHome ? `#${id}` : `/#${id}`)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      if (!onHome) return
      const ids = links.filter(l => l.section).map(l => l.section)
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  return (
    <>
      {/* ── Floating pill nav ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1100px]"
      >
        <div
          className="flex items-center justify-between px-4 py-2 rounded-full"
          style={{
            /* ── True glassmorphism: see-through, no blur ── */
            background: scrolled
              ? 'rgba(255, 252, 250, 0.30)'
              : 'rgba(255, 252, 250, 0.18)',
            backdropFilter: 'saturate(160%)',
            WebkitBackdropFilter: 'saturate(160%)',
            border: '1.5px solid rgba(255, 255, 255, 0.55)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(113,9,8,0.12), 0 1.5px 0 rgba(255,255,255,0.70) inset'
              : '0 4px 20px rgba(113,9,8,0.07), 0 1.5px 0 rgba(255,255,255,0.60) inset',
            transition: 'background 0.35s ease, box-shadow 0.35s ease',
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 py-1">
            <img
              src="/images/Dr. Pavan Kidney Care Logo.png"
              alt="Dr. Pavan's Kidney Care Clinic"
              className="h-10 sm:h-11 w-auto object-contain"
              style={{ maxWidth: 160 }}
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-0.5">
            {links.map(({ label, section, page }) => {
              const isActive = page
                ? location.pathname === page
                : onHome && active === section

              return (
                <li key={label} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.60)',
                        border: '1px solid rgba(113,9,8,0.10)',
                        boxShadow: '0 2px 8px rgba(113,9,8,0.07), 0 1px 0 rgba(255,255,255,0.9) inset',
                      }}
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  {page ? (
                    <Link
                      to={page}
                      className={`relative z-10 block px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                        isActive ? 'text-[#710908]' : 'text-[#3a0606]/70 hover:text-[#710908]'
                      }`}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={sectionHref(section)}
                      className={`relative z-10 block px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                        isActive ? 'text-[#710908]' : 'text-[#3a0606]/70 hover:text-[#710908]'
                      }`}
                    >
                      {label}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Call Now */}
          <a href="tel:+919876543210" className="hidden md:flex btn-primary text-xs px-5 py-2.5 shrink-0">
            <Phone size={13} /> Call Now
          </a>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#710908]"
            style={{
              background: 'rgba(255,255,255,0.50)',
              border: '1px solid rgba(255,255,255,0.65)',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'x' : 'm'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{ rotate: 90,    opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(42,4,3,0.20)' }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
              style={{
                background: 'rgba(255, 252, 250, 0.25)',
                backdropFilter: 'saturate(180%)',
                WebkitBackdropFilter: 'saturate(180%)',
                borderLeft: '1.5px solid rgba(255,255,255,0.45)',
                boxShadow: '-6px 0 32px rgba(113,9,8,0.10)',
              }}
            >
              <div className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.30)' }}>
                <img src="/images/Dr. Pavan Kidney Care Logo.png" alt="Dr. Pavan's Kidney Care Clinic"
                  className="h-9 w-auto object-contain" />
                <button onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#710908]"
                  style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.65)' }}>
                  <X size={16} />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {links.map(({ label, section, page }, i) => {
                  const cls = "flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold text-[#1a0a0a] hover:bg-white/35 transition-all duration-200 group"
                  const inner = (
                    <>
                      {label}
                      <ChevronRight size={14} className="text-[#A35E5D] group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )
                  return (
                    <motion.div key={label}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}>
                      {page
                        ? <Link to={page} onClick={() => setOpen(false)} className={cls}>{inner}</Link>
                        : <a href={sectionHref(section)} onClick={() => setOpen(false)} className={cls}>{inner}</a>
                      }
                    </motion.div>
                  )
                })}
              </nav>

              <div className="px-4 pb-8 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.28)' }}>
                <a href="tel:+919876543210" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
                  <Phone size={15} /> Call Now
                </a>
                <p className="text-center text-xs text-[#4a0605]/40 mt-3">Mon–Sat · 9AM – 7PM</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
