import "./Hero.css"

function Hero() {
    return (
    <section className="hero">

        <div className="hero-decoration star-one">✦</div>
        <div className="hero-decoration star-two">✦</div>
        <div className="hero-decoration flower">✿</div>

        <div className="tech-sticker sticker-code">
        &lt;/&gt; CODE ♡
        </div>

        <div className="tech-sticker sticker-ai">
        AI.EXE
        <span>RUNNING...</span>
        </div>

        <div className="hero-content">

        <div className="hero-label">
            <span className="status-dot"></span>
            oportunidades.tech
        </div>

        <h1>
            Aprende tecnología
            <span className="hero-highlight">
            gratis ♡
            </span>
        </h1>

        <p className="hero-description">
            Cursos, talleres, programas y oportunidades
            gratuitas para aprender programación,
            inteligencia artificial y tecnología.
        </p>

        <div className="hero-actions">

            <a
            href="#oportunidades"
            className="primary-button"
            >
            Explorar oportunidades
            <span>↓</span>
            </a>

            <span className="hero-note">
            ✦ aprender debería ser accesible
            </span>

        </div>

        </div>

    </section>
    )
}

export default Hero