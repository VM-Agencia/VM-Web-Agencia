import "./HeroBackground.css"

export function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div
                className="absolute inset-0 hero-bg-scale"
                style={{
                    background: `
      radial-gradient(circle at 50% 60%, rgba(0, 255, 255, 0.25) 0%, rgba(0, 255, 255, 0.12) 12%, rgba(0,0,0,0) 30%),
      radial-gradient(circle at 50% 60%, rgba(80, 120, 255, 0.25) 0%, rgba(0,0,0,0) 35%),
      linear-gradient(to bottom, #0f2f33 0%, #081c31 25%, #040d16 60%, #00070d 100%)
    `,
                }}
            />

            <div className="absolute inset-0">
                <div className="absolute w-[250px] h-[250px] bg-[#52D3D8]/20 rounded-full blur-[60px] top-[-80px] left-[-100px] md:w-[400px] md:h-[400px] md:blur-[100px] md:top-[-150px] md:left-[-150px]" />
                <div className="absolute w-[200px] h-[200px] bg-blue-300/15 rounded-full blur-[50px] bottom-[-80px] right-[-100px] md:w-[350px] md:h-[350px] md:blur-[90px] md:bottom-[-150px] md:right-[-150px]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-[2px]" />

            <div className="absolute inset-0 z-10 bg-black/20 [mask-image:radial-gradient(circle,transparent_40%,black_100%)]" />
        </div>
    )
}
