import TestimonialCard from "./TestimonialCard";
import Avatar1 from "../assets/images/avatar-1.png";
import Avatar2 from "../assets/images/avatar-2.png";
import Avatar3 from "../assets/images/avatar-3.png";
import Avatar4 from "../assets/images/avatar-4.png";
import Avatar5 from "../assets/images/avatar-5.png";
import "../styles/testimonials.css";

export default function Testimonials() {
    return (
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
    )
}