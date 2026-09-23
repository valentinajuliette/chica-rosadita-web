import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <header className="navbar-wrapper">
            <nav className="navbar">

                {/* LOGO */}
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <span className="logo-symbol">✿</span>
                    <span>CHICA ROSADITA</span>
                </Link>

                {/* MENÚ DESKTOP */}
                <div className="navbar-links">
                    <a href="/#oportunidades">Oportunidades</a>
                    <Link to="/sobre-mi">Sobre mí</Link>
                    <Link to="/servicios">Servicios</Link>
                </div>

                {/* CONTACTO */}
                <a
                    href="mailto:valentina@chicarosadita.cl"
                    className="navbar-contact"
                >
                    Contacto ↗
                </a>

                {/* BOTÓN HAMBURGUESA */}
                <button
                    className="navbar-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* MENÚ MÓVIL */}
                {menuOpen && (
                    <div className="navbar-mobile-menu">

                        <a
                            href="/#oportunidades"
                            onClick={closeMenu}
                        >
                            Oportunidades
                        </a>

                        <Link
                            to="/sobre-mi"
                            onClick={closeMenu}
                        >
                            Sobre mí
                        </Link>

                        <Link
                            to="/servicios"
                            onClick={closeMenu}
                        >
                            Servicios
                        </Link>

                        <a
                            href="mailto:valentina@chicarosadita.cl"
                            onClick={closeMenu}
                        >
                            Contacto ↗
                        </a>

                    </div>
                )}

            </nav>
        </header>
    )
}

export default Navbar