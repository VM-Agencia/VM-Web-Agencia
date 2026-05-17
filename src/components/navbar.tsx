import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useTranslations, useLocale, useSetLocale } from "lib/i18n"

export function Navbar({ forceActive = false, onNavigate }: { forceActive?: boolean; onNavigate?: (path: string) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const t = useTranslations("Navbar")
  const locale = useLocale()
  const setLocale = useSetLocale()

  useEffect(() => {
    if (forceActive) {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [forceActive])

  const navLinks = [
    { href: `/#home`, label: t("home") },
    { href: `/#servicios`, label: t("servicios") },
    { href: `/#proyectos`, label: t("proyectos") },
    { href: `/#contactar`, label: t("contactar") },
    { href: `/faq`, label: t("faq") }
  ]

  return (
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
            className={`
          transition-all duration-500
          ${
                isOpen
                    ? "bg-gradient-to-b from-[#08bacc] via-[#08bacc]/80 via-[#08bacc]/50 to-[#08bacc]/20 backdrop-blur-xl"
                    : scrolled
                        ? "bg-gradient-to-b from-[#08bacc]/80 via-[#08bacc]/40 to-transparent backdrop-blur-xl"
                        : "bg-transparent"
            }
        `}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-16 lg:h-20 pt-2">

              {/* LOGO */}
              <a href={`/`} onClick={(e) => { e.preventDefault(); onNavigate?.('/') }} className="flex items-center gap-2 ml-3">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#FDE259] to-[#F88A4B]" />

                  <img
                      src="/images_webp/VMlogo.webp"
                      alt="VM Agency logo"
                      width={96}
                      height={92}
                      className="relative z-10 object-contain transition duration-300 group-hover:scale-105 w-10 sm:w-12 lg:w-16"
                  />
                </div>
              </a>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); onNavigate?.(link.href) }}
                        className="text-base font-semibold text-white/90 transition-all duration-300 tracking-wide drop-shadow-md hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] hover:scale-105"
                    >
                      {link.label}
                    </a>
                ))}
              </div>

              {/* LANG SELECTOR */}
              <div className="hidden md:flex items-center gap-2">
                    {["es", "en", "bg"].map((lng) => (
                    <button
                        key={lng}
                        onClick={() => setLocale(lng)}
                        className={`
                    text-sm font-semibold px-2 py-1 rounded transition
                    ${
                            locale === lng
                                ? "bg-white text-black"
                                : "text-white/80 hover:text-white"
                        }
                  `}
                    >
                      {lng.toUpperCase()}
                    </button>
                ))}
              </div>

              {/* MOBILE BUTTON */}
              <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
              <div className="md:hidden">
                <div className="px-4 pt-4 pb-12 space-y-4 max-h-[80vh] overflow-y-auto">

                  {/* LANG MOBILE */}
                  <div className="flex justify-center gap-2">
                    {["es", "en", "bg"].map((lng) => (
                        <button
                            key={lng}
                            onClick={() => setLocale(lng)}
                            className={`px-3 py-1.5 text-sm rounded transition ${
                                locale === lng
                                    ? "bg-white text-black font-semibold"
                                    : "text-white/80 hover:text-white"
                            }`}
                        >
                          {lng.toUpperCase()}
                        </button>
                    ))}
                  </div>

                  <hr className="border-white/10" />

                  {navLinks.map((link) => (
                      <a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault()
                            setIsOpen(false)
                            setActiveLink(link.href)
                            onNavigate?.(link.href)
                          }}
                          className={`block text-center text-base font-semibold tracking-wide py-3 rounded-lg transition-all duration-300 ${
                              activeLink === link.href
                                  ? "bg-gradient-to-r from-[#ffde59] to-[#FF914D] bg-clip-text text-transparent bg-white/10"
                                  : "text-white/90 hover:bg-white/10"
                          }`}
                      >
                        {link.label}
                      </a>
                  ))}
                </div>
              </div>
          )}
        </div>
      </nav>
  )
}
