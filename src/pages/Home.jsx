import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import ServiceCards from '../components/ServiceCards'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import SpecialitiesGrid from '../components/SpecialitiesGrid'
import DoctorSection from '../components/DoctorSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { clinicSchema } from '../lib/schema'

export default function Home() {
  return (
    <>
      <SEO
        title="Best Nephrologist & Kidney Specialist in Vijayawada, Poranki"
        description="Dr. Pavan Kidney Care Centre in Poranki, Vijayawada, Andhra Pradesh — trusted by 5,000+ patients. Best nephrologist & kidney specialist for CKD, dialysis, kidney stones, hypertension and kidney transplant care. Book an appointment today."
        path="/"
        jsonLd={clinicSchema}
      />
      <Navbar />
      <HeroSection />
      <ServiceCards />
      <AboutSection />
      <StatsSection />
      <SpecialitiesGrid />
      <DoctorSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
