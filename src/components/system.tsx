import "./css/system.css"
import "./css/typography.css"
import { FileText, ShieldCheck, Lock, Search, Globe, Bot, Workflow, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useTranslations } from "lib/i18n"
import { useInView } from "lib/useInView"
import { useState, type ReactNode, type FormEvent } from "react"
import emailjs from "@emailjs/browser"

function FadeInSection({
                           children,
                           delay = 0,
                       }: {
    children: ReactNode
    delay?: number
}) {
    const { ref, inView } = useInView()
    return (
        <div
            ref={ref}
            className="fade-in-section"
            data-visible={inView}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    )
}

export default function RoadmapSection() {
    const t = useTranslations("System")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (loading) return
        setLoading(true)
        setError("")
        setSuccess(false)
        try {
            await emailjs.send(
                "service_2678kdm",
                "template_0581m8i",
                {
                    nombre: "amigo/a",
                    email_destinatario: email,
                    pdf_url: "https://vmagencia.es/guide.pdf",
                    calendly_url: "https://calendly.com/vmmarketing-ia",
                    unsubscribe_url: "https://vmagencia.es",
                    preferences_url: "https://vmagencia.es",
                },
                { publicKey: "xq_pjdKNYGTk8OnpR" }
            )
            setSuccess(true)
            setEmail("")
        } catch (err) {
            setError(err instanceof Error ? err.message : JSON.stringify(err))
        } finally {
            setLoading(false)
        }
    }

    const steps = [
        {
            number: "1",
            title: t("steps.0.title"),
            description: t("steps.0.description"),
            bullets: [
                t("steps.0.bullets.0"),
                t("steps.0.bullets.1"),
                t("steps.0.bullets.2"),
                t("steps.0.bullets.3"),
            ],
            icon: Search,
            side: "right",
        },
        {
            number: "2",
            title: t("steps.1.title"),
            description: t("steps.1.description"),
            bullets: [
                t("steps.1.bullets.0"),
                t("steps.1.bullets.1"),
                t("steps.1.bullets.2"),
                t("steps.1.bullets.3"),
            ],
            icon: Globe,
            side: "left",
        },
        {
            number: "3",
            title: t("steps.2.title"),
            description: t("steps.2.description"),
            bullets: [
                t("steps.2.bullets.0"),
                t("steps.2.bullets.1"),
                t("steps.2.bullets.2"),
                t("steps.2.bullets.3"),
            ],
            icon: Workflow,
            side: "right",
        },
        {
            number: "4",
            title: t("steps.3.title"),
            description: t("steps.3.description"),
            bullets: [
                t("steps.3.bullets.0"),
                t("steps.3.bullets.1"),
                t("steps.3.bullets.2"),
                t("steps.3.bullets.3"),
            ],
            icon: Bot,
            side: "left",
        },
    ]

    return (
        <section className="roadmap-section">
            <div className="roadmap-bg">
                <div className="roadmap-glow roadmap-glow-purple" />
                <div className="roadmap-glow roadmap-glow-cyan" />
                <div className="roadmap-glow roadmap-glow-teal" />
                <div className="roadmap-glow roadmap-glow-orange" />
            </div>

            <div className="roadmap-container">
                <FadeInSection>
                    <div className="roadmap-heading">
                        <h2 className="roadmap-title heading-h2">
                            {t("title")} <span className="text-cyan">{t("highlight")}</span>
                        </h2>

                        <p className="roadmap-subtitle">
                            {t("subtitle")}
                        </p>
                    </div>
                </FadeInSection>

                <div className="roadmap-timeline-wrapper">
                    <div className="roadmap-line" />

                    <div className="roadmap-steps">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            const isLeft = step.side === "left"

                            return (
                                <FadeInSection key={step.number} delay={index * 0.08}>
                                    <div className="roadmap-step">
                                        <div className={`roadmap-step-content ${isLeft ? "content-left" : "content-right"}`}>
                                            <div className="roadmap-card">
                                                <div className="roadmap-card-header">
                                                    <div className="roadmap-icon">
                                                        <Icon size={28} strokeWidth={2.1} />
                                                    </div>

                                                    <h3 className="roadmap-card-title heading-h3">
                                                        {step.title}
                                                    </h3>
                                                </div>

                                                <p className="roadmap-card-description text-md">
                                                    {step.description}
                                                </p>

                                                <div className="roadmap-bullets">
                                                    {step.bullets.map((bullet) => (
                                                        <div className="roadmap-bullet" key={bullet}>
                                                            <span className="roadmap-bullet-dot" />
                                                            <span>{bullet}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="roadmap-step-empty" />
                                        <div className="roadmap-number">{step.number}</div>
                                    </div>
                                </FadeInSection>
                            )
                        })}
                    </div>
                </div>

                <FadeInSection>
                    <div className="roadmap-result-wrapper">
                        <div className="roadmap-result-card">

                            <h3 className="roadmap-lead-title">
                                {t("result.title")}
                                <br />
                                <span className="gradient-text">{t("result.highlight")}</span>
                            </h3>

                            <p className="roadmap-result-text">
                                {t("result.description")}
                            </p>

                            {success ? (
                                <div className="roadmap-form-success">
                                    <CheckCircle size={24} />
                                    <span>¡Revisa tu bandeja de entrada! Te hemos enviado la guía.</span>
                                </div>
                            ) : (
                                <form className="roadmap-form" onSubmit={handleSubmit}>
                                    <div className="roadmap-input-group">

                                        <div className="roadmap-input-icon">
                                            <svg width="18" height="18" fill="none">
                                                <path d="M2 4h14v10H2z" stroke="currentColor" strokeWidth="1.5"/>
                                                <path d="M2 4l7 6 7-6" stroke="currentColor" strokeWidth="1.5"/>
                                            </svg>
                                        </div>

                                        <input
                                            type="email"
                                            placeholder={t("result.placeholder")}
                                            className="roadmap-input"
                                            required
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            disabled={loading}
                                        />

                                        <button type="submit" className="roadmap-submit" disabled={loading}>
                                            {loading ? "Enviando..." : t("result.cta")}
                                            {loading ? (
                                                <Loader2 size={16} className="roadmap-spinner" />
                                            ) : (
                                                <ArrowRight size={16} />
                                            )}
                                        </button>
                                    </div>

                                    {error && (
                                        <div className="roadmap-form-error">
                                            <AlertCircle size={14} />
                                            <span>{error}</span>
                                        </div>
                                    )}
                                </form>
                            )}

                            <div className="roadmap-features">
                                <div className="feature">
                                    <FileText size={18}/>
                                    <span>{t("result.features.0")}</span>
                                </div>

                                <div className="feature">
                                    <ShieldCheck size={18}/>
                                    <span>{t("result.features.1")}</span>
                                </div>

                                <div className="feature">
                                    <Lock size={18}/>
                                    <span>{t("result.features.2")}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}
