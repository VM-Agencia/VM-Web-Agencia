export default function BackgroundImage() {
    return (
        <>
            <div className="bg-image-wrapper">
                <img
                    src="/images_webp/fondo_fibra_laterales.webp"
                    alt=""
                    loading="lazy"
                    className="bg-image"
                />
            </div>

            <style>{`
                .bg-image-wrapper {
                    position: fixed;
                    inset: 0;
                    z-index: -20;
                    overflow: hidden;
                    pointer-events: none;
                }

                .bg-image {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 115%;
                    height: 115%;
                    object-fit: cover;
                    transform: translate(-50%, -50%);
                    opacity: 0.6;
                    will-change: transform;
                    animation: bgFlowDesktop 22s ease-in-out infinite;
                }

                @keyframes bgFlowDesktop {
                    0% {
                        transform: translate(-50%, -50%) translate3d(0%, 0%, 0) scale(1.02);
                    }
                    25% {
                        transform: translate(-50%, -50%) translate3d(-2%, -3%, 0) scale(1.03);
                    }
                    50% {
                        transform: translate(-50%, -50%) translate3d(2%, -6%, 0) scale(1.04);
                    }
                    75% {
                        transform: translate(-50%, -50%) translate3d(-1%, -3%, 0) scale(1.03);
                    }
                    100% {
                        transform: translate(-50%, -50%) translate3d(0%, 0%, 0) scale(1.02);
                    }
                }

                @media (max-width: 768px) {
                    .bg-image {
                        width: 130%;
                        height: 130%;
                        animation: bgFlowMobile 26s ease-in-out infinite;
                    }

                    @keyframes bgFlowMobile {
                        0% {
                            transform: translate(-50%, -50%) translate3d(0%, 0%, 0) scale(1.08);
                        }
                        25% {
                            transform: translate(-50%, -50%) translate3d(-3%, -4%, 0) scale(1.1);
                        }
                        50% {
                            transform: translate(-50%, -50%) translate3d(3%, -8%, 0) scale(1.12);
                        }
                        75% {
                            transform: translate(-50%, -50%) translate3d(-2%, -4%, 0) scale(1.1);
                        }
                        100% {
                            transform: translate(-50%, -50%) translate3d(0%, 0%, 0) scale(1.08);
                        }
                    }
                }
            `}</style>
        </>
    )
}
