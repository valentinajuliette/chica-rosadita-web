import "./OpportunityCard.css"

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
        <h3>{opportunity.title}</h3>

        <p className="opportunity-organization">
            {opportunity.organization}
        </p>

        <p className="opportunity-description">
            {opportunity.description}
        </p>
        </div>

        <div className="opportunity-info">
        <span>◉ {opportunity.modality}</span>
        <span>▣ {opportunity.type}</span>
        </div>

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