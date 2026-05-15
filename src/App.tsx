import { useState, useEffect, useCallback } from "react"
import { I18nProvider } from "lib/i18n"
import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import BusinessConversionSection from "./components/BusinessConversionSection"
import ServicesLadder from "./components/services"
import RoadmapSection from "./components/system"
import { ProjectsSection } from "./components/projects-section"
import { FAQSection } from "./components/FAQSection"
import { CTASection } from "./components/cta-section"
import { Footer } from "./components/footer"
import BackgroundImage from "./components/BackgroundImage"
import { ServicePackOne } from "./components/services/pack1"
import { ServicePackTwo } from "./components/services/pack2"
import { ServicePackThree } from "./components/services/pack3"
import { ServicePackFour } from "./components/services/pack4"
import ConsultoriaVMPage from "./components/formulario"
import { LegalNotice } from "./components/legal/LegalNotice"
import { PrivacyPolicy } from "./components/legal/PrivacyPolicy"
import { CookiesPolicy } from "./components/legal/CookiesPolicy"
import "./App.css"


const packComponents: Record<number, React.ComponentType<{ onNavigate?: (path: string) => void }>> = {
  1: ServicePackOne,
  2: ServicePackTwo,
  3: ServicePackThree,
  4: ServicePackFour,
}

function App() {
  const [servicePack, setServicePack] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'faq' | 'form' | 'legal'>(() => {
    const path = window.location.pathname
    if (path === '/faq') return 'faq'
    if (path.endsWith('/formulario')) return 'form'
    if (['/aviso-legal', '/politica-privacidad', '/politica-cookies'].includes(path)) return 'legal'
    return 'home'
  })

  const [legalPage, setLegalPage] = useState<string | null>(() => {
    const path = window.location.pathname
    if (['/aviso-legal', '/politica-privacidad', '/politica-cookies'].includes(path)) return path
    return null
  })

  useEffect(() => {
    const path = window.location.pathname
    const match = path.match(/^\/services\/pack(\d+)$/)
    if (match) {
      setServicePack(Number(match[1]))
      window.scrollTo(0, 0)
    }
    if (['/faq', '/aviso-legal', '/politica-privacidad', '/politica-cookies'].includes(path) || path.endsWith('/formulario')) window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handlePop = () => {
      const path = window.location.pathname
      if (path.endsWith('/formulario')) setCurrentPage('form')
      else if (path === '/faq') setCurrentPage('faq')
      else if (['/aviso-legal', '/politica-privacidad', '/politica-cookies'].includes(path)) {
        setCurrentPage('legal')
        setLegalPage(path)
      } else {
        setCurrentPage('home')
        setLegalPage(null)
      }
      const match = path.match(/^\/services\/pack(\d+)$/)
      setServicePack(match ? Number(match[1]) : null)
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  const navigate = useCallback((path: string) => {
    window.scrollTo(0, 0)
    if (path === '/faq') {
      window.history.pushState({ page: 'faq' }, '', '/faq')
      setServicePack(null)
      setCurrentPage('faq')
    } else if (path.endsWith('/formulario')) {
      window.history.pushState({ page: 'form' }, '', path)
      setServicePack(null)
      setCurrentPage('form')
    } else if (['/aviso-legal', '/politica-privacidad', '/politica-cookies'].includes(path)) {
      window.history.pushState({ page: 'legal', legalPage: path }, '', path)
      setServicePack(null)
      setLegalPage(path)
      setCurrentPage('legal')
    } else {
      const packMatch = path.match(/^\/services\/pack(\d+)$/)
      if (packMatch) {
        window.history.pushState({ servicePack: Number(packMatch[1]) }, '', path)
        setServicePack(Number(packMatch[1]))
        return
      }
      setServicePack(null)
      setCurrentPage('home')
      const hash = path.includes('#') ? path.split('#')[1] : null
      window.history.pushState({ page: 'home' }, '', hash ? `/#${hash}` : '/')
      if (hash) {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  const PackComponent = servicePack ? packComponents[servicePack] : null

  if (PackComponent) {
    return (
      <I18nProvider locale="es">
        <main className="relative min-h-screen">
          <div className="fixed inset-0 bg-background/60 -z-10" />
          <div className="relative z-10">
            <Navbar forceActive onNavigate={navigate} />
            <div className="pt-20">
              <PackComponent onNavigate={navigate} />
            </div>
            <div className="flex justify-center pb-16">
              <button onClick={() => navigate('/#servicios')} className="px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-lg font-semibold">
                ← Volver a servicios
              </button>
            </div>
            <Footer onNavigate={navigate} />
          </div>
        </main>
      </I18nProvider>
    )
  }

  if (currentPage === 'faq') {
    return (
      <I18nProvider locale="es">
        <main className="relative min-h-screen">
          <div className="fixed inset-0 bg-background/60 -z-10" />
          <div className="relative z-10">
            <Navbar onNavigate={navigate} />
            <div>
              <FAQSection />
            </div>
            <Footer onNavigate={navigate} />
          </div>
        </main>
      </I18nProvider>
    )
  }

  if (currentPage === 'form') {
    return (
      <I18nProvider locale="es">
        <div className="relative z-10">
          <Navbar forceActive onNavigate={navigate} />
          <ConsultoriaVMPage />
        </div>
      </I18nProvider>
    )
  }

  if (currentPage === 'legal') {
    let content
    if (legalPage === '/aviso-legal') content = <LegalNotice />
    else if (legalPage === '/politica-privacidad') content = <PrivacyPolicy />
    else content = <CookiesPolicy />

    return (
      <I18nProvider locale="es">
        <main className="relative min-h-screen">
          <div className="fixed inset-0 bg-background/60 -z-10" />
          <div className="relative z-10">
            <Navbar forceActive onNavigate={navigate} />
            {content}
            <Footer onNavigate={navigate} />
          </div>
        </main>
      </I18nProvider>
    )
  }

  return (
    <I18nProvider locale="es">
      <main className="relative min-h-screen">
        <div className="fixed inset-0 bg-background/60 -z-10" />

        <div className="relative z-10">
          <Navbar onNavigate={navigate} />

          <section id="home">
            <HeroSection onNavigate={navigate} />
          </section>

          <section id="conversion">
            <BusinessConversionSection />
          </section>

          <section id="servicios">
            <ServicesLadder onSelectPack={(id) => navigate(`/services/pack${id}`)} />
          </section>

          <BackgroundImage />

          <section id="automatizacion">
            <RoadmapSection />
          </section>

          <section id="proyectos">
            <ProjectsSection />
          </section>

          <section id="contactar">
            <CTASection onNavigate={navigate} />
          </section>

          <Footer onNavigate={navigate} />
        </div>
      </main>
    </I18nProvider>
  )
}

export default App
