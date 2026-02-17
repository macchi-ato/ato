import "./App.css"
import { useState } from "react"
import { models } from "./data/models"

// Components
import Experience from "./components/Experience/Experience.jsx"
import Carousel from "./components/Carousel/Carousel.jsx"

function App() {
    const [selectedModelId, setSelectedModelId] = useState(models[0].id)
    const currentModel = models.find(m => m.id === selectedModelId) || models[0]

    return (
        <>
            <Experience modelPath={currentModel.path} />
            <Carousel 
                models={models} 
                selectedId={selectedModelId} 
                onSelect={setSelectedModelId} 
            />
        </>
    )
}

export default App