import "./GlowButton.css"
import { useTranslations } from "lib/i18n"

export default function GlowButton() {
    const t = useTranslations("Hero")

    return (
        <div className="glow-wrapper">
            <div className="glow-aura" />
            <div className="glow-border" />

            <button className="glow-button">
                <span>{t("cta")}</span>
                <span className="glow-shine" />
            </button>
        </div>
    )
}
