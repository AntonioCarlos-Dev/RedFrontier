import Card from "./Card";
import MapPin from "../assets/map-pin.svg";
import Clock from "../assets/clock.svg";
import Chart from "../assets/chart.svg";
import "../styles/solution.css";

export default function Solutions() {
    return (
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
    )
}