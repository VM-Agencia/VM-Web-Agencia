const keyframesContent = `
@keyframes aiMsgIn {
  0% { opacity: 0; transform: translateY(12px) scale(0.96); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes aiPulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.15); }
}
@keyframes aiTyping {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
@keyframes aiFlowLine {
  0% { stroke-dashoffset: 200; }
  100% { stroke-dashoffset: 0; }
}
@keyframes aiGlowPulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.4; }
}
@keyframes aiSpin {
  to { transform: rotate(360deg); }
}
@keyframes aiSlideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes aiBarGrow {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}
`

const s: Record<string, React.CSSProperties> = {
    base: {
        width: "100%",
        height: "100%",
        display: "flex",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "10px",
        lineHeight: 1.2,
        color: "#e2e8f0",
        background: "#0a0a14",
        overflow: "hidden",
    },
    sidebar: {
        width: "20%",
        background: "#111122",
        padding: "14px 10px",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        borderRight: "1px solid rgba(255,255,255,0.04)",
    },
    brand: {
        fontSize: "12px",
        fontWeight: 800,
        background: "linear-gradient(135deg, #682cdf, #08bacc)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        padding: "0 8px 10px 8px",
        letterSpacing: "-0.3px",
    },
    main: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },
    topBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 14px",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
    },
    topTitle: {
        fontSize: "12px",
        fontWeight: 700,
        color: "#f1f1f5",
        letterSpacing: "-0.2px",
    },
    statusBadge: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "8px",
        fontWeight: 600,
        color: "#22c55e",
    },
    content: {
        flex: 1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        padding: "10px 14px",
        overflow: "hidden",
    },
    chatPanel: {
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        overflow: "hidden",
    },
    chatHeader: {
        fontSize: "8px",
        fontWeight: 600,
        color: "#6b6b8a",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
    },
    flowPanel: {
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
    },
    flowHeader: {
        fontSize: "8px",
        fontWeight: 600,
        color: "#6b6b8a",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        marginBottom: "8px",
    },
    node: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "5px 7px",
        borderRadius: "5px",
        fontSize: "8px",
        fontWeight: 500,
    },
}

function StatusDot() {
    return (
        <span
            style={{
                width: "5px",
                height: "5px",
                borderRadius: "999px",
                background: "#22c55e",
                display: "inline-block",
                animation: "aiPulse 2s ease-in-out infinite",
            }}
        />
    )
}

function ChatBubble({ text, isUser, delay }: { text: string; isUser: boolean; delay: number }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                animation: `aiMsgIn 0.4s ease-out ${delay}s forwards`,
                opacity: 0,
            }}
        >
            <div
                style={{
                    maxWidth: "85%",
                    padding: "6px 9px",
                    borderRadius: isUser ? "8px 8px 2px 8px" : "8px 8px 8px 2px",
                    background: isUser
                        ? "linear-gradient(135deg, #682cdf, #08bacc)"
                        : "rgba(255,255,255,0.06)",
                    fontSize: "8px",
                    lineHeight: 1.5,
                    color: isUser ? "#fff" : "#c8c8d8",
                }}
            >
                {text}
            </div>
        </div>
    )
}

function AnimatedNode({
    label,
    color,
    delay,
    top,
}: {
    label: string
    color: string
    delay: number
    top: number
}) {
    return (
        <div
            style={{
                position: "absolute",
                top: `${top}%`,
                left: "50%",
                transform: "translateX(-50%)",
                animation: `aiSlideUp 0.5s ease-out ${delay}s forwards`,
                opacity: 0,
            }}
        >
            <div
                style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: `rgba(${hexToRgb(color)}, 0.12)`,
                    border: `1px solid rgba(${hexToRgb(color)}, 0.25)`,
                    fontSize: "7px",
                    fontWeight: 600,
                    color: color,
                    whiteSpace: "nowrap",
                }}
            >
                {label}
            </div>
        </div>
    )
}

function hexToRgb(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `${r}, ${g}, ${b}`
}

