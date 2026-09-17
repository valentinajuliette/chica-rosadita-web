import { useState } from "react"

import Hero from "../components/Hero"
import Filters from "../components/Filters"
import OpportunityCard from "../components/OpportunityCard"

import opportunities from "../data/opportunities"

function Home() {

    const [topic, setTopic] = useState("Todas")
    const [womenOnly, setWomenOnly] = useState(false)

    const filteredOpportunities = opportunities.filter(
    (opportunity) => {

        const matchesTopic =
        topic === "Todas" ||
        opportunity.topic === topic

        const matchesWomen =
        !womenOnly ||
        opportunity.womenOnly

        return matchesTopic && matchesWomen
    }
    )

    return (
    <main>

        <Hero />

        <section
        className="opportunities-section"
        id="oportunidades"
        >

        <div className="opportunities-header">

            <div>

            <span className="section-label">
                ✦ oportunidades gratuitas
            </span>

            <h2>
                Encuentra tu próxima
                <span> oportunidad ♡</span>
            </h2>

            </div>

            <p>
            Cursos, talleres y programas para
            aprender tecnología sin pagar.
            </p>

        </div>


        <Filters
            topic={topic}
            setTopic={setTopic}
            womenOnly={womenOnly}
            setWomenOnly={setWomenOnly}
        />


        <div className="results-header">

            {filteredOpportunities.length === 1
            ? "1 oportunidad encontrada"
            : `${filteredOpportunities.length} oportunidades encontradas`}

        </div>


        <div className="opportunities-grid">

            {filteredOpportunities.map((opportunity) => (

            <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
            />

            ))}

        </div>

        </section>

    </main>
    )
}

export default Home