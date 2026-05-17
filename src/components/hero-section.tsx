import "./css/hero.css"
import { HeroBackground } from "./hero/HeroBackground"
import GlowButton from "./hero/GlowButton"
import { HeroVisual } from "./hero/HeroVisual"
import NeuralStatic from "./hero/NeuralStatic"
import { useTranslations, useLocale } from "lib/i18n"

export function HeroSection({ onNavigate }: { onNavigate?: (path: string) => void }) {
    const t = useTranslations("Hero")
    const locale = useLocale()

    const isBulgarian = locale === "bg"

    return (
        <section className="hero-section">
            <div className="hero-top-gradient" />

            <HeroBackground />
            <NeuralStatic />
            <HeroVisual />

            <div className="hero-overlay" />

            <div className="hero-content">
                <h1 className={`hero-title ${isBulgarian ? "hero-title-bg" : ""}`}>
                    {t("line1")}{" "}
                    <span className="hero-title-system">
                        {t("highlight1")}
                    </span>{" "}
                    {t("line2")}{" "}
                    <span className="hero-title-impulsa">
                        {t("highlight2")}
                    </span>{" "}
                    {t("line3")}
                </h1>

                <p className="hero-subtitle">
                    {t("subtitle")}
                </p>

                <div className="hero-button-wrapper">
                    <span onClick={() => onNavigate?.(`/${locale}/formulario`)} className="cursor-pointer inline-block">
                        <GlowButton />
                    </span>
                </div>
            </div>
        </section>
    )
}
