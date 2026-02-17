import type { Model } from "../../data/models"
import "./Carousel.css"

interface CarouselProps {
    models: Model[]
    selectedId: string
    onSelect: (id: string) => void
}

export default function Carousel({ models, selectedId, onSelect }: CarouselProps) {
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
