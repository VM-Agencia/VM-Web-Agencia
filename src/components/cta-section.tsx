import "./css/CTASection.css"
import "./css/typography.css"
import { HeroBackground } from "./hero/HeroBackground"
import NeuralStatic from "./hero/NeuralStatic"
import GlowButton from "./hero/GlowButton"
import { useLocale, useTranslations } from "lib/i18n"

export function CTASection({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const t = useTranslations("CTA")
  const locale = useLocale()

  return (
      <section id="contactar" className="cta-section">
        <div className="cta-section-bg">
          <div className="cta-section-glow cta-section-glow-top" />
          <div className="cta-section-glow cta-section-glow-bottom" />
        </div>

        <div className="cta-section-container">
          <div className="cta-card">
            <div className="cta-card-bg">
              <HeroBackground />
              <NeuralStatic />
              <div className="cta-card-overlay" />
            </div>

            <div className="cta-logo">
              <img src="/images_webp/VMlogo.webp" alt="VM Agency - Marketing Digital con IA" loading="lazy" className="cta-logo-image" />
            </div>

            <div className="cta-card-deco cta-card-deco-right" />
            <div className="cta-card-deco cta-card-deco-left" />

            <div className="cta-content">
              <h2 className="cta-title heading-h2">
                {t("title")} <span>{t("highlight")}</span>
              </h2>

              <p className="cta-description">
                {t("description")}
              </p>

              <div className="hero-button-wrapper">
                <span onClick={() => onNavigate?.(`/${locale}/formulario`)} className="cursor-pointer inline-block">
                  <GlowButton/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