export function AIAutomationPreview() {
    const messages = [
        { text: "Hola, ¿quiero información sobre sus servicios", isUser: true, delay: 0.5 },
        { text: "¡Claro! Te ayudo con gusto. ¿Qué tipo de negocio tienes?", isUser: false, delay: 2 },
        { text: "Tengo un taller mecánico en Valencia", isUser: true, delay: 3.5 },
        { text: "Perfecto. Podemos crear una web con reservas online y automatizar recordatorios a tus clientes", isUser: false, delay: 5 },
        { text: "¿Cuánto cuesta?", isUser: true, delay: 6.5 },
        { text: "Tenemos packs desde 499€. ¿Te gustaría agendar una llamada gratuita para verlo?", isUser: false, delay: 8 },
        { text: "Sí, agéndame", isUser: true, delay: 9.5 },
    ]

    const flowNodes = [
        { label: "Web Chat", color: "#08bacc", top: 5, delay: 0.3 },
        { label: "IA Clasifica", color: "#682cdf", top: 25, delay: 1.5 },
        { label: "CRM Lead", color: "#22c55e", top: 45, delay: 2.7 },
        { label: "Email Auto", color: "#f1de59", top: 65, delay: 3.9 },
        { label: "Recordatorio WhatsApp", color: "#ff914d", top: 85, delay: 5.1 },
    ]

    return (
        <>
            <style>{keyframesContent}</style>
            <div style={s.base}>
                <div style={s.sidebar}>
                    <div style={s.brand}>VM Flow</div>
                    {[
                        { l: "Chat IA", a: true },
                        { l: "Automaciones", a: false },
                        { l: "Clientes", a: false },
                        { l: "Plantillas", a: false },
                        { l: "Analytics", a: false },
                    ].map((item) => (
                        <div
                            key={item.l}
                            style={{
                                ...s.node,
                                background: item.a ? "rgba(8,186,204,0.1)" : "transparent",
                                color: item.a ? "#08bacc" : "#8a8aa8",
                            }}
                        >
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                            </svg>
                            {item.l}
                        </div>
                    ))}
                </div>

                <div style={s.main}>
                    <div style={s.topBar}>
                        <div style={s.topTitle}>AI Assistant · Lead Capture</div>
                        <div style={s.statusBadge}>
                            <StatusDot />
                            Activo · 3 conversaciones
                        </div>
                    </div>

                    <div style={s.content}>
                        <div style={s.chatPanel}>
                            <div style={s.chatHeader}>Chat en vivo · Captación</div>
                            {messages.map((msg, i) => (
                                <ChatBubble key={i} {...msg} />
                            ))}
                        </div>

                        <div style={{ ...s.flowPanel, position: "relative" }}>
                            <div style={s.flowHeader}>Flujo de Automatización</div>

                            <div
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "12%",
                                    bottom: "8%",
                                    width: "1px",
                                    background: "linear-gradient(to bottom, #08bacc, #682cdf, #22c55e, #f1de59, #ff914d)",
                                    opacity: 0.3,
                                    transform: "translateX(-50%)",
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "12%",
                                    bottom: "8%",
                                    width: "1px",
                                    transform: "translateX(-50%)",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        background: "linear-gradient(to bottom, #08bacc, #682cdf, #22c55e, #f1de59, #ff914d)",
                                        animation: "aiFlowLine 4s linear infinite",
                                        transformOrigin: "top",
                                    }}
                                />
                            </div>

                            {flowNodes.map((node) => (
                                <AnimatedNode key={node.label} {...node} />
                            ))}

                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "2%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    fontSize: "6px",
                                    color: "#22c55e",
                                    opacity: 0.6,
                                }}
                            >
                                <span style={{ width: "4px", height: "4px", borderRadius: "999px", background: "#22c55e", display: "inline-block", animation: "aiPulse 1.5s ease-in-out infinite" }} />
                                Flujo activo 24/7
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mobileKeyframes = `
@keyframes aiMobMsg {
  0% { opacity: 0; transform: translateX(20px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes aiMobPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
`

const aiMobBase = {
    w: "100%",
    h: "100%",
    display: "flex",
    flexDirection: "column" as const,
    fontFamily: "Inter, system-ui, sans-serif",
    color: "#e2e8f0",
    background: "#0a0a14",
    overflow: "hidden",
    padding: "3px",
    gap: "2px",
    boxSizing: "border-box" as const,
}

const mobChatMsg: React.CSSProperties = {
    padding: "2px 4px",
    borderRadius: "4px",
    fontSize: "4px",
    lineHeight: 1.3,
    maxWidth: "85%",
}

export function AIAutomationMobilePreview() {
    const msgs = [
        { t: "¿Info sobre servicios?", u: true, d: 0.3 },
        { t: "¡Claro! ¿qué negocio?", u: false, d: 1.5 },
        { t: "Taller en Valencia", u: true, d: 2.7 },
        { t: "Web + reservas + IA ¡listo!", u: false, d: 4 },
    ]

    return (
        <>
            <style>{mobileKeyframes}</style>
            <div style={aiMobBase}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{
                        fontSize: "6px", fontWeight: 700,
                        background: "linear-gradient(135deg, #682cdf, #08bacc)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    }}>VM Flow</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "3px", color: "#22c55e" }}>
                        <span style={{ width: "2px", height: "2px", borderRadius: "999px", background: "#22c55e", display: "inline-block", animation: "aiMobPulse 2s ease-in-out infinite" }} />
                        On
                    </div>
                </div>

                <div style={{
                    flex: 1, background: "rgba(255,255,255,0.03)", borderRadius: "3px",
                    padding: "3px", display: "flex", flexDirection: "column", gap: "2px",
                    overflow: "hidden",
                }}>
                    <div style={{ fontSize: "3px", fontWeight: 700, color: "#6b6b8a" }}>CHAT</div>
                    {msgs.map((m, i) => (
                        <div key={i} style={{
                            display: "flex", justifyContent: m.u ? "flex-end" : "flex-start",
                            animation: `aiMobMsg 0.3s ease-out ${m.d}s forwards`,
                            opacity: 0,
                        }}>
                            <div style={{
                                ...mobChatMsg,
                                borderRadius: m.u ? "4px 4px 1px 4px" : "4px 4px 4px 1px",
                                background: m.u ? "linear-gradient(135deg, #682cdf, #08bacc)" : "rgba(255,255,255,0.06)",
                                color: m.u ? "#fff" : "#c8c8d8",
                            }}>{m.t}</div>
                        </div>
                    ))}
                </div>

                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "2px",
                    padding: "2px", background: "rgba(255,255,255,0.03)", borderRadius: "3px",
                }}>
                    {["Web", "IA", "CRM", "WP"].map((l, i) => (
                        <div key={l} style={{
                            padding: "1px 3px", borderRadius: "2px",
                            fontSize: "3px", fontWeight: 700,
                            background: i % 2 === 0 ? "rgba(8,186,204,0.15)" : "rgba(104,44,223,0.15)",
                            color: i % 2 === 0 ? "#08bacc" : "#682cdf",
                            animation: `aiMobPulse ${1.5 + i * 0.3}s ease-in-out infinite`,
                        }}>{l}</div>
                    ))}
                </div>
            </div>
        </>
    )
}
