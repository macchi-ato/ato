import "./Carousel.css"

export default function Carousel({ models, selectedId, onSelect }) {
    return (
        <div className="carousel">
            <div className="carousel-container">
            {models.map((model) => (
                <button
                    key={model.id}
                    className={`carousel-item ${selectedId === model.id ? "active" : ""}`}
                    onClick={() => onSelect(model.id)}
                >
                {model.name}
                </button>
            ))}
            </div>
        </div>
    )
}