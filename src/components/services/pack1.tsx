import {
    Layout,
    Search,
    Zap,
    Smartphone,
    PenLine,
    ShieldCheck,
    Check,
    ChevronRight,
    Wrench,
} from "lucide-react";

import "../css/ServicePackOne.css";
import "../css/typography.css";
import { useLocale, useTranslations } from "lib/i18n";
import { JsonLd } from "lib/JsonLd";
import { useMemo, useState } from "react";

export function ServicePackOne({ onNavigate }: { onNavigate?: (path: string) => void }) {
    const t = useTranslations("Pack1");
    const locale = useLocale();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const priceValue = t("price.value").replace(/[^\d,]/g, "").replace(",", ".");

    const serviceSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Pack 1 - ${t("title")} ${t("highlight")}`,
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
            { "@type": "ListItem", "position": 3, "name": "Pack 1", "item": "https://vmagencia.es/services/pack1" },
        ],
    }), []);

    const features = [
        {
            icon: Layout,
            title: t("features.0.title"),
            text: t("features.0.text"),
        },
        {
            icon: Search,
            title: t("features.1.title"),
            text: t("features.1.text"),
        },
        {
            icon: Zap,
            title: t("features.2.title"),
            text: t("features.2.text"),
        },
        {
            icon: Smartphone,
            title: t("features.3.title"),
            text: t("features.3.text"),
        },
        {
            icon: PenLine,
            title: t("features.4.title"),
            text: t("features.4.text"),
        },
        {
            icon: ShieldCheck,
            title: t("features.5.title"),
            text: t("features.5.text"),
        },
    ];

    return (
        <section className="service-pack-section pack-1">
            <JsonLd data={serviceSchema} />
            <JsonLd data={breadcrumbSchema} />
            <div className="service-pack-container">
                <div className="service-hero">
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 1</span>

                        <h2 className="service-title heading-h2">
                            {t("title")} <span>{t("highlight")}</span>
                        </h2>

                        <p className="service-description text-body">
                            {t("description")}
                        </p>
                    </div>

                    <div className="service-mockup">
                        <div className="service-laptop">
                            <div className="service-screen">
                                <div className="mockup-nav">
                                    <div className="mockup-logo">
                                        <div className="mockup-logo-dot pulse" />
                                        <strong>{t("mockup.business")}</strong>
                                    </div>
                                    <span>{t("mockup.nav.home")}</span>
                                    <span>{t("mockup.nav.services")}</span>
                                    <span>{t("mockup.nav.contact")}</span>
                                </div>

                                <div className="mockup-layout">
                                    <div className="mockup-hero-area">
                                        <div className="mockup-chip">{t("title")} <span>{t("highlight")}</span></div>
                                        <h3 className="mockup-headline">
                                            <span>{t("mockup.titleHighlight")}</span> {t("mockup.title")}
                                        </h3>
                                        <p className="mockup-subtext">{t("mockup.subtitle")}</p>
                                        <div className="mockup-pills">
                                            <span className="pill pill-web"><div className="pill-dot" /> Web</span>
                                            <span className="pill pill-seo"><div className="pill-dot" /> SEO</span>
                                            <span className="pill pill-copy"><div className="pill-dot" /> Copy</span>
                                        </div>
                                        <button className="mockup-cta shimmer">{t("mockup.cta")} <ChevronRight /></button>
                                    </div>
                                    <div className="mockup-visual-area">
                                        <div className="mva-shape s1 float-delay-1" />
                                        <div className="mva-shape s2 float-delay-2" />
                                        <div className="mva-shape s3 float-delay-3" />
                                    </div>
                                </div>

                                <div className="mockup-features-bar">
                                    <div className="mfb-item">
                                        <div className="mfb-icon" />
                                        <div>
                                            <strong>{t("features.0.title")}</strong>
                                            <span>{t("features.0.text")}</span>
                                        </div>
                                    </div>
                                    <div className="mfb-item">
                                        <div className="mfb-icon" />
                                        <div>
                                            <strong>{t("features.1.title")}</strong>
                                            <span>{t("features.1.text")}</span>
                                        </div>
                                    </div>
                                    <div className="mfb-item">
                                        <div className="mfb-icon" />
                                        <div>
                                            <strong>{t("features.4.title")}</strong>
                                            <span>{t("features.4.text")}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mockup-footer-bar">
                                    <span>© 2025 {t("mockup.business")}</span>
                                    <span>{t("mockup.nav.home")} · {t("mockup.nav.services")} · {t("mockup.nav.contact")}</span>
                                </div>
                            </div>
                        </div>

                        <div className="service-phone">
                            <div className="phone-screen">
                                <div className="phone-status" />
                                <div className="phone-mockup-content">
                                    <div className="phone-chip">{t("title")}</div>
                                    <h4><span>{t("mockup.titleHighlight")}</span> {t("mockup.title")}</h4>
                                    <p>{t("mockup.mobileText")}</p>
                                    <div className="phone-pills">
                                        <div className="p-pill" />
                                        <div className="p-pill" />
                                        <div className="p-pill" />
                                    </div>
                                    <div className="phone-cta-bar">{t("mockup.contact")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-content-grid">

                    <div className="service-includes">
                        <h2 className="heading-h2">
                            {t("includes")} <span>{t("includesHighlight")}?</span>
                        </h2>

                        <div className="service-accordion">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                const isOpen = openIndex === index;
                                return (
                                    <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={index}>
                                        <button
                                            className="accordion-header"
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                        >
                                            <span className={`feature-icon feature-icon-${index + 1}`}>
                                                <Icon />
                                            </span>
                                            <span className="accordion-title">{feature.title}</span>
                                            <span className="accordion-arrow">+</span>
                                        </button>
                                        <div className="accordion-content">
                                            <p className="text-body">{feature.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <aside className="service-price-card">
                        <span>PACK 1</span>
                        <h2 className="heading-h3">{t("price.title")}</h2>

                        <ul>
                            <li><Check /> {t("price.points.0")}</li>
                            <li><Check /> {t("price.points.1")}</li>
                            <li><Check /> {t("price.points.2")}</li>
                        </ul>

                        <div className="service-price">
                            <small>{t("price.from")}</small>
                            <strong>{t("price.value")}</strong>
                            <small>{t("price.type")}</small>
                        </div>

                        <button onClick={() => onNavigate?.(`/${locale}/formulario`)} className="service-main-button" style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}>
                            {t("price.cta")}
                        </button>

                        <p className="service-note">{t("price.note")}</p>
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
