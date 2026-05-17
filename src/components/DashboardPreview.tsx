const base: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: "10px",
    lineHeight: 1.2,
    color: "#e2e8f0",
    background: "#0f0f1a",
    overflow: "hidden",
}

const sidebar: React.CSSProperties = {
    width: "22%",
    background: "#16162a",
    padding: "16px 10px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    borderRight: "1px solid rgba(255,255,255,0.04)",
}

const sidebarTitle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 800,
    background: "linear-gradient(135deg, #08bacc, #682cdf)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    padding: "0 8px 12px 8px",
    letterSpacing: "-0.3px",
}

const menuItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "7px 8px",
    borderRadius: "6px",
    fontSize: "10px",
    fontWeight: 500,
    color: "#8a8aa8",
}

const menuActive: React.CSSProperties = {
    ...menuItem,
    background: "rgba(8, 186, 204, 0.12)",
    color: "#08bacc",
    fontWeight: 600,
}

const mainArea: React.CSSProperties = {
    flex: 1,
    padding: "14px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflow: "hidden",
}

const topBar: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2px",
}

const pageTitle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 700,
    color: "#f1f1f5",
    letterSpacing: "-0.2px",
}

const topRight: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
}

const avatar: React.CSSProperties = {
    width: "20px",
    height: "20px",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #682cdf, #08bacc)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "8px",
    fontWeight: 700,
    color: "#fff",
    flexShrink: 0,
}

const metricsRow: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "8px",
}

const metricCard: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "8px",
    padding: "10px 12px",
}

const metricLabel: React.CSSProperties = {
    fontSize: "8px",
    fontWeight: 600,
    color: "#6b6b8a",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
}

const metricValue: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 800,
    color: "#f1f1f5",
    letterSpacing: "-0.5px",
    marginTop: "2px",
}

const metricChange: React.CSSProperties = {
    fontSize: "8px",
    fontWeight: 600,
    marginTop: "2px",
}

const chartRow: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "8px",
    flex: 1,
    minHeight: 0,
}

const chartCard: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "8px",
    padding: "10px 12px",
    display: "flex",
    flexDirection: "column",
}

const chartTitle: React.CSSProperties = {
    fontSize: "9px",
    fontWeight: 600,
    color: "#6b6b8a",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "6px",
}

const barChartContainer: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    gap: "3px",
    flex: 1,
    paddingBottom: "2px",
}

const barGroup: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",
    height: "100%",
    justifyContent: "flex-end",
}

function Bar({ h, color }: { h: number; color: string }) {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "18px",
                height: `${h}%`,
                borderRadius: "3px 3px 1px 1px",
                background: color,
                opacity: 0.85,
                transition: "height 0.3s",
            }}
        />
    )
}

function MetricCard({
    label,
    value,
    change,
    up,
}: {
    label: string
    value: string
    change: string
    up: boolean
}) {
    return (
        <div style={metricCard}>
            <div style={metricLabel}>{label}</div>
            <div style={metricValue}>{value}</div>
            <div style={{ ...metricChange, color: up ? "#22c55e" : "#ef4444" }}>
                {up ? "↑" : "↓"} {change}
            </div>
        </div>
    )
}

const activityList: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    flex: 1,
    overflow: "hidden",
}

const activityItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "5px 6px",
    borderRadius: "4px",
    background: "rgba(255,255,255,0.02)",
    fontSize: "8px",
    color: "#a0a0b8",
}

const activityDot = (color: string): React.CSSProperties => ({
    width: "6px",
    height: "6px",
    borderRadius: "999px",
    background: color,
    flexShrink: 0,
})

export function DashboardPreview() {
    const bars = [
        { h: 65, color: "#08bacc" },
        { h: 45, color: "#08bacc" },
        { h: 80, color: "#682cdf" },
        { h: 55, color: "#08bacc" },
        { h: 35, color: "#08bacc" },
        { h: 90, color: "#682cdf" },
        { h: 70, color: "#08bacc" },
        { h: 50, color: "#08bacc" },
        { h: 75, color: "#682cdf" },
        { h: 60, color: "#08bacc" },
        { h: 40, color: "#08bacc" },
        { h: 85, color: "#682cdf" },
    ]

    return (
        <div style={base}>
            <div style={sidebar}>
                <div style={sidebarTitle}>VM Analytics</div>
                {["Dashboard", "Clientes", "Ventas", "Automatización", "Informes", "Ajustes"].map(
                    (item, i) => (
                        <div key={item} style={i === 0 ? menuActive : menuItem}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <rect x="1" y="1" width="3.2" height="3.2" rx="0.8" fill="currentColor" />
                                <rect x="5.8" y="1" width="3.2" height="3.2" rx="0.8" fill="currentColor" opacity="0.4" />
                                <rect x="1" y="5.8" width="3.2" height="3.2" rx="0.8" fill="currentColor" opacity="0.4" />
                                <rect x="5.8" y="5.8" width="3.2" height="3.2" rx="0.8" fill="currentColor" opacity="0.4" />
                            </svg>
                            {item}
                        </div>
                    )
                )}
            </div>

            <div style={mainArea}>
                <div style={topBar}>
                    <div style={pageTitle}>Panel de Control</div>
                    <div style={topRight}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1a4 4 0 00-4 4v2l-1 1.5h10L10 7V5a4 4 0 00-4-4z" stroke="#6b6b8a" strokeWidth="1.2" fill="none"/>
                            <path d="M4.5 9.5a1.5 1.5 0 003 0" fill="#6b6b8a"/>
                        </svg>
                        <div style={avatar}>VM</div>
                    </div>
                </div>

                <div style={metricsRow}>
                    <MetricCard label="Ingresos" value="€48.2K" change="12.5%" up={true} />
                    <MetricCard label="Usuarios" value="2,847" change="8.3%" up={true} />
                    <MetricCard label="Sesiones" value="12.4K" change="3.1%" up={false} />
                    <MetricCard label="Conversión" value="4.8%" change="1.2%" up={true} />
                </div>

                <div style={chartRow}>
                    <div style={chartCard}>
                        <div style={chartTitle}>Ingresos Mensuales</div>
                        <div style={barChartContainer}>
                            {bars.map((b, i) => (
                                <div key={i} style={barGroup}>
                                    <Bar h={b.h} color={b.color} />
                                    <span style={{ fontSize: "6px", color: "#6b6b8a" }}>
                                        {["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={chartCard}>
                        <div style={chartTitle}>Actividad Reciente</div>
                        <div style={activityList}>
                            {[
                                { text: "Nuevo lead: Taller García", color: "#22c55e" },
                                { text: "Pago recibido · Pack 3", color: "#08bacc" },
                                { text: "Automatización ejecutada", color: "#682cdf" },
                                { text: "Informe semanal listo", color: "#f1de59" },
                                { text: "Cliente calificado · Alto", color: "#22c55e" },
                            ].map((a, i) => (
                                <div key={i} style={activityItem}>
                                    <div style={activityDot(a.color)} />
                                    <span>{a.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const dmStyle = {
    w: "100%",
    h: "100%",
    display: "flex",
    flexDirection: "column" as const,
    fontFamily: "Inter, system-ui, sans-serif",
    color: "#e2e8f0",
    background: "#0f0f1a",
    overflow: "hidden",
    padding: "3px",
    gap: "2px",
    boxSizing: "border-box" as const,
}

export function DashboardMobilePreview() {
    const metrics = [
        { l: "ING", v: "48.2K", c: "+12%", u: true },
        { l: "USR", v: "2.8K", c: "+8%", u: true },
        { l: "SES", v: "12K", c: "-3%", u: false },
        { l: "CONV", v: "4.8%", c: "+1%", u: true },
    ]
    const acts = [
        { t: "Lead Taller García", c: "#22c55e" },
        { t: "Pago Pack 3 recibido", c: "#08bacc" },
        { t: "Auto-ejecutada OK", c: "#682cdf" },
    ]

    return (
        <div style={dmStyle}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "7px", fontWeight: 700, color: "#08bacc" }}>VM</span>
                <div style={{
                    width: "10px", height: "10px", borderRadius: "999px",
                    background: "linear-gradient(135deg, #682cdf, #08bacc)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "4px", fontWeight: 700, color: "#fff",
                }}>VM</div>
            </div>

            <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px",
            }}>
                {metrics.map(m => (
                    <div key={m.l} style={{
                        background: "rgba(255,255,255,0.04)", borderRadius: "3px",
                        padding: "3px 4px",
                    }}>
                        <div style={{ fontSize: "4px", fontWeight: 700, color: "#6b6b8a" }}>{m.l}</div>
                        <div style={{ fontSize: "9px", fontWeight: 800, color: "#f1f1f5", letterSpacing: "-0.3px" }}>{m.v}</div>
                        <div style={{ fontSize: "4px", fontWeight: 700, color: m.u ? "#22c55e" : "#ef4444" }}>{m.u ? "↑" : "↓"}{m.c}</div>
                    </div>
                ))}
            </div>

            <div style={{
                flex: 1, background: "rgba(255,255,255,0.03)", borderRadius: "3px",
                padding: "3px 4px", display: "flex", flexDirection: "column", gap: "2px",
                overflow: "hidden",
            }}>
                <div style={{ fontSize: "4px", fontWeight: 700, color: "#6b6b8a" }}>ACTIVIDAD</div>
                {acts.map((a, i) => (
                    <div key={i} style={{
                        display: "flex", alignItems: "center", gap: "2px",
                        fontSize: "4px", color: "#a0a0b8",
                        padding: "1px 2px", borderRadius: "2px",
                        background: "rgba(255,255,255,0.02)",
                    }}>
                        <div style={{ width: "3px", height: "3px", borderRadius: "999px", background: a.c, flexShrink: 0 }} />
                        {a.t}
                    </div>
                ))}
            </div>
        </div>
    )
}
