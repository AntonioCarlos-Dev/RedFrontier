import PricingCard from "./PricingCard";
import "../styles/pricing.css";

export default function Pricing() {
    return (
        <section id="pricing" className="container">
            <header>
                <p className="desktop-only">Planos e acesso</p>
                <h2>Escolha sua missão</h2>
            </header>

            <section className="even-columns gap-1.5">
                <PricingCard
                    name="Observador"
                    description="Comece a explorar Marte sem pagar nada."
                    price="Grátis"
                    features={[
                        "Mapa de telemetria básico",
                        "1 missão por vez",
                        "Dados com 7 dias de atraso"
                    ]}
                />
                <PricingCard
                    name="Explorador"
                    description="Para quem quer explorar a fundo, com dados em tempo real."
                    price="R$ 19,90"
                    period="/mês"
                    premium
                    badge="MAIS POPULAR"
                    features={[
                        "Todas as missões ativas",
                        "Dados em tempo real",
                        "Linha do tempo completa",
                        "Mapas interativos"
                    ]}
                />
                <PricingCard
                    name="Comandante"
                    description="Acesso total para pesquisadores e educadores."
                    price="R$ 49,90"
                    period="/mês"
                    features={[
                        "Tudo do Explorador",
                        "Exportação de dados brutos",
                        "Modo sala de aula",
                        "Suporte prioritário"
                    ]}
                />
            </section>
        </section>
    )
}