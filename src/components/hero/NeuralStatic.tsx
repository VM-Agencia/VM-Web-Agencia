import { useEffect, useRef } from "react"

type Node = {
    x: number
    y: number
    size: number
}

export default function NeuralStatic() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const parent = canvas.parentElement
        if (!parent) return

        let nodes: Node[] = []

        const isMobile = () => window.innerWidth < 768

        const resizeCanvas = () => {
            const rect = parent.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
        }

        const drawNetwork = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            nodes = []

            // 🔥 NÚMERO DE NODOS RESPONSIVE
            const NODE_COUNT = isMobile() ? 60 : 120

            for (let i = 0; i < NODE_COUNT; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                })
            }

            const coreColor = "255, 145, 77"
            const lineColor = "8, 186, 204"

            // 🔥 DISTANCIA DE CONEXIÓN MÁS BAJA EN MÓVIL
            const maxDistance = isMobile() ? 90 : 140

            // ======================
            // 🔗 CONEXIONES
            // ======================
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const n1 = nodes[i]
                    const n2 = nodes[j]

                    const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y)

                    if (dist < maxDistance) {
                        const opacity = 1 - dist / maxDistance

                        ctx.strokeStyle = `rgba(${lineColor}, ${opacity * (isMobile() ? 0.15 : 0.25)})`
                        ctx.lineWidth = isMobile() ? 0.8 : 1.2

                        ctx.beginPath()
                        ctx.moveTo(n1.x, n1.y)
                        ctx.lineTo(n2.x, n2.y)
                        ctx.stroke()
                    }
                }
            }

            // ======================
            // ✨ NODOS
            // ======================
            nodes.forEach((n) => {
                ctx.shadowBlur = isMobile() ? 10 : 20
                ctx.shadowColor = `rgba(${coreColor}, 0.6)`

                ctx.fillStyle = `rgba(${coreColor}, 0.9)`
                ctx.beginPath()
                ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2)
                ctx.fill()

                ctx.beginPath()
                ctx.arc(n.x, n.y, n.size * 2.5, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${coreColor}, ${isMobile() ? 0.08 : 0.15})`
                ctx.fill()

                ctx.shadowBlur = 0
            })
        }

        resizeCanvas()
        drawNetwork()

        const handleResize = () => {
            resizeCanvas()
            drawNetwork()
        }

        let resizeTimer: ReturnType<typeof setTimeout>
        const debouncedResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(handleResize, 200)
        }

        window.addEventListener("resize", debouncedResize)

        return () => {
            window.removeEventListener("resize", debouncedResize)
            clearTimeout(resizeTimer)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-5"
        />
    )
}