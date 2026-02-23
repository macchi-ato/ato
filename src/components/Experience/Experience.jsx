import "./Experience.css"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { models } from "../../data/models.js"
import { useState, useEffect } from "react"

function Model({ path }) {
    const { scene } = useGLTF(path)
    return <primitive object={scene} />
}

function CameraUpdater({ camera: cameraProps }) {
    const { camera } = useThree()

    useEffect(() => {
        if (cameraProps?.position) {
            camera.position.set(...cameraProps.position)
        }
        if (cameraProps?.fov) {
            camera.fov = cameraProps.fov
            camera.updateProjectionMatrix()
        }
    }, [camera, cameraProps])

    return null
}

export default function Experience() {
    const [ currentModel, setCurrentModel ] = useState(models[0])

    const setModel = (model) => {
        setCurrentModel(model)
    }

    return (
        <>
            <div className="experience-container">
                <Canvas camera={{ position: currentModel.camera.position, fov: currentModel.camera.fov }}>
                    <CameraUpdater camera={currentModel.camera} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <Model path={currentModel.path}/>
                    <OrbitControls />
                </Canvas>
            </div>

            <div className="carousel">
                <div className="carousel-container">
                {models.map((model) => (
                    <button
                        key={model.id}
                        className={`carousel-item ${model.id === currentModel.id ? "active" : ""}`}
                        onClick={() => setModel(model)}
                    >
                    {model.name}
                    </button>
                ))}
                </div>
            </div>     
        </>
    )
}