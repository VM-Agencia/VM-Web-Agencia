import {
    AlertTriangle,
    Clock3,
    MessageCircleMore,
    SearchX,
    Globe2,
    Frown,
    Bot,
    Workflow,
    ChartNoAxesCombined,
    Sparkles,
    ArrowRight,
} from "lucide-react"
import { useTranslations } from "lib/i18n"
import { useInView } from "lib/useInView"
import "./css/typography.css"
import "./css/BusinessConversionSection.css"

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const { ref, inView } = useInView()
    return (
        <div
            ref={ref}
            className={`scroll-animate ${className}`}
            data-visible={inView}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    )
}

export default function BusinessConversionSection() {
    const t = useTranslations("Business")

    const chaosItems = [
        {
            icon: MessageCircleMore,
            title: t("chaos.items.0.title"),
            text: t("chaos.items.0.text"),
        },
        {
            icon: Clock3,
            title: t("chaos.items.1.title"),
            text: t("chaos.items.1.text"),
        },
        {
            icon: SearchX,
            title: t("chaos.items.2.title"),
            text: t("chaos.items.2.text"),
        },
        {
            icon: Globe2,
            title: t("chaos.items.3.title"),
            text: t("chaos.items.3.text"),
        },
    ]

    const solutionItems = [
        {
            icon: Bot,
            title: t("solution.items.0.title"),
            text: t("solution.items.0.text"),
        },
        {
            icon: Workflow,
            title: t("solution.items.1.title"),
            text: t("solution.items.1.text"),
        },
        {
            icon: ChartNoAxesCombined,
            title: t("solution.items.2.title"),
            text: t("solution.items.2.text"),
        },
        {
            icon: Sparkles,
            title: t("solution.items.3.title"),
            text: t("solution.items.3.text"),
        },
    ]

    return (
        <section className="business-conversion-section">
            <div className="business-conversion-bg">
                <div className="business-conversion-glow business-conversion-glow-left" />
                <div className="business-conversion-glow business-conversion-glow-right" />
                <div className="business-conversion-grid" />
            </div>

            <div className="business-conversion-container">
                <div className="business-conversion-header">
                    <AnimatedSection className="business-conversion-eyebrow">
                        <AlertTriangle size={16} />
                        <span>{t("eyebrow")}</span>
                    </AnimatedSection>

                    <AnimatedSection delay={0.12}>
                        <h2 className="business-conversion-title heading-h2">
                            <span>{t("title")}</span>
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.24}>
                        <p className="business-conversion-subtitle">
                            {t("subtitle")}
                        </p>
                    </AnimatedSection>
                </div>

                <div className="business-conversion-main">
                    <AnimatedSection className="business-panel business-panel-chaos" delay={0.1}>
                        <div className="business-panel-top">
                            <div className="business-panel-badge business-panel-badge-chaos">
                                <Frown size={16} />
                                <span>{t("chaos.badge")}</span>
                            </div>

                            <h3 className="business-panel-title heading-h3">
                                {t("chaos.title")}
                            </h3>

                            <p className="business-panel-description">
                                {t("chaos.description")}
                            </p>
                        </div>

                        <div className="business-points">
                            {chaosItems.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <AnimatedSection className="business-point business-point-chaos" key={item.title} delay={index * 0.08}>
                                        <div className="business-point-icon">
                                            <Icon size={20} />
                                        </div>
                                        <div className="business-point-content">
                                            <h4 className="card-title">{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </AnimatedSection>

                    <div className="business-conversion-divider">
                        <div className="business-conversion-divider-line" />
                        <div className="business-conversion-divider-center">
                            <ArrowRight size={18} />
                        </div>
                        <div className="business-conversion-divider-line" />
                    </div>

                    <AnimatedSection className="business-panel business-panel-solution" delay={0.2}>
                        <div className="business-panel-top">
                            <div className="business-panel-badge business-panel-badge-solution">
                                <Sparkles size={16} />
                                <span>{t("solution.badge")}</span>
                            </div>

                            <h3 className="business-panel-title heading-h3">
                                {t("solution.title")}
                            </h3>

                            <p className="business-panel-description">
                                {t("solution.description")}
                            </p>
                        </div>

                        <div className="business-points">
                            {solutionItems.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <AnimatedSection className="business-point business-point-solution" key={item.title} delay={index * 0.08}>
                                        <div className="business-point-icon">
                                            <Icon size={20} />
                                        </div>
                                        <div className="business-point-content">
                                            <h4 className="card-title">{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
