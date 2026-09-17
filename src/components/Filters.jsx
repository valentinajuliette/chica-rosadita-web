import "./Filters.css"

function Filters({
    topic,
    setTopic,
    womenOnly,
    setWomenOnly,
}) {
    const topics = [
        {
            name: "Todas",
            icon: "✿",
        },
        {
            name: "Programación",
            icon: "💻",
        },
        {
            name: "IA",
            icon: "✦",
        },
        {
            name: "Datos",
            icon: "◌",
        },
        {
            name: "Ciberseguridad",
            icon: "🌐",
        },
        {
            name: "Tecnología",
            icon: "⚡",
        },
    ]

    return (
    <div className="filters">

        <div className="topic-filter">

        <label>Temática</label>

        <div className="topic-chips">

            {topics.map((item) => (
            <button
                key={item.name}
                type="button"
                className={`topic-chip ${
                topic === item.name ? "active" : ""
                }`}
                onClick={() => setTopic(item.name)}
            >
                <span>{item.icon}</span>
                {item.name}
            </button>
            ))}

        </div>

        </div>


        <button
        type="button"
        className={`women-filter ${
            womenOnly ? "active" : ""
        }`}
        onClick={() => setWomenOnly(!womenOnly)}
        >

        <span className="women-heart">
            ♡
        </span>

        <span>
            Solo para mujeres
        </span>

        <span className="toggle">
            <span className="toggle-dot"></span>
        </span>

        </button>

    </div>
    )
}

export default Filters