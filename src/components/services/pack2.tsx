import {
    Check,
    Wrench,
    Search,
    Share2,
    TrendingUp,
    MessageCircle,
    Clock,
    Zap,
    MapPin,
    Layout,
    Phone,
    Globe,
    Star,
} from "lucide-react";

import "../css/ServicePackOne.css";
import "../css/ServicePackTwo.css";
import "../css/typography.css";
import { useLocale, useTranslations } from "lib/i18n";
import { JsonLd } from "lib/JsonLd";
import { useMemo } from "react";

export function ServicePackTwo({ onNavigate }: { onNavigate?: (path: string) => void }) {
    const t = useTranslations("Pack2");
    const locale = useLocale();
    const priceValue = t("price.value").replace(/[^\d,]/g, "").replace(",", ".");

    const serviceSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Pack 2 - ${t("title")} ${t("highlight")}`,
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
            { "@type": "ListItem", "position": 3, "name": "Pack 2", "item": "https://vmagencia.es/services/pack2" },
        ],
    }), []);

    const vsGoogleItems = [0,1,2,3].map(i => t(`vsGoogle.items.${i}`));
    const vsMetaItems = [0,1,2,3].map(i => t(`vsMeta.items.${i}`));

    return (
        <section className="service-pack-section pack-2">
            <JsonLd data={serviceSchema} />
            <JsonLd data={breadcrumbSchema} />
            <div className="service-pack-container">

                <div className="service-hero">
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 2</span>

                        <h2 className="service-title heading-h2">
                            {t("title")} <span>{t("highlight")}</span>
                        </h2>

                        <p className="service-description text-body">
                            {t("description")}
                        </p>

                    </div>

                    <div className="service-image">
                        <img src="/images_webp/captacion.webp" alt={t("imageAlt")} loading="lazy" />
                    </div>
                </div>

                <div className="p2-content">
                    <h2 className="heading-h2">
                        {t("vsGoogleOrMeta")} <span>{t("vsGoogleOrMetaHighlight")}</span> {t("vsGoogleOrMetaEnd")}
                    </h2>

                    <div className="p2-compare">
                        <div className="p2-platform google">
                            <div className="p2-platform-header">
                                <Search />
                                <h3>{t("vsGoogle.title")}</h3>
                            </div>
                            <ul>
                                {vsGoogleItems.map((item, i) => (
                                    <li key={i}><Check size={14} /> {item}</li>
                                ))}
                            </ul>
                            <div className="p2-metric">
                                <span>{t("vsGoogle.metric")}</span>
                                <strong>{t("vsGoogle.value")}</strong>
                            </div>
                        </div>

                        <div className="p2-divider">VS</div>

                        <div className="p2-platform meta">
                            <div className="p2-platform-header">
                                <Share2 />
                                <h3>{t("vsMeta.title")}</h3>
                            </div>
                            <ul>
                                {vsMetaItems.map((item, i) => (
                                    <li key={i}><Check size={14} /> {item}</li>
                                ))}
                            </ul>
                            <div className="p2-metric">
                                <span>{t("vsMeta.metric")}</span>
                                <strong>{t("vsMeta.value")}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="p2-roi-card">
                        <div className="p2-roi-header">
                            <TrendingUp />
                            <h3>{t("vsRoi.title")}</h3>
                        </div>
                        <div className="p2-roi-formula">
                            <div className="p2-roi-item">
                                <small>{t("vsRoi.items.0.label")}</small>
                                <strong>{t("vsRoi.items.0.value")}</strong>
                            </div>
                            <span className="p2-roi-op">&times;</span>
                            <div className="p2-roi-item">
                                <small>{t("vsRoi.items.1.label")}</small>
                                <strong>{t("vsRoi.items.1.value")}</strong>
                            </div>
                            <span className="p2-roi-op">&times;</span>
                            <div className="p2-roi-item">
                                <small>{t("vsRoi.items.2.label")}</small>
                                <strong>{t("vsRoi.items.2.value")}</strong>
                            </div>
                            <span className="p2-roi-op">=</span>
                            <div className="p2-roi-item highlight">
                                <small>{t("vsRoi.investmentLabel")}</small>
                                <strong>{t("vsRoi.investmentValue")}</strong>
                            </div>
                        </div>
                        <div className="p2-roi-result">
                            <p>{t("vsRoi.result")}</p>
                            <div className="p2-roi-badge">{t("vsRoi.badge")}</div>
                        </div>
                    </div>

                    <div className="p2-whatsapp">
                        <div className="p2-whatsapp-header">
                            <MessageCircle />
                            <h3>{t("whatsapp.title")}</h3>
                        </div>
                        <p className="p2-whatsapp-desc">{t("whatsapp.desc")}</p>
                        <div className="p2-wa-features">
                            <div className="p2-wa-feature">
                                <span className="p2-wa-f-icon greeting"><MessageCircle size={18} /></span>
                                <div>
                                    <strong>{t("whatsapp.features.0.title")}</strong>
                                    <p>{t("whatsapp.features.0.desc")}</p>
                                </div>
                            </div>
                            <div className="p2-wa-feature">
                                <span className="p2-wa-f-icon away"><Clock size={18} /></span>
                                <div>
                                    <strong>{t("whatsapp.features.1.title")}</strong>
                                    <p>{t("whatsapp.features.1.desc")}</p>
                                </div>
                            </div>
                            <div className="p2-wa-feature">
                                <span className="p2-wa-f-icon quick"><Zap size={18} /></span>
                                <div>
                                    <strong>{t("whatsapp.features.2.title")}</strong>
                                    <p>{t("whatsapp.features.2.desc")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p2-previews-row">
                        <div className="p2-gbp">
                            <div className="p2-whatsapp-header">
                                <MapPin />
                                <h3>{t("gbp.title")}</h3>
                            </div>
                            <p className="p2-whatsapp-desc">{t("gbp.desc")}</p>
                            <div className="p2-gbp-preview">
                                <div className="p2-gbp-stars">
                                    <Star size={14} fill="#eab308" color="#eab308" />
                                    <Star size={14} fill="#eab308" color="#eab308" />
                                    <Star size={14} fill="#eab308" color="#eab308" />
                                    <Star size={14} fill="#eab308" color="#eab308" />
                                    <Star size={14} fill="#eab308" color="#eab308" />
                                    <span>4.8 (123)</span>
                                </div>
                                <h4 className="p2-gbp-name">{t("gbp.preview.name")}</h4>
                                <p className="p2-gbp-category">{t("gbp.preview.category")}</p>
                                <div className="p2-gbp-divider" />
                                <div className="p2-gbp-info">
                                    <span><MapPin size={14} /> {t("gbp.preview.address")}</span>
                                    <span><Clock size={14} /> {t("gbp.preview.hours")}</span>
                                </div>
                                <div className="p2-gbp-actions">
                                    <span className="p2-gbp-btn"><Phone size={14} /> {t("gbp.preview.call")}</span>
                                    <span className="p2-gbp-btn"><Globe size={14} /> {t("gbp.preview.website")}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p2-landing">
                            <div className="p2-whatsapp-header">
                                <Layout />
                                <h3>{t("landing.title")}</h3>
                            </div>
                            <p className="p2-whatsapp-desc">{t("landing.desc")}</p>
                            <div className="p2-landing-preview">
                                <div className="p2-landing-bar">
                                    <span className="p2-landing-dot" />
                                    <span className="p2-landing-dot" />
                                    <span className="p2-landing-dot" />
                                </div>
                                <div className="p2-landing-body">
                                    <div className="p2-landing-hero-glow" />
                                    <h4 className="p2-landing-title">{t("landing.preview.title")}</h4>
                                    <p className="p2-landing-sub">{t("landing.preview.subtitle")}</p>
                                    <div className="p2-landing-form">
                                        <div className="p2-landing-field">
                                            <span className="p2-landing-placeholder">{t("landing.preview.nameField")}</span>
                                        </div>
                                        <div className="p2-landing-field">
                                            <span className="p2-landing-placeholder">{t("landing.preview.emailField")}</span>
                                        </div>
                                        <div className="p2-landing-cta">{t("landing.preview.cta")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p2-price-wrap">
                    <aside className="service-price-card">
                        <span>PACK 2</span>
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
