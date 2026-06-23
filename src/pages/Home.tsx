import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

export default function Home() {
    
    return (
        <>
            <Header />
            <Hero />
            <Solutions />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer />
        </>
    )
}