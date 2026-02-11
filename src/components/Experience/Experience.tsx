import "./Experience.css"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

function Model() {
    const { scene } = useGLTF("/jiku.glb")
    return <primitive object={scene} />
}

export default function Experience() {

    return (
        <div className="experience-container">
            <Canvas camera={{ position: [0, 3, 8] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <Model />
                <OrbitControls />
            </Canvas>
        </div>
    )
}