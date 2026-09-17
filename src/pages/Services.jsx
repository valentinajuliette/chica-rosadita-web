import "./Services.css"

function Services() {
    return (
    <main className="services-page">

      {/* HERO */}
        <section className="services-hero">
        <div className="services-hero-content">
            <span className="section-label">
            ✦ SERVICIOS DE PAGO
            </span>

            <h1>
            Hagamos algo
            <span>increíble junt@s ♡</span>
            </h1>

            <p>
            Creo contenido, doy charlas y desarrollo
            proyectos que conectan tecnología, ciencia
            y comunicación.
            </p>
        </div>

        <div className="services-hero-decoration">
            <div className="services-sticker sticker-pink">
            ✿ LET'S WORK!
            </div>

            <div className="services-big-symbol">
            ✦
            </div>

            <div className="services-sticker sticker-yellow">
            &lt;ideas.exe /&gt;
            </div>
        </div>
        </section>


      {/* SERVICES */}
        <section className="services-list">

        <div className="services-heading">
            <span className="section-label">
            ✦ qué puedo hacer por ti
            </span>

            <h2>
            Ideas que
            <span>se convierten en realidad.</span>
            </h2>
        </div>


        <div className="services-grid">

          {/* SERVICE 1 */}
            <article className="service-card service-pink">
            <div className="service-card-top">
                <span className="service-number">01</span>
                <span className="service-icon">🎥</span>
            </div>

            <h3>
                Creación de
                <span>contenido</span>
            </h3>

            <p>
                Contenido creativo y educativo sobre tecnología,
                ciencia, inteligencia artificial y temas digitales,
                pensado para conectar con nuevas audiencias.
            </p>

            <ul>
                <li>Contenido para redes sociales</li>
                <li>Reels y videos educativos</li>
                <li>Campañas de divulgación</li>
                <li>Contenido para marcas e instituciones</li>
            </ul>

            <span className="service-tag">
                contenido ✦
            </span>
            </article>


          {/* SERVICE 2 */}
            <article className="service-card service-yellow">
            <div className="service-card-top">
                <span className="service-number">02</span>
                <span className="service-icon">🎤</span>
            </div>

            <h3>
                Charlas &
                <span>talleres</span>
            </h3>

            <p>
                Charlas y experiencias educativas para acercar
                la tecnología y la ciencia a estudiantes,
                comunidades, empresas y organizaciones.
            </p>

            <ul>
                <li>Inteligencia artificial</li>
                <li>Tecnología y sociedad</li>
                <li>Mujeres en STEM</li>
                <li>Programación y tecnología</li>
            </ul>

            <span className="service-tag">
                speaking ✦
            </span>
            </article>


          {/* SERVICE 3 */}
            <article className="service-card service-purple">
            <div className="service-card-top">
                <span className="service-number">03</span>
                <span className="service-icon">✦</span>
            </div>

            <h3>
                Colaboraciones &
                <span>proyectos</span>
            </h3>

            <p>
                También podemos crear algo desde cero.
                Me interesa colaborar en proyectos que mezclen
                tecnología, comunicación, educación e impacto.
            </p>

            <ul>
                <li>Campañas especiales</li>
                <li>Eventos y activaciones</li>
                <li>Divulgación científica</li>
                <li>Proyectos tecnológicos y educativos</li>
            </ul>

            <span className="service-tag">
                let's create ✦
            </span>
            </article>

        </div>
        </section>


      {/* CTA */}
        <section className="services-cta">

        <div className="cta-decoration">
            ✦
        </div>

        <span className="section-label">
            ✦ ¿tienes una idea?
        </span>

        <h2>
            Cuéntame qué
            <span>estás imaginando ♡</span>
        </h2>

        <p>
            Si tienes un proyecto, evento, campaña o simplemente
            una idea que quieras conversar, escríbeme.
        </p>

        <a
            href="mailto:valentina@chicarosadita.cl"
            className="services-button"
        >
            Hablemos ↗
        </a>

        <div className="cta-code">
            &lt;collaboration /&gt;
        </div>

        </section>

    </main>
    )
}

export default Services