import { Globe, Link2, Camera, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { useTranslations } from "lib/i18n"
import "./css/footer.css"

const socialLinks = [
  { icon: Globe, href: "#", label: "Twitter" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Camera, href: "#", label: "Instagram" },
]

export function Footer({ onNavigate }: { onNavigate?: (path: string) => void }) {
  const t = useTranslations("Footer")

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    onNavigate?.(href)
  }

  const quickLinks = [
    { href: "#home", label: t("links.home") },
    { href: "#servicios", label: t("links.servicios") },
    { href: "#proyectos", label: t("links.proyectos") },
    { href: "#contactar", label: t("links.contactar") },
    { href: "#faq", label: t("links.faq") },
  ]

  return (
      <footer className="footer">
        <div className="footer-glow footer-glow-purple" />
        <div className="footer-glow footer-glow-cyan" />
        <div className="footer-glow footer-glow-orange" />

        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand-card">
              <a href="/" className="footer-logo">
                <span className="footer-logo-vm">VM</span>
                <span className="footer-logo-agency">Agencia</span>
              </a>

              <p className="footer-brand-text">
                {t("brand")}
              </p>

              <div className="footer-socials">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="footer-social-link"
                    >
                      <social.icon className="footer-social-icon" />
                    </a>
                ))}
              </div>
            </div>

            <div className="footer-links-area">
              <div className="footer-column">
                <h4 className="footer-title">{t("titles.links")}</h4>
                <ul className="footer-list">
                  {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} onClick={handleNav(link.href)} className="footer-link">
                          {link.label}
                        </a>
                      </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">{t("titles.legal")}</h4>
                <ul className="footer-list">
                  <li>
                    <a href="/aviso-legal" onClick={handleNav('/aviso-legal')} className="footer-link">
                      Aviso Legal
                    </a>
                  </li>
                  <li>
                    <a href="/politica-privacidad" onClick={handleNav('/politica-privacidad')} className="footer-link">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="/politica-cookies" onClick={handleNav('/politica-cookies')} className="footer-link">
                      Política de Cookies
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">{t("titles.contact")}</h4>

                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <a href="mailto:hola@vmagency.com" className="footer-contact-link">
                      <div className="footer-contact-icon-wrap">
                        <Mail className="footer-contact-icon" />
                      </div>
                      <span className="footer-contact-text">vmmarketing.ia@gmail.com</span>
                    </a>
                  </li>

                  <li className="footer-contact-item">
                    <a
                        href="https://maps.google.com/?q=Madrid,España"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-contact-link"
                    >
                      <div className="footer-contact-icon-wrap">
                        <MapPin className="footer-contact-icon" />
                      </div>
                      <span className="footer-contact-text">{t("location")}</span>
                    </a>
                  </li>
                </ul>

                <a href="#contactar" className="footer-cta-link desktop-only">
                  {t("cta.title")}
                  <ArrowUpRight className="footer-cta-arrow" />
                </a>

                <a href="#contactar" className="footer-cta-card mobile-only">
                  <div className="footer-cta-content">
                    <span className="footer-cta-title">{t("cta.title")}</span>
                    <span className="footer-cta-sub">{t("cta.subtitle")}</span>
                  </div>
                  <ArrowUpRight className="footer-cta-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} VM Agencia. {t("copy")}
            </p>
          </div>
        </div>
      </footer>
  )
}
