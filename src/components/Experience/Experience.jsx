import "./Experience.css"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { models } from "../../data/models.js"
import { useState } from "react"

function Model({ path }) {
    const { scene } = useGLTF(path)
    return <primitive object={scene} />
}

export default function Experience() {
    const [ modelPath, setModelPath ] = useState("/jiku.glb")

    const setModel = (modelPath) => {
        setModelPath(modelPath)
    }

    return (
        <>
            <div className="experience-container">
                <Canvas camera={{ position: [0, 3, 8] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <Model path={modelPath}/>
                    <OrbitControls />
                </Canvas>
            </div>

            <div className="carousel">
                <div className="carousel-container">
                {models.map((model) => (
                    <button
                        key={model.id}
                        className={`carousel-item ${model.path === modelPath ? "active" : ""}`}
                        onClick={() => setModel(model.path)}
                    >
                    {model.name}
                    </button>
                ))}
                </div>
            </div>     
        </>
    )
}