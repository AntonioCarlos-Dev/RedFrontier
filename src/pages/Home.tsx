import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Button from "../components/Button";
import "../styles/header.css";
import "../styles/utilities.css";
import "../styles/hero.css";
import Card from "../components/Card";
import MapPin from "../assets/map-pin.svg";
import Clock from "../assets/clock.svg";
import Chart from "../assets/chart.svg";
import "../styles/solution.css";
import TestimonialCard from "../components/TestimonialCard";
import Avatar1 from "../assets/images/avatar-1.png";
import Avatar2 from "../assets/images/avatar-2.png";
import Avatar3 from "../assets/images/avatar-3.png";
import "../styles/testimonials.css";
import Avatar4 from "../assets/images/avatar-4.png";
import Avatar5 from "../assets/images/avatar-5.png";
import PricingCard from "../components/PricingCard";
import "../styles/pricing.css";
import "../styles/contact.css";
import Contact from "../components/Contact";
import "../styles/footer.css";
import Footer from "../components/Footer.";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
        html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
    }, [showMobileMenu]);

    

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo RedFrontier" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a  href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Planos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Começar a explorar" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Planos</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
            <section id="hero">
    <div className="container content">
        <p className="desktop-only">RedFrontier</p>
        <h1>A fronteira vermelha começa aqui.</h1>
        <p>
            RedFrontier reúne os dados oficiais das missões marcianas da NASA
            e os traduz numa jornada interativa de descobertas.
        </p>
        <div className="flex gap-1">
            <span><Button text="Começar a explorar" /></span>
            <span className="desktop-only">
                <Button text="Saiba mais" secondary />
            </span>
        </div>
    </div>
</section>

<section className="container" id="solution">
    <header>
        <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
                <h2>Feitas para exploradores</h2>
            </span>
        </span>
        <p>
            Dados oficiais, experiência acessível. O <strong>RedFrontier </strong>
            transforma a ciência das missões marcianas da NASA numa jornada
            que qualquer curioso pode trilhar.
        </p>
    </header>

    <section className="even-columns">
        <Card
            icon={MapPin}
            iconAlt="ícone de mapa"
            title="Mapas de Telemetria"
            text="Acompanhe a rota real dos rovers na superfície marciana, reconstruída a partir dos dados oficiais de latitude e longitude da NASA."
        />
        <Card
            icon={Clock}
            iconAlt="ícone de relógio"
            title="Descobertas Sol a Sol"
            text="Reviva cada achado das missões em ordem cronológica, acompanhando a jornada de exploração dia marciano após dia."
        />
        <Card
            icon={Chart}
            iconAlt="ícone de gráfico"
            title="Dados que Fazem Sentido"
            text="Números brutos da NASA viram visualizações claras e acessíveis, pra qualquer curioso entender a ciência por trás de Marte."
        />
    </section>
</section>

<section id="testimonials">
    <header>
        <span>
            <p className="desktop-only">Conselho de quem explora</p>
            <h2>Cada descoberta importa!</h2>
        </span>
        <p>
            Quem já usou sabe como o RedFrontier aproxima a ciência da NASA
            de qualquer pessoa. Veja o que estudantes, professores e
            entusiastas dizem sobre explorar Marte com a gente.
        </p>
    </header>

    <section className="carousel">
    <div className="carousel-content">
        <TestimonialCard image={Avatar1} text="Eu sempre achei os dados da NASA intimidadores. O RedFrontier me fez entender a rota do Perseverance numa tarde — parecia que eu estava na sala de controle." name="Alice Bohrer" role="Estudante" rating={5} />
        <TestimonialCard image={Avatar2} text="Uso o RedFrontier nas minhas aulas. Transformar telemetria bruta em mapas interativos engaja os alunos de um jeito que slides nunca conseguiram." name="Prof. Sandro Ramos" role="Professor" rating={5} />
        <TestimonialCard image={Avatar3} text="Acompanho missões espaciais há anos e nunca vi algo que traduzisse os dados com tanta clareza. Vejo as descobertas Sol após Sol, e é viciante." name="Milena Pommer" role="Entusiasta de Astronomia" rating={4} />
        <TestimonialCard image={Avatar4} text="Cruzo dados de várias missões no meu tempo livre. O RedFrontier economiza horas que eu gastava garimpando planilhas da NASA — agora é tudo visual e na hora." name="Antonio Carmo" role="Pesquisador Independente" rating={5} />
        <TestimonialCard image={Avatar5} text="Não entendo nada de ciência, mas sempre amei o espaço. É a primeira vez que consigo acompanhar uma missão de Marte sem me sentir perdido. Recomendo demais." name="Lionel Ronaldo Jr" role="Goat do universo" rating={4} />
    </div>

    <div className="carousel-content">
        <TestimonialCard image={Avatar1} text="Eu sempre achei os dados da NASA intimidadores. O RedFrontier me fez entender a rota do Perseverance numa tarde — parecia que eu estava na sala de controle." name="Alice Bohrer" role="Estudante" rating={5} />
        <TestimonialCard image={Avatar2} text="Uso o RedFrontier nas minhas aulas. Transformar telemetria bruta em mapas interativos engaja os alunos de um jeito que slides nunca conseguiram." name="Prof. Sandro Ramos" role="Professor" rating={5} />
        <TestimonialCard image={Avatar3} text="Acompanho missões espaciais há anos e nunca vi algo que traduzisse os dados com tanta clareza. Vejo as descobertas Sol após Sol, e é viciante." name="Milena Pommer" role="Entusiasta de Astronomia" rating={4} />
        <TestimonialCard image={Avatar4} text="Cruzo dados de várias missões no meu tempo livre. O RedFrontier economiza horas que eu gastava garimpando planilhas da NASA — agora é tudo visual e na hora." name="Antonio Carmo" role="Pesquisador Independente" rating={5} />
        <TestimonialCard image={Avatar5} text="Não entendo nada de ciência, mas sempre amei o espaço. É a primeira vez que consigo acompanhar uma missão de Marte sem me sentir perdido. Recomendo demais." name="Lionel Ronaldo Jr" role="Goat do universo" rating={4} />
    </div>
</section>
</section>

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

<Contact />
<Footer />
        </>
    )
}