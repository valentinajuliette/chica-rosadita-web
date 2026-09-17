import "./About.css"
import aboutPhoto from "../images/about-photo1.jpeg"

function About() {
    return (
    <main className="about-page">

      {/* HERO */}

        <section className="about-hero">

        <div className="about-hero-content">

            <span className="section-label">
            ✦ sobre mí
            </span>

            <h1>
            Hola, soy
            <span>Valentina ♡</span>
            </h1>

            <p className="about-intro">
            Casi ingeniera informática, divulgadora
            científica y creadora de contenido.
            </p>

        </div>


        <div className="about-photo-wrapper">

            <div className="about-photo">
            <span>
                <img
                src={aboutPhoto}
                alt="Valentina Muñoz, creadora de contenido y divulgadora científica"
                />
            </span>
            </div>

            <div className="photo-sticker sticker-pink">
            ✿ HELLO!
            </div>

            <div className="photo-sticker sticker-yellow">
            &lt;coder /&gt;
            </div>

        </div>

        </section>


      {/* PRESENTACIÓN */}

        <section className="about-story">

        <div className="about-story-label">
            <span>01</span>
            <span>mi historia</span>
        </div>

        <div className="about-story-content">

            <h2>
            La tecnología
            <span>también puede ser divertida.</span>
            </h2>

            <p>
            Soy Valentina, aunque probablemente me conozcas
            como Chica Rosadita. Me apasiona la tecnología,
            la ciencia y encontrar formas de hacer que temas
            que parecen difíciles se sientan cercanos,
            entretenidos y posibles.
            </p>

            <p>
            Actualmente estoy terminando mi formación en
            ingeniería informática y, en paralelo, desarrollo
            proyectos de divulgación científica y tecnológica.
            </p>

        </div>

        </section>


      {/* LO QUE HAGO */}

        <section className="about-what-i-do">

        <div className="about-section-heading">

            <span className="section-label">
            ✦ lo que hago
            </span>

            <h2>
            Tres cosas que
            <span>me mueven.</span>
            </h2>

        </div>


        <div className="about-pillars">

            <article className="about-pillar pillar-pink">

            <span className="pillar-number">
                01
            </span>

            <div className="pillar-icon">
                💻
            </div>

            <h3>
                Tecnología
            </h3>

            <p>
                Programación, inteligencia artificial,
                datos y todo lo que implique entender
                cómo funciona el mundo digital.
            </p>

            </article>


            <article className="about-pillar pillar-yellow">

            <span className="pillar-number">
                02
            </span>

            <div className="pillar-icon">
                🔬
            </div>

            <h3>
                Divulgación
            </h3>

            <p>
                Convertir ciencia y tecnología en contenido
                que cualquiera pueda entender, disfrutar
                y compartir.
            </p>

            </article>


            <article className="about-pillar pillar-purple">

            <span className="pillar-number">
                03
            </span>

            <div className="pillar-icon">
                🎤
            </div>

            <h3>
                Comunicación
            </h3>

            <p>
                Charlas, contenido y proyectos que conectan
                ideas, personas y nuevas formas de mirar
                la tecnología.
            </p>

            </article>

        </div>

        </section>


      {/* MANIFIESTO */}

        <section className="about-manifesto">

        <div className="manifesto-decoration">
            ✦
        </div>

        <p>
            Creo que no necesitamos ser
            <span>expertas</span> para empezar.
        </p>

        <div className="manifesto-tech">
            &lt;/&gt; curiosity.exe
        </div>

        </section>


      {/* REDES */}

        <section className="about-social">

        <span className="section-label">
            ✦ también estoy por aquí
        </span>

        <h2>
            @chica.rosadita
        </h2>

        <p>
            Ciencia, tecnología, curiosidades y un
            poquito de rosa.
        </p>

        <a
            href="https://www.instagram.com/chica.rosadita"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
        >
            Ver Instagram ↗
        </a>

        </section>

    </main>
    )
}

export default About