import { useState } from "react"

import Hero from "../components/Hero"
import Filters from "../components/Filters"
import OpportunityCard from "../components/OpportunityCard"
import opportunities from "../data/opportunities"

function isOpportunityActive(opportunity) {
    if (!opportunity.deadline) {
        return true
    }

    const today = new Date()

    const todayString = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0"),
    ].join("-")

    return opportunity.deadline >= todayString
}

function Home() {
    const [topic, setTopic] = useState("Todas")
    const [womenOnly, setWomenOnly] = useState(false)

    const [visibleCount, setVisibleCount] = useState(21)

    const filteredOpportunities = opportunities.filter(
        (opportunity) => {
            const isActive = isOpportunityActive(opportunity)

            const matchesTopic =
                topic === "Todas" ||
                opportunity.topic === topic

            const matchesWomen =
                !womenOnly ||
                opportunity.womenOnly

            return (
                isActive &&
                matchesTopic &&
                matchesWomen
            )
        }
    )

    const visibleOpportunities =
        filteredOpportunities.slice(0, visibleCount)

    const hasMore =
        visibleCount < filteredOpportunities.length

    function handleTopicChange(newTopic) {
        setTopic(newTopic)
        setVisibleCount(21)
    }

    function handleWomenChange(newValue) {
        setWomenOnly(newValue)
        setVisibleCount(21)
    }

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
                    setTopic={handleTopicChange}
                    womenOnly={womenOnly}
                    setWomenOnly={handleWomenChange}
                />

                <div className="results-header">
                    {filteredOpportunities.length === 1
                        ? "1 oportunidad encontrada"
                        : `${filteredOpportunities.length} oportunidades encontradas`
                    }
                </div>

                {visibleOpportunities.length > 0 ? (
                    <>
                        <div className="opportunities-grid">
                            {visibleOpportunities.map(
                                (opportunity) => (
                                    <OpportunityCard
                                        key={opportunity.id}
                                        opportunity={opportunity}
                                    />
                                )
                            )}
                        </div>

                        {hasMore && (
                            <div className="load-more-wrapper">
                                <button
                                    type="button"
                                    className="load-more-button"
                                    onClick={() =>
                                        setVisibleCount(
                                            visibleCount + 21
                                        )
                                    }
                                >
                                    Ver más oportunidades
                                    <span>↓</span>
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="no-opportunities">
                        <span>♡</span>

                        <h3>
                            No encontramos oportunidades
                        </h3>

                        <p>
                            Prueba cambiando los filtros para
                            encontrar otras oportunidades.
                        </p>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Home