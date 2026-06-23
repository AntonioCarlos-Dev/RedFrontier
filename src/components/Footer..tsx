import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-brand">
                    <img src={Logo} alt="Logo RedFrontier" width={160} height={60} />
                    <div className="footer-social">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src={Instagram} alt="Instagram" width={24} height={24} />
                        </a>
                        <a href="https://github.com/AntonioCarlos-Dev" target="_blank" rel="noreferrer">
                            <img src={Github} alt="GitHub" width={24} height={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <img src={Linkedin} alt="LinkedIn" width={24} height={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Produto</h3>
                        <ul>
                            <li><a href="#">Sobre o RedFrontier</a></li>
                            <li><a href="#">Como funciona</a></li>
                            <li><a href="#pricing">Planos</a></li>
                            <li><a href="#">Atualizações</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Missões</h3>
                        <ul>
                            <li><a href="#">Perseverance</a></li>
                            <li><a href="#">Curiosity</a></li>
                            <li><a href="#">InSight</a></li>
                            <li><a href="#">Artemis</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="https://nasa.gov" target="_blank" rel="noreferrer">Site da NASA</a></li>
                            <li><a href="#">Documentação</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#contact">Suporte</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Feito com ❤️ na aula de Desenvolvimento Web 🚀 ©2026 RedFrontier — Antonio Carlos Carmo</p>
            </div>
        </footer>
    )
}