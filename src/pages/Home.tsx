import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Button from "../components/Button";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import Card from "../components/Card";
import MapPin from "../assets/map-pin.svg";
import Clock from "../assets/clock.svg";
import Chart from "../assets/chart.svg";
import "../styles/solution.css";


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

        </>
    )
}