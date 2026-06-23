import Button from "./Button";
import "../styles/hero.css";

export default function Hero() {
    return (
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
    )
}