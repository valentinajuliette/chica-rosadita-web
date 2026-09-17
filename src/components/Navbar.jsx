import "./Navbar.css"

function Navbar() {
    return (
    <header className="navbar-wrapper">
        <nav className="navbar">

        <a href="/" className="navbar-logo">
            <span className="logo-symbol">✿</span>
            <span>CHICA ROSADITA</span>
        </a>

        <div className="navbar-links">
            <a href="#oportunidades">Oportunidades</a>
            <a href="/sobre-mi">Sobre mí</a>
            <a href="/servicios">Servicios</a>
        </div>

        <a
            href="mailto:valentina@chicarosadita.cl"
            className="navbar-contact"
        >
            Contacto ↗
        </a>

        </nav>
    </header>
    )
}

export default Navbar