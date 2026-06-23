import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function sendContactEmail() {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                message
            }),
        });

        if (!response.ok) {
            const body = await response.json().catch(() => ({}));
            throw new Error(body.error ?? "Erro ao enviar mensagem.");
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
                <span>
                    <button
                        className="btn-primary"
                        onClick={sendContactEmail}
                    >
                        Enviar
                    </button>
                </span>
            </div>
        </section>
    )
}