import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Team from './pages/Team'
import ServicePage from './pages/ServicePage'
import IntroAnimation from './components/IntroAnimation'

export default function App() {
  const [showIntro, setShowIntro] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem('introPlayed') !== 'true'
  )

  const finishIntro = () => {
    sessionStorage.setItem('introPlayed', 'true')
    setShowIntro(false)
  }

  return (
    <HelmetProvider>
      {showIntro && <IntroAnimation onDone={finishIntro} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}