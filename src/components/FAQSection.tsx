import { useState, useMemo } from "react";
import { Plus, Minus } from "lucide-react";
import { HeroBackground } from "./hero/HeroBackground";
import NeuralStatic from "./hero/NeuralStatic";
import { useTranslations } from "lib/i18n";
import { JsonLd } from "lib/JsonLd";
import "./css/FAQSection.css";
import "./css/typography.css";

export function FAQSection() {
    const t = useTranslations("FAQ");
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = Array.from({ length: 6 }).map((_, i) => ({
        question: t(`items.${i}.question`),
        answer: t(`items.${i}.answer`),
    }));

    const faqSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    }), [faqs]);

    return (
        <section className="faq-section" id="faq">
            <JsonLd data={faqSchema} />
            <div className="faq-hero">
                <HeroBackground />
                <NeuralStatic />
                <div className="faq-hero-overlay" />

                <div className="faq-hero-content">
                    <h2 className="faq-hero-title">
                        <span>{t("title1")}</span>
                        <span className="hero-title-impulsa"> {t("title2")}</span>
                    </h2>

                    <p className="faq-hero-subtitle">{t("subtitle")}</p>
                </div>
            </div>

            <div className="faq-content-wrapper">
                <div className="faq-container">
                    <div className="faq-list">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`faq-item ${isOpen ? "active" : ""}`}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="faq-icon">
                                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                        </span>

                                        <span className="faq-question-text card-title">
                                            {faq.question}
                                        </span>

                                        <span className="faq-arrow">
                                            {isOpen ? "\u2303" : "\u2304"}
                                        </span>
                                    </button>

                                    <div className="faq-answer">
                                        <p className="text-body">{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
