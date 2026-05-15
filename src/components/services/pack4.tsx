import {
    Layout,
    TrendingUp,
    Bot,
    AppWindow,
    BarChart3,
    Check,
    Sparkles,
    Wrench,
} from "lucide-react";

import "../css/ServicePackOne.css";
import "../css/ServicePackTwo.css";
import "../css/ServicePackFour.css";
import "../css/typography.css";
import { useLocale, useTranslations } from "lib/i18n";
import { JsonLd } from "lib/JsonLd";
import { useMemo } from "react";
import { useInView } from "lib/useInView";

export function ServicePackFour({ onNavigate }: { onNavigate?: (path: string) => void }) {
    const t = useTranslations("Pack4");
    const locale = useLocale();
    const priceValue = t("price.value").replace(/[^\d,]/g, "").replace(",", ".");
    const { ref: compositionRef, inView } = useInView();

    const serviceSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Pack 4 - ${t("title")} ${t("highlight")}`,
        "description": t("description"),
        "provider": { "@type": "Organization", "name": "VM Agency" },
        "offers": {
            "@type": "Offer",
            "price": priceValue,
            "priceCurrency": "EUR",
        },
    }), [t, priceValue]);

    const breadcrumbSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://vmagencia.es" },
            { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://vmagencia.es/#servicios" },
            { "@type": "ListItem", "position": 3, "name": "Pack 4", "item": "https://vmagencia.es/services/pack4" },
        ],
    }), []);

    return (
        <section className="service-pack-section pack-4">
            <JsonLd data={serviceSchema} />
            <JsonLd data={breadcrumbSchema} />
            <div className="service-pack-container">

                    <div className="service-hero">
                    <div className="service-hero-content">
                        <span className="service-badge pack-4-badge">PACK 4 <Sparkles /></span>

                        <h2 className="service-title heading-h2">
                            {t("title")} <span>{t("highlight")}</span>
                        </h2>

                        <p className="service-description text-body">
                            {t("description")}
                        </p>

                        <div className="p4-badges">
                            <span className="p4-badge"><Layout /> Web</span>
                            <span className="p4-badge"><TrendingUp /> Captación</span>
                            <span className="p4-badge"><Bot /> Automatización</span>
                            <span className="p4-badge"><BarChart3 /> Analítica</span>
                            <span className="p4-badge p4-badge-premium"><Sparkles /> App + Soporte</span>
                        </div>
                    </div>

                    <div className="service-image">
                        <img src="/images_webp/analisis.webp" alt={t("imageAlt")} loading="lazy" />
                    </div>
                </div>

                <div className={`p4-composition ${inView ? 'p4-building' : ''}`} ref={compositionRef}>
                            <div className="p4-comp-stack">
                                <div className="p4-comp-layer p4-layer-1">
                                    <span className="p4-layer-num" style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)' }}>1</span>
                                    <div className="p4-layer-body">
                                        <Layout className="p4-layer-icon" style={{ color: '#0891b2' }} />
                                        <span className="p4-layer-text">{t("composition.packs.0")}</span>
                                    </div>
                                    <div className="p4-layer-conn">
                                        <span className="p4-conn-dot" />
                                        <span className="p4-conn-dot" />
                                        <span className="p4-conn-dot" />
                                    </div>
                                </div>
                                <div className="p4-comp-layer p4-layer-2">
                                    <span className="p4-layer-num" style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)' }}>2</span>
                                    <div className="p4-layer-body">
                                        <TrendingUp className="p4-layer-icon" style={{ color: '#3b82f6' }} />
                                        <span className="p4-layer-text">{t("composition.packs.1")}</span>
                                    </div>
                                    <div className="p4-layer-conn">
                                        <span className="p4-conn-dot" />
                                        <span className="p4-conn-dot" />
                                        <span className="p4-conn-dot" />
                                    </div>
                                </div>
                                <div className="p4-comp-layer p4-layer-3">
                                    <span className="p4-layer-num" style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)' }}>3</span>
                                    <div className="p4-layer-body">
                                        <Bot className="p4-layer-icon" style={{ color: '#7c3aed' }} />
                                        <span className="p4-layer-text">{t("composition.packs.2")}</span>
                                    </div>
                                    <div className="p4-layer-conn">
                                        <span className="p4-conn-dot" />
                                        <span className="p4-conn-dot" />
                                        <span className="p4-conn-dot" />
                                    </div>
                                </div>
                                <div className="p4-comp-layer p4-layer-extra">
                                    <span className="p4-layer-num" style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)' }}>+</span>
                                    <div className="p4-layer-body">
                                        <Sparkles className="p4-layer-icon" style={{ color: '#d97706' }} />
                                        <span className="p4-layer-text">{t("composition.extra")}</span>
                                    </div>
                                    <div className="p4-layer-conn p4-layer-eq">
                                        <span className="p4-conn-line-eq" />
                                    </div>
                                </div>
                                <div className="p4-comp-result">
                                    <Sparkles className="p4-result-icon" />
                                    <span>{t("composition.result")}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p4-showcase">
                            <div className="p4-sc-card">
                                <div className="p4-sc-visual p4-sc-phone">
                                    <div className="p4-phone-frame">
                                        <div className="p4-phone-notch" />
                                        <div className="p4-phone-screen">
                                            <div className="p4-phone-app"><AppWindow /></div>
                                            <div className="p4-phone-lines">
                                                <span /><span /><span />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="p4-sc-label">{t("composition.extraVisual.0")}</span>
                            </div>

                            <div className="p4-sc-card">
                                <div className="p4-sc-visual p4-sc-chart">
                                    <div className="p4-chart-bars">
                                        <div className="p4-cbar" style={{ '--h': '35%' } as React.CSSProperties} />
                                        <div className="p4-cbar" style={{ '--h': '70%' } as React.CSSProperties} />
                                        <div className="p4-cbar" style={{ '--h': '50%' } as React.CSSProperties} />
                                        <div className="p4-cbar" style={{ '--h': '90%' } as React.CSSProperties} />
                                        <div className="p4-cbar" style={{ '--h': '60%' } as React.CSSProperties} />
                                    </div>
                                </div>
                                <span className="p4-sc-label">{t("composition.extraVisual.1")}</span>
                            </div>

                            <div className="p4-sc-card">
                                <div className="p4-sc-visual p4-sc-nums">
                                    <div className="p4-sc-metric">
                                        <strong className="p4-sc-val">+47%</strong>
                                        <small className="p4-sc-desc">{t("features.4.title")}</small>
                                    </div>
                                    <div className="p4-sc-metric">
                                        <strong className="p4-sc-val">12.5k</strong>
                                        <small className="p4-sc-desc">visitas</small>
                                    </div>
                                    <div className="p4-sc-metric">
                                        <strong className="p4-sc-val">98%</strong>
                                        <small className="p4-sc-desc">uptime</small>
                                    </div>
                                </div>
                                <span className="p4-sc-label">{t("composition.extraVisual.2")}</span>
                            </div>

                            <div className="p4-sc-card">
                                <div className="p4-sc-visual p4-sc-support">
                                    <div className="p4-sc-chat">
                                        <div className="p4-sc-msg p4-sc-msg-user">¿Consultas?</div>
                                        <div className="p4-sc-msg p4-sc-msg-bot">24/7 automático</div>
                                        <div className="p4-sc-typing">
                                            <span /><span /><span />
                                        </div>
                                    </div>
                                </div>
                                <span className="p4-sc-label">{t("composition.extraVisual.3")}</span>
                            </div>
                        </div>

                <div className="p4-price-row">
                    <aside className="service-price-card p4-price-h">
                        <div className="p4-price-h-left">
                            <span>PACK 4</span>
                            <h2 className="heading-h3">{t("price.title")}</h2>
                            <ul>
                                <li><Check /> {t("price.points.0")}</li>
                                <li><Check /> {t("price.points.1")}</li>
                                <li><Check /> {t("price.points.2")}</li>
                            </ul>
                        </div>
                        <div className="p4-price-h-right">
                            <div className="service-price">
                                <small>{t("price.from")}</small>
                                <strong>{t("price.value")}</strong>
                                <small>{t("price.type")}</small>
                            </div>
                            <button onClick={() => onNavigate?.(`/${locale}/formulario`)} className="service-main-button" style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}>
                                {t("price.cta")}
                            </button>
                            <p className="service-note">{t("price.note")}</p>
                        </div>
                    </aside>
                </div>

                <div className="maintenance-banner">
                    <div className="mb-icon"><Wrench /></div>
                    <div className="mb-content">
                        <h3>{t("maintenanceBanner.title")}</h3>
                        <p>{t("maintenanceBanner.desc")}</p>
                    </div>
                    <button onClick={() => onNavigate?.(`/${locale}/formulario`)} className="mb-cta">{t("maintenanceBanner.cta")}</button>
                </div>

            </div>
        </section>
    );
}
