import { useState, useEffect, useRef, type ReactNode } from "react"
import { ArrowUpRight, Globe, Zap, BarChart3 } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { useTranslations } from "lib/i18n"
import { DashboardPreview, DashboardMobilePreview } from "./DashboardPreview"
import { AIAutomationPreview, AIAutomationMobilePreview } from "./AIAutomationPreview"
import "./css/ProjectsSection.css"
import "./css/typography.css"

interface Project {
  id: number
  title: string
  category: string
  description: string
  icon: any
  type: string
  laptop: string
  mobile: string
  renderDesktop?: ReactNode
  renderMobile?: ReactNode
}

function DeviceMockup({ project }: { project: Project }) {
  return (
      <div key={project.id} className="projects-mockup projects-mockup-enter">
        <div className="projects-mockup-glow" />

        <div className="projects-laptop-wrap">
          <div className="projects-laptop-shell">
            <div className="projects-laptop-screen">
              <div className="projects-laptop-topbar">
                <div className="projects-dot projects-dot-red" />
                <div className="projects-dot projects-dot-yellow" />
                <div className="projects-dot projects-dot-green" />
              </div>

              <div className="projects-laptop-media">
                {project.renderDesktop ? (
                  <div style={{ position: "absolute", inset: 0 }}>
                    {project.renderDesktop}
                  </div>
                ) : project.type === "video" ? (
                    <video
                        src={project.laptop}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="projects-media-fit"
                    />
                ) : (
                    <img
                        src={project.laptop}
                        alt={project.type === "video" ? `Vista previa en ordenador de ${project.title}` : project.title}
                        loading="lazy"
                        className="projects-media-fit"
                    />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="projects-phone-wrap projects-phone-enter">
          <div className="projects-phone-shell">
            <div className="projects-phone-screen">
              {project.renderMobile ? (
                <div style={{ position: "absolute", inset: 0 }}>
                  {project.renderMobile}
                </div>
              ) : (
                <img
                    src={project.mobile}
                    alt={`Vista en móvil del proyecto ${project.title}`}
                    loading="lazy"
                    className="projects-media-fit"
                />
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

export function ProjectsSection() {
  const t = useTranslations("Projects")

  const projects = [
    {
      id: 1,
      title: "VG Detailing",
      category: t("projects.0.category"),
      description: t("projects.0.description"),
      icon: Globe,
      type: "video",
      laptop: "/images_webp/vgdetailing-laptop.webm",
      mobile: "/images_webp/vgdetailing-mobile.webp",
    },
    {
      id: 2,
      title: t("projects.1.title"),
      category: t("projects.1.category"),
      description: t("projects.1.description"),
      icon: Zap,
      type: "custom",
      laptop: "",
      mobile: "",
      renderDesktop: <AIAutomationPreview />,
      renderMobile: <AIAutomationMobilePreview />,
    },
    {
      id: 3,
      title: t("projects.2.title"),
      category: t("projects.2.category"),
      description: t("projects.2.description"),
      icon: BarChart3,
      type: "custom",
      laptop: "",
      mobile: "",
      renderDesktop: <DashboardPreview />,
      renderMobile: <DashboardMobilePreview />,
    },
  ]

  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const previewRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [hoverEnabled, setHoverEnabled] = useState(true)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title heading-h2">
              {t("title")} <span className="projects-title-gradient">{t("highlight")}</span>
            </h2>

            <p className="projects-subtitle">{t("subtitle")}</p>
          </div>

          <div className={`projects-content ${activeProject ? "projects-content-active" : "projects-content-idle"}`}>
            <div className={`projects-cards ${activeProject ? "projects-cards-stacked" : "projects-cards-inline"}`}>
              {projects.map((project) => {
                const isActive = activeProject?.id === project.id

                return (
                    <Card
                        key={project.id}
                        onMouseEnter={() => hoverEnabled && setActiveProject(project)}
                        onClick={() => {
                          setActiveProject(project)
                          setHoverEnabled(false)

                          if (isMobile) {
                            setTimeout(() => {
                              previewRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                            }, 100)
                          }
                        }}
                        className={`projects-card ${
                            activeProject ? "projects-card-full" : "projects-card-fixed"
                        } ${isActive ? "projects-card-active" : "projects-card-idle"}`}
                    >
                      <div className="projects-card-glow" />

                      <CardContent className="projects-card-content">
                        <div className="projects-icon-box">
                          <project.icon className="projects-icon" />
                        </div>

                        <span className="projects-category">{project.category}</span>

                        <h3 className="projects-card-title card-title">
                          <span className="projects-card-title-gradient">{project.title}</span>
                        </h3>

                        <p className="projects-description">{project.description}</p>

                        <div className="projects-card-footer">
                          <span className="projects-card-cta">{t("cta")}</span>
                          <ArrowUpRight className="projects-card-arrow" />
                        </div>
                      </CardContent>
                    </Card>
                )
              })}
            </div>

            {activeProject && (
                <div className="projects-preview" ref={previewRef}>
                  <DeviceMockup project={activeProject} />
                </div>
            )}
          </div>
        </div>
      </section>
  )
}
