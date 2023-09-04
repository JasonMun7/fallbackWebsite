import './styles/style.css'
import './styles/index.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

// Components
import Experience from './components/canvas/Experience.jsx'
import Cursor from './components/CustomCursor.jsx'
import Environment from './components/canvas/Environment.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        {/* <Cursor /> */}
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-3, 1.5, 4]
            }}
        >
            <Experience />
            <Environment />
        </Canvas>
    </>
)