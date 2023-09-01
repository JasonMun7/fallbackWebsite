import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useGLTF } from '@react-three/drei'

export default function Experience() {
    const { perfVisible } = useControls({
        perfVisible: true
    })



    return <>
        {perfVisible && <Perf position="top-left" />}

        <color args={['#241a1a']} attach="background" />

        <OrbitControls makeDefault />

        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>

    </>
}