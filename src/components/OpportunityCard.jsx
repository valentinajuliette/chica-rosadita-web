import "./OpportunityCard.css"

function formatDeadline(deadline) {

    if (!deadline) {
        return null
    }

    const [year, month, day] = deadline.split("-")

    return `${day}/${month}/${year}`
}

function OpportunityCard({ opportunity }) {

    return (

        <article className="opportunity-card">

            <div className="opportunity-top">

                <span className="opportunity-topic">
                    {opportunity.topic}
                </span>

                {opportunity.womenOnly && (
                    <span className="opportunity-women">
                        ♡ Mujeres
                    </span>
                )}

            </div>

            <div className="opportunity-content">

                <h3>
                    {opportunity.title}
                </h3>

                <p className="opportunity-organization">
                    {opportunity.organization}
                </p>

                <p className="opportunity-description">
                    {opportunity.description}
                </p>

            </div>

            <div className="opportunity-info">

                <span>
                    ◉ {opportunity.modality}
                </span>

                <span>
                    ▣ {opportunity.type}
                </span>

            </div>

            {opportunity.deadline && (
                <p className="opportunity-deadline">
                    ⏳ Hasta el {formatDeadline(opportunity.deadline)}
                </p>
            )}

            <a
                href={opportunity.url}
                className="opportunity-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Saber más
                <span>↗</span>
            </a>

        </article>

    )
}

export default OpportunityCard