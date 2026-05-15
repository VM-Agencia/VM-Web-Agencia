import {
    Bot,
    Check,
    Zap,
    Sparkles,
    Wrench,
    ArrowRight,
    Clock,
    BrainCircuit,
    MessageCircle,
    Globe,
    Mail,
    Users,
    Send,
} from "lucide-react";

import "../css/ServicePackOne.css";
import "../css/ServicePackTwo.css";
import "../css/ServicePackThree.css";
import "../css/typography.css";
import { useLocale, useTranslations } from "lib/i18n";
import { JsonLd } from "lib/JsonLd";
import { useMemo, useState, useEffect, useRef } from "react";

export function ServicePackThree({ onNavigate }: { onNavigate?: (path: string) => void }) {
    const t = useTranslations("Pack3");
    const locale = useLocale();
    const [activeScenario, setActiveScenario] = useState(0);
    const [processRunning, setProcessRunning] = useState(false);
    const [activeLane, setActiveLane] = useState(-1);
    const [activeStep, setActiveStep] = useState<'idle' | 'input' | 'ai' | 'output' | 'done'>('idle');
    const cancelRef = useRef(false);
    const [demoMessages, setDemoMessages] = useState<Array<{ from: 'user' | 'bot'; text: string }>>([]);
    const [demoInput, setDemoInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const demoMsgsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!processRunning) {
            setActiveLane(-1);
            setActiveStep('idle');
            return;
        }

        cancelRef.current = false;

        const run = async () => {
            while (!cancelRef.current) {
                for (let lane = 0; lane < 3; lane++) {
                    if (cancelRef.current) return;
                    setActiveLane(lane);
                    setActiveStep('input');
                    await new Promise(r => setTimeout(r, 750));
                    if (cancelRef.current) return;
                    setActiveStep('ai');
                    await new Promise(r => setTimeout(r, 750));
                    if (cancelRef.current) return;
                    setActiveStep('output');
                    await new Promise(r => setTimeout(r, 750));
                    if (cancelRef.current) return;
                    setActiveStep('done');
                    await new Promise(r => setTimeout(r, 350));
                }
            }
        };

        run();

        return () => { cancelRef.current = true; };
    }, [processRunning]);

    function getLanePhase(index: number): 'idle' | 'input' | 'ai' | 'output' | 'done' {
        if (!processRunning || activeLane === -1 || index > activeLane) return 'idle';
        if (index < activeLane) return 'done';
        return activeStep;
    }

    const demoResponses = useMemo(() => ({
        greeting: t("demo.responses.greeting"),
        price: t("demo.responses.price"),
        whatsapp: t("demo.responses.whatsapp"),
        how: t("demo.responses.how"),
        features: t("demo.responses.features"),
        thanks: t("demo.responses.thanks"),
        default: t("demo.responses.default"),
    }), [t]);

    const quickReplies = useMemo(() => [
        t("demo.quickReplies.0"),
        t("demo.quickReplies.1"),
        t("demo.quickReplies.2"),
        t("demo.quickReplies.3"),
    ], [t]);

    function handleSend(text?: string) {
        const msg = (text || demoInput).trim();
        if (!msg) return;

        if (demoMessages.length === 0) {
            setDemoMessages([{ from: 'bot', text: t("demo.greeting") }]);
        }

        setDemoMessages(prev => [...prev, { from: 'user', text: msg }]);
        setDemoInput('');
        setIsTyping(true);

        const response = getBotResponse(msg);
        setTimeout(() => {
            setIsTyping(false);
            setDemoMessages(prev => [...prev, { from: 'bot', text: response }]);
        }, 900 + Math.random() * 600);
    }

    function getBotResponse(input: string): string {
        const lower = input.toLowerCase();
        if (lower.includes('hola') || lower.includes('buenas') || lower.includes('hey') || lower.includes('hello') || lower.includes('hi'))
            return demoResponses.greeting;
        if (lower.includes('precio') || lower.includes('cuesta') || lower.includes('cost') || lower.includes('vale') || lower.includes('1299') || lower.includes('cuanto') || lower.includes('price'))
            return demoResponses.price;
        if (lower.includes('whatsapp') || lower.includes('wasap'))
            return demoResponses.whatsapp;
        if (lower.includes('funciona') || lower.includes('como') || lower.includes('cómo') || lower.includes('work') || lower.includes('how'))
            return demoResponses.how;
        if (lower.includes('incluye') || lower.includes('incluido') || lower.includes('include') || lower.includes('what'))
            return demoResponses.features;
        if (lower.includes('gracias') || lower.includes('thanks') || lower.includes('thank'))
            return demoResponses.thanks;
        return demoResponses.default;
    }

    useEffect(() => {
        if (demoMsgsRef.current) {
            demoMsgsRef.current.scrollTop = demoMsgsRef.current.scrollHeight;
        }
    }, [demoMessages, isTyping]);

    const priceValue = t("price.value").replace(/[^\d,]/g, "").replace(",", ".");

    const serviceSchema = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Pack 3 - ${t("title")} ${t("highlight")}`,
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
            { "@type": "ListItem", "position": 3, "name": "Pack 3", "item": "https://vmagencia.es/services/pack3" },
        ],
    }), []);

    const scenarios = [
        t("scenarios.0.label"),
        t("scenarios.1.label"),
        t("scenarios.2.label"),
    ];

    const chatMessages = [
        { from: "client" as const, text: t(`scenarios.${activeScenario}.messages.0.client`) },
        { from: "bot" as const, text: t(`scenarios.${activeScenario}.messages.0.bot`) },
        { from: "client" as const, text: t(`scenarios.${activeScenario}.messages.1.client`) },
        { from: "bot" as const, text: t(`scenarios.${activeScenario}.messages.1.bot`) },
        { from: "client" as const, text: t(`scenarios.${activeScenario}.messages.2.client`) },
        { from: "bot" as const, text: t(`scenarios.${activeScenario}.messages.2.bot`) },
    ];

    const chatStats = [
        { icon: Clock, text: t("chatStats.0") },
        { icon: Zap, text: t("chatStats.1") },
        { icon: Check, text: t("chatStats.2") },
    ];

    const processLanes = [
        { inputIcon: MessageCircle, inputLabel: t("process.lanes.0.input"), aiLabel: t("process.lanes.0.ai"), outputIcon: Check, outputLabel: t("process.lanes.0.output") },
        { inputIcon: Globe, inputLabel: t("process.lanes.1.input"), aiLabel: t("process.lanes.1.ai"), outputIcon: Users, outputLabel: t("process.lanes.1.output") },
        { inputIcon: Mail, inputLabel: t("process.lanes.2.input"), aiLabel: t("process.lanes.2.ai"), outputIcon: Clock, outputLabel: t("process.lanes.2.output") },
    ];

    return (
        <section className="service-pack-section pack-3">
            <JsonLd data={serviceSchema} />
            <JsonLd data={breadcrumbSchema} />
            <div className="service-pack-container">

                <div className="service-hero">
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 3</span>

                        <h2 className="service-title heading-h2">
                            {t("title")} <span>{t("highlight")}</span>
                        </h2>

                        <p className="service-description text-body">
                            {t("description")}
                        </p>

                        <div className="p3-badges">
                            <span className="p3-badge"><Zap /> 24/7 Automatizado</span>
                            <span className="p3-badge"><Bot /> Sin intervención</span>
                            <span className="p3-badge"><Sparkles /> IA Integrada</span>
                        </div>
                    </div>

                    <div className="service-image">
                        <img src="/images_webp/automatizaciones_ia.webp" alt={t("imageAlt")} loading="lazy" />
                        <div className="p3-chat">
                            <div className="p3-chat-header">
                                <Bot /> Asistente IA
                            </div>
                            <div className="p3-chat-body">
                                <div className="p3-msg p3-msg-client">¿Disponibilidad?</div>
                                <div className="p3-typing">
                                    <span className="p3-dot" />
                                    <span className="p3-dot" />
                                    <span className="p3-dot" />
                                </div>
                                <div className="p3-msg p3-msg-bot">¡Claro! Te atiendo ahora mismo 😊</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p3-content">

                    <div className="p3-chat-showcase">
                        <div className="p3-chat-phone">
                            <div className="p3-chat-phone-header">
                                <div className="p3-chat-avatar"><Bot /></div>
                                <span className="p3-chat-name">{t("chatName")}</span>
                                <span className="p3-chat-status">
                                    <span className="p3-status-dot" />
                                    {t("chatOnline")}
                                </span>
                            </div>

                            <div className="p3-chat-conversation" key={activeScenario}>
                                {chatMessages.map((msg, i) => (
                                    <div key={i} className={`p3-chat-msg ${msg.from}`}>
                                        {msg.text}
                                    </div>
                                ))}
                            </div>

                            <div className="p3-chat-input">
                                <div className="p3-chat-input-field">{t("chatPlaceholder")}</div>
                                <div className="p3-chat-input-btn"><ArrowRight /></div>
                            </div>
                        </div>

                        <div className="p3-chat-info">
                            <h3 className="p3-chat-info-title">
                                {t("chatTitle")} <span>{t("chatHighlight")}</span>
                            </h3>
                            <p className="p3-chat-info-desc">{t("chatDesc")}</p>

                            <div className="p3-scenario-tabs">
                                {scenarios.map((label, i) => (
                                    <button
                                        key={i}
                                        className={`p3-scenario-tab ${i === activeScenario ? "active" : ""}`}
                                        onClick={() => setActiveScenario(i)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            <div className="p3-chat-stats">
                                {chatStats.map((stat, i) => {
                                    const StatIcon = stat.icon;
                                    return (
                                        <span key={i} className="p3-chat-stat">
                                            <StatIcon /> {stat.text}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="p3-process-wrap">
                        <div className="p3-process-header">
                            <h3 className="p3-process-title">{t("process.title")}</h3>
                            <p className="p3-process-desc">{t("process.desc")}</p>
                        </div>

                        <div className={`p3-process ${processRunning ? "running" : ""}`}>
                            <div className="p3-progress-bar">
                                <div className="p3-progress-track">
                                    <div
                                        className="p3-progress-fill"
                                        style={{
                                            width: processRunning
                                                ? `${((activeLane * 4 + (['idle', 'input', 'ai', 'output', 'done'].indexOf(activeStep))) / 12) * 100}%`
                                                : '0%'
                                        }}
                                    />
                                </div>
                                <div className="p3-progress-dots">
                                    {[0, 1, 2].map(i => (
                                        <span
                                            key={i}
                                            className={`p3-prog-dot ${i < activeLane || (i === activeLane && activeStep === 'done') ? 'dot-done' : i === activeLane ? 'dot-active' : ''}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="p3-lanes">
                                {processLanes.map((lane, i) => {
                                    const InIcon = lane.inputIcon;
                                    const OutIcon = lane.outputIcon;
                                    const phase = getLanePhase(i);
                                    const isActive = processRunning && i === activeLane;
                                    const isDone = phase === 'done';
                                    const isFuture = !processRunning || i > activeLane;
                                    return (
                                        <div key={i} className={`p3-lane p3-lane-${i} ${isActive ? 'lane-active' : ''} ${isDone ? 'lane-done' : ''} ${isFuture ? 'lane-future' : ''}`}>
                                            <div className={`p3-lane-step ${phase === 'input' ? 'step-current' : phase === 'ai' || phase === 'output' || phase === 'done' ? 'step-done' : ''}`}>
                                                <div className="p3-step-icon"><InIcon /></div>
                                                <span className="p3-step-label">{lane.inputLabel}</span>
                                            </div>

                                            <div className={`p3-lane-conn ${phase === 'input' || phase === 'ai' || phase === 'output' ? 'conn-active' : phase === 'done' ? 'conn-done' : ''}`}>
                                                <div className="p3-conn-line" />
                                                <div className="p3-conn-flow">
                                                    <span className="p3-flow-dot" />
                                                    <span className="p3-flow-dot" />
                                                    <span className="p3-flow-dot" />
                                                </div>
                                            </div>

                                            <div className={`p3-lane-step p3-lane-step-ai ${phase === 'ai' ? 'step-current' : phase === 'output' || phase === 'done' ? 'step-done' : ''}`}>
                                                <div className="p3-step-ai-icon"><BrainCircuit /></div>
                                                <span className="p3-step-label">{lane.aiLabel}</span>
                                                {phase === 'ai' && <span className="p3-ai-pulse" />}
                                            </div>

                                            <div className={`p3-lane-conn ${phase === 'ai' || phase === 'output' ? 'conn-active' : phase === 'done' ? 'conn-done' : ''}`}>
                                                <div className="p3-conn-line" />
                                                <div className="p3-conn-flow">
                                                    <span className="p3-flow-dot" />
                                                    <span className="p3-flow-dot" />
                                                    <span className="p3-flow-dot" />
                                                </div>
                                            </div>

                                            <div className={`p3-lane-step ${phase === 'output' ? 'step-current' : phase === 'done' ? 'step-done' : ''}`}>
                                                <div className="p3-step-icon">{phase === 'done' ? <Check /> : <OutIcon />}</div>
                                                <span className="p3-step-label">{lane.outputLabel}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="p3-process-status">
                                <button className={`p3-process-btn ${processRunning ? "active" : ""}`} onClick={() => setProcessRunning(!processRunning)}>
                                    {processRunning ? "⏸" : "▶"}
                                </button>
                                <span className={`p3-status-text ${processRunning ? "active" : ""}`}>
                                    {processRunning ? t("process.statusRunning") : t("process.statusPaused")}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p3-demo-wrap">
                        <div className="p3-demo-header">
                            <h3 className="p3-demo-title">{t("demo.title")}</h3>
                            <p className="p3-demo-desc">{t("demo.desc")}</p>
                        </div>

                        <div className="p3-demo">
                            <div className="p3-demo-chat">
                                <div className="p3-demo-msgs" ref={demoMsgsRef}>
                                    {demoMessages.length === 0 && !isTyping ? (
                                        <div className="p3-demo-welcome">
                                            <div className="p3-demo-avatar"><Bot /></div>
                                            <p className="p3-demo-welcome-text">{t("demo.greeting")}</p>
                                        </div>
                                    ) : (
                                        <>
                                            {demoMessages.map((msg, i) => (
                                                <div key={i} className={`p3-demo-msg p3-demo-msg-${msg.from}`}>
                                                    {msg.text}
                                                </div>
                                            ))}
                                            {isTyping && (
                                                <div className="p3-demo-typing">
                                                    <span className="p3-demo-dot" />
                                                    <span className="p3-demo-dot" />
                                                    <span className="p3-demo-dot" />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                <div className="p3-demo-bottom">
                                    <div className="p3-demo-quick">
                                        {quickReplies.map((reply, i) => (
                                            <button key={i} className="p3-demo-qchip" onClick={() => handleSend(reply)}>
                                                {reply}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="p3-demo-input">
                                        <input
                                            className="p3-demo-field"
                                            value={demoInput}
                                            onChange={e => setDemoInput(e.target.value)}
                                            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                                            placeholder={t("demo.inputPlaceholder")}
                                        />
                                        <button className="p3-demo-send" onClick={() => handleSend()}>
                                            <Send />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="p3-price-wrap">
                    <aside className="service-price-card">
                        <span>PACK 3</span>
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

                        <button onClick={() => onNavigate?.(`/${locale}/formulario`)} className="service-main-button" style={{ cursor: "pointer", border: "none", fontFamily: "inherit", fontSize: "inherit" }}>
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
