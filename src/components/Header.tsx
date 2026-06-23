import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Button from "./Button";
import "../styles/header.css";
import "../styles/utilities.css";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <header className="container py-sm">
            <nav className="flex items-center justify-between">
                <img src={Logo} alt="Logo RedFrontier" width={220} height={80} />

                <div className="desktop-only">
                    <ul className="flex gap-1">
                        <li><a href="#">Home</a></li>
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
                    {showMobileMenu ? (
                        <div className="mobile-menu-content">
                            <div className="container flex">
                                <ul>
                                    <li><a onClick={() => setShowMobileMenu(false)} href="#">Home</a></li>
                                    <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a></li>
                                    <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                                    <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Planos</a></li>
                                    <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
                                </ul>
                                <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                                    <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                            <img src={Menu} alt="ícone menu" width={24} height={24} />
                        </span>
                    )}
                </div>
            </nav>
        </header>
    )
}