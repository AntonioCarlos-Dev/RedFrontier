import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/contact.css";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [statusText, setStatusText] = useState("");
    const [isChallengeCompleted, setChallengeCompleted] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    function handleCompleteChallenge(token: string | null) {
        setChallengeCompleted(!!token);
    }

    async function sendContactEmail() {
        if (!email || !message) {
            setStatusText("Preencha todos os campos.");
            return;
        }

        if (!isChallengeCompleted) {
            setStatusText("Confirme que você não é um robô.");
            return;
        }

        setStatusText("Enviando...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            if (!response.ok) {
                const body = await response.json().catch(() => ({}));
                throw new Error(body.error ?? "Erro ao enviar mensagem.");
            }

            setStatusText("Mensagem enviada com sucesso! 🚀");
            setEmail("");
            setMessage("");
            setChallengeCompleted(false);
            recaptchaRef.current?.reset();
        } catch (error: any) {
            setStatusText(error.message);
            recaptchaRef.current?.reset();
            setChallengeCompleted(false);
        }
    }

    return (
        <section id="contact" className="container">
            <header>
                <p className="desktop-only">Fale com a missão</p>
                <h2>Entre em contato</h2>
                <p>
                    Dúvidas sobre os dados, sugestões de missões ou quer levar o
                    RedFrontier pra sua escola? Estamos à disposição — mande sua mensagem.
                </p>
            </header>

            <div className="contact-form">
                <input
                    type="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    placeholder="Sobre o que você quer falar?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={handleCompleteChallenge}
                    theme="dark"
                />
                <span>
                    <button
                        className="btn-primary"
                        onClick={sendContactEmail}
                    >
                        Enviar
                    </button>
                </span>

                {statusText && (
                    <p style={{ textAlign: "center", color: "var(--primary-color)", marginTop: "1rem" }}>
                        {statusText}
                    </p>
                )}
            </div>
        </section>
    );
}