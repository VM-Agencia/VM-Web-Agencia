import "./HeroVisual.css"

export function HeroVisual() {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <div className="w-full h-full relative">
                <img
                    src="/images_webp/human-hand.webp"
                    srcSet="/images_webp/human-hand-mobile.webp 800w, /images_webp/human-hand.webp 1200w"
                    width={800}
                    height={533}
                    alt=""
                    className="hero-hand human-hand"
                />

                <img
                    src="/images_webp/robot-hand.webp"
                    srcSet="/images_webp/robot-hand-mobile.webp 800w, /images_webp/robot-hand.webp 1200w"
                    width={800}
                    height={533}
                    alt=""
                    className="hero-hand robot-hand"
                />
            </div>
        </div>
    )
}
