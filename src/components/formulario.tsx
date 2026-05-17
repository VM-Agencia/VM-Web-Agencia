import { useState, useEffect } from "react";
import { useTranslations } from "lib/i18n";

type Answer = {
    value: string | null;
    qualifies: boolean | null;
};

export default function ConsultoriaVMPage() {
    const t = useTranslations("ConsultoriaVM");

    const [currentPage, setCurrentPage] = useState("welcome");
    const [countdown, setCountdown] = useState(5);

    const [answers, setAnswers] = useState<Record<string, Answer>>({
        q1: { value: null, qualifies: null },
        q2: { value: null, qualifies: null },
        q3: { value: null, qualifies: null },
        q4: { value: null, qualifies: null },
        q5: { value: null, qualifies: null },
    });

    useEffect(() => {
        if (currentPage === "success") {
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        window.open(
                            "https://calendly.com/vmmarketing-ia/30min",
                            "_blank"
                        );
                        return 0;
                    }

                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [currentPage]);

    const showPage = (id: string) => {
        setCurrentPage(id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const selectOption = (
        key: string,
        value: string,
        qualifies: boolean
    ) => {
        setAnswers((prev) => ({
            ...prev,
            [key]: {
                value,
                qualifies,
            },
        }));
    };

    const submitForm = () => {
        const allQualified = Object.values(answers).every(
            (a) => a.qualifies === true
        );

        if (allQualified) {
            showPage("success");
        } else {
            showPage("exit-a");
        }
    };

    const isAnswered = (key: string) => answers[key].value !== null;

    const renderOption = (
        questionKey: string,
        value: string,
        qualifies: boolean,
        label: string
    ) => {
        const selected = answers[questionKey].value === value;

        return (
            <button
                type="button"
                onClick={() => selectOption(questionKey, value, qualifies)}
                className={`option-btn ${selected ? "selected" : ""}`}
            >
                {label}
            </button>
        );
    };

    return (
        <>
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    background: #0a0a16;
                }

                .page-wrapper {
                    font-family: "Segoe UI", Roboto, sans-serif;
                    background:
                            radial-gradient(
                                    circle at top,
                                    rgba(104, 44, 223, 0.16),
                                    transparent 30%
                            ),
                            linear-gradient(
                                    135deg,
                                    #0a0a16 0%,
                                    #111126 45%,
                                    #17172d 100%
                            );
                    color: #ffffff;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .container {
                    max-width: 620px;
                    width: 100%;
                    background: rgba(24, 24, 44, 0.88);
                    border: 1px solid rgba(104, 44, 223, 0.2);
                    border-radius: 22px;
                    padding: 36px 34px;
                    backdrop-filter: blur(18px);
                    box-shadow:
                            0 20px 60px rgba(0, 0, 0, 0.38),
                            0 0 80px rgba(104, 44, 223, 0.08);
                }

                .logo-header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .logo-header img {
                    width: 90px;
                    height: auto;
                    object-fit: contain;
                    display: block;
                    filter:
                            drop-shadow(0 0 20px rgba(255, 145, 77, 0.24))
                            drop-shadow(0 0 40px rgba(255, 145, 77, 0.12));
                }

                h1 {
                    font-size: 1.7rem;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 14px;
                    color: #ffffff;
                    text-align: center;
                    letter-spacing: -0.03em;
                }

                .subtitle {
                    color: #b6b7d0;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 30px;
                    text-align: center;
                }

                .question-label {
                    display: block;
                    font-size: 1rem;
                    font-weight: 700;
                    line-height: 1.35;
                    margin-bottom: 18px;
                    color: #ffffff;
                    text-align: left;
                }

                .required {
                    color: #ff914d;
                }

                .options {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    width: 100%;
                    margin-bottom: 24px;
                }

                .option-btn {
                    appearance: none;
                    -webkit-appearance: none;
                    width: 100%;
                    min-height: 52px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    background: rgba(45, 45, 78, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 8px;
                    color: #ffffff;
                    padding: 14px 18px;
                    font-size: 0.95rem;
                    font-weight: 500;
                    line-height: 1.35;
                    text-align: left;
                    cursor: pointer;
                    transition:
                            background 0.25s ease,
                            border-color 0.25s ease,
                            box-shadow 0.25s ease,
                            transform 0.25s ease;
                    position: relative;
                    overflow: hidden;
                    box-shadow:
                            0 4px 14px rgba(0, 0, 0, 0.16),
                            inset 0 1px 0 rgba(255, 255, 255, 0.03);
                }

                .option-btn:hover {
                    background: rgba(55, 55, 95, 0.98);
                    border-color: rgba(82, 211, 216, 0.48);
                    transform: translateY(-2px);
                    box-shadow:
                            0 10px 24px rgba(8, 186, 204, 0.14),
                            0 0 0 1px rgba(82, 211, 216, 0.08);
                }

                .option-btn.selected {
                    background:
                            linear-gradient(
                                    135deg,
                                    rgba(104, 44, 223, 0.36),
                                    rgba(8, 186, 204, 0.22)
                            ),
                            rgba(45, 45, 78, 0.95);
                    border-color: #08bacc;
                    box-shadow:
                            0 10px 30px rgba(8, 186, 204, 0.18),
                            0 0 0 1px rgba(82, 211, 216, 0.16);
                    transform: translateY(-1px);
                }

                .option-btn.selected::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(
                            to bottom,
                            #682cdf,
                            #08bacc
                    );
                }

                .btn-next {
                    width: 100%;
                    border: none;
                    border-radius: 12px;
                    padding: 15px 20px;
                    font-size: 15px;
                    font-weight: 700;
                    color: white;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    background: linear-gradient(135deg, #682cdf, #7d35ff);
                    box-shadow: 0 12px 30px rgba(104, 44, 223, 0.28);
                }

                .btn-next:hover {
                    transform: translateY(-2px);
                    background: linear-gradient(
                            135deg,
                            #08bacc,
                            #52d3d8
                    );
                    box-shadow: 0 14px 32px rgba(8, 186, 204, 0.26);
                }

                .btn-next:disabled {
                    opacity: 0.35;
                    cursor: not-allowed;
                    transform: none;
                    box-shadow: none;
                    background: #682cdf;
                }

                .progress {
                    width: 100%;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.06);
                    border-radius: 999px;
                    overflow: hidden;
                    margin-bottom: 28px;
                }

                .progress-bar {
                    height: 100%;
                    border-radius: 999px;
                    background: linear-gradient(
                            90deg,
                            #682cdf,
                            #08bacc
                    );
                    transition: width 0.3s ease;
                }

                .success-page,
                .exit-page {
                    text-align: center;
                }

                .calendly-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(
                            135deg,
                            #682cdf,
                            #08bacc
                    );
                    color: white;
                    padding: 15px 34px;
                    border-radius: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    margin-top: 18px;
                    transition: all 0.25s ease;
                    box-shadow: 0 14px 34px rgba(104, 44, 223, 0.28);
                }

                .calendly-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 16px 38px rgba(8, 186, 204, 0.26);
                }

                @media (max-width: 768px) {
                    .container {
                        max-width: 100%;
                        padding: 34px 28px;
                    }
                }

                @media (max-width: 640px) {
                    .page-wrapper {
                        padding: 16px;
                        align-items: center;
                    }

                    .container {
                        padding: 24px 20px;
                        border-radius: 18px;
                    }

                    .logo-header {
                        margin-bottom: 20px;
                    }

                    .logo-header img {
                        width: 78px;
                    }

                    h1 {
                        font-size: 1.45rem;
                    }

                    .subtitle {
                        font-size: 0.9rem;
                    }

                    .question-label {
                        font-size: 0.95rem;
                    }

                    .option-btn {
                        min-height: 48px;
                        font-size: 0.9rem;
                        padding: 13px 16px;
                    }

                    .btn-next {
                        padding: 14px 18px;
                        font-size: 14px;
                    }

                    .progress {
                        margin-bottom: 24px;
                    }
                }

                @media (max-width: 480px) {
                    .page-wrapper {
                        padding: 12px;
                    }

                    .container {
                        padding: 18px 14px;
                        border-radius: 14px;
                    }

                    .logo-header img {
                        width: 64px;
                    }

                    h1 {
                        font-size: 1.2rem;
                    }

                    .subtitle {
                        font-size: 0.85rem;
                    }

                    .question-label {
                        font-size: 0.9rem;
                    }

                    .option-btn {
                        min-height: 44px;
                        font-size: 0.85rem;
                        padding: 11px 12px;
                    }

                    .btn-next {
                        padding: 12px 16px;
                        font-size: 13px;
                    }
                }
            `}</style>

            <div className="page-wrapper">
                <div className="container">
                    <div className="logo-header">
                        <img
                            src="/images_webp/VMlogo.webp"
                            alt="VM Agency Logo"
                        />
                    </div>

                    {currentPage === "welcome" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: "0%" }}
                                />
                            </div>

                            <h1>{t("welcome.title")}</h1>

                            <p className="subtitle">
                                {t("welcome.subtitle")}
                            </p>

                            <button
                                type="button"
                                className="btn-next"
                                onClick={() => showPage("q1")}
                            >
                                {t("welcome.button")}
                            </button>
                        </>
                    )}

                    {currentPage === "q1" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: "20%" }}
                                />
                            </div>

                            <label className="question-label">
                                {t("questions.q1.title")}{" "}
                                <span className="required">*</span>
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q1",
                                    "local",
                                    true,
                                    t("questions.q1.options.local")
                                )}

                                {renderOption(
                                    "q1",
                                    "big",
                                    true,
                                    t("questions.q1.options.big")
                                )}

                                {renderOption(
                                    "q1",
                                    "no-business",
                                    false,
                                    t("questions.q1.options.noBusiness")
                                )}

                                {renderOption(
                                    "q1",
                                    "personal",
                                    true,
                                    t("questions.q1.options.personal")
                                )}
                            </div>

                            <button
                                type="button"
                                className="btn-next"
                                disabled={!isAnswered("q1")}
                                onClick={() => showPage("q2")}
                            >
                                {t("buttons.next")}
                            </button>
                        </>
                    )}

                    {currentPage === "q2" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: "40%" }}
                                />
                            </div>

                            <label className="question-label">
                                {t("questions.q2.title")}{" "}
                                <span className="required">*</span>
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q2",
                                    "low",
                                    false,
                                    t("questions.q2.options.low")
                                )}

                                {renderOption(
                                    "q2",
                                    "mid",
                                    true,
                                    t("questions.q2.options.mid")
                                )}

                                {renderOption(
                                    "q2",
                                    "high",
                                    true,
                                    t("questions.q2.options.high")
                                )}

                                {renderOption(
                                    "q2",
                                    "none",
                                    true,
                                    t("questions.q2.options.none")
                                )}
                            </div>

                            <button
                                type="button"
                                className="btn-next"
                                disabled={!isAnswered("q2")}
                                onClick={() => showPage("q3")}
                            >
                                {t("buttons.next")}
                            </button>
                        </>
                    )}

                    {currentPage === "q3" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: "60%" }}
                                />
                            </div>

                            <label className="question-label">
                                {t("questions.q3.title")}{" "}
                                <span className="required">*</span>
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q3",
                                    "immediate",
                                    true,
                                    t("questions.q3.options.immediate")
                                )}

                                {renderOption(
                                    "q3",
                                    "soon",
                                    true,
                                    t("questions.q3.options.soon")
                                )}

                                {renderOption(
                                    "q3",
                                    "curious",
                                    false,
                                    t("questions.q3.options.curious")
                                )}

                                {renderOption(
                                    "q3",
                                    "late",
                                    false,
                                    t("questions.q3.options.late")
                                )}
                            </div>

                            <button
                                type="button"
                                className="btn-next"
                                disabled={!isAnswered("q3")}
                                onClick={() => showPage("q4")}
                            >
                                {t("buttons.next")}
                            </button>
                        </>
                    )}

                    {currentPage === "q4" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: "80%" }}
                                />
                            </div>

                            <label className="question-label">
                                {t("questions.q4.title")}{" "}
                                <span className="required">*</span>
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q4",
                                    "none",
                                    true,
                                    t("questions.q4.options.none")
                                )}

                                {renderOption(
                                    "q4",
                                    "basic",
                                    true,
                                    t("questions.q4.options.basic")
                                )}

                                {renderOption(
                                    "q4",
                                    "partial",
                                    true,
                                    t("questions.q4.options.partial")
                                )}

                                {renderOption(
                                    "q4",
                                    "complete",
                                    true,
                                    t("questions.q4.options.complete")
                                )}
                            </div>

                            <button
                                type="button"
                                className="btn-next"
                                disabled={!isAnswered("q4")}
                                onClick={() => showPage("q5")}
                            >
                                {t("buttons.next")}
                            </button>
                        </>
                    )}

                    {currentPage === "q5" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <label className="question-label">
                                {t("questions.q5.title")}{" "}
                                <span className="required">*</span>
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q5",
                                    "yes",
                                    true,
                                    t("questions.q5.options.yes")
                                )}

                                {renderOption(
                                    "q5",
                                    "maybe",
                                    true,
                                    t("questions.q5.options.maybe")
                                )}

                                {renderOption(
                                    "q5",
                                    "manual",
                                    false,
                                    t("questions.q5.options.manual")
                                )}

                                {renderOption(
                                    "q5",
                                    "no",
                                    true,
                                    t("questions.q5.options.no")
                                )}
                            </div>

                            <button
                                type="button"
                                className="btn-next"
                                disabled={!isAnswered("q5")}
                                onClick={submitForm}
                            >
                                {t("buttons.submit")}
                            </button>
                        </>
                    )}

                    {currentPage === "exit-a" && (
                        <div className="exit-page">
                            <h1>{t("exit.title")}</h1>

                            <p className="subtitle">
                                {t("exit.subtitle")}
                            </p>
                        </div>
                    )}

                    {currentPage === "success" && (
                        <div className="success-page">
                            <h1>{t("success.title")}</h1>

                            <p className="subtitle">
                                {t("success.subtitle")}
                            </p>

                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#888",
                                    marginBottom: "24px",
                                }}
                            >
                                {t("success.redirect", { countdown })}
                            </p>

                            <a
                                href="https://calendly.com/vmmarketing-ia/30min"
                                className="calendly-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("buttons.calendly")}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
