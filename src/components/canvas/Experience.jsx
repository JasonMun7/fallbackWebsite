// Import dependencies
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { Text, Html, Environment, useGLTF, Float, PresentationControls, ContactShadows, PivotControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import * as THREE from 'three'

// Import assets
import whoosh from '../../assets/audio/whoosh.mp3'
import typeAudio from '../../assets/audio/type.mp3'

// Import Styles
import "../../styles/iframeWeb.css"

export default function Experience() {
    // State and Refs
    const laptopRef = useRef();
    const { camera } = useThree()
    const [zoomIn, setZoomIn] = useState(false);
    const targetPosition = new THREE.Vector3(0, 0, 2);
    const originalPosition = new THREE.Vector3(-3, 1.5, 4);




    // Audio initialization
    const whooshSound = new Audio(whoosh);
    const typingAudio = new Audio(typeAudio);


    // Debug Panel
    const { perfVisible } = useControls('perfcontrols', { perfVisible: true })
    const { laptopPosition, laptopRotation, screenColor } = useControls('laptop', {
        position: { value: { x: -2, y: 2 }, step: 0.1 },
        rotation: { value: { x: 0, y: 0 }, step: 0.1 },
        screenColor: { value: '#00d9ff' }
    })



    // Load 3D model
    const laptop = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    const hand = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/right-hand-white-webxr-tracking-ready/model.gltf')


    // Audio handling functions
    const playTypingSoundAndAnimate = () => { typingAudio.play(); }
    const playWhooshSound = () => { whooshSound.play(); };

    // Handling Functions
    const zoomInHandler = () => {
        if (!zoomIn) {
            playWhooshSound();
            gsap.to(camera.position, {
                duration: 0.75,
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                ease: "power2.inOut",
                onUpdate: () => camera.lookAt(0, 0.2, 0)
            });
        } else {
            playWhooshSound()
            gsap.to(camera.position, {
                duration: 0.75,
                x: originalPosition.x,
                y: originalPosition.y,
                z: originalPosition.z,
                ease: "power2.inOut",
                onUpdate: () => camera.lookAt(0, 0, 0)
            });
        }
        setZoomIn(!zoomIn);
    }


    return (
        <>
            {/* Environment Setup */}
            <Environment preset="city" />
            {perfVisible && <Perf position="top-left" />}
            <color args={['#3c404e']} attach="background" />

            {/* 3dHand Cursor */}
            {/* <primitive
                object={hand.scene}
                scale={5}
                rotation-x={Math.PI / 2}
                position={[0, 1, 2]}
            >
            </primitive> */}


            {/* Main Controls over Laptop and Text  */}
            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
            >
                <Float rotationIntensity={zoomIn ? 0 : 0.5}>
                    {/* Lighting */}
                    <rectAreaLight
                        width={2.5}
                        height={1.65}
                        intensity={65}
                        color={screenColor}
                        rotation={[-0.1, Math.PI, 0]}
                        position={[0, 0.55, -1.15]}
                    />

                    {/* Laptop Model */}
                    <primitive
                        // onDoubleClick={playTypingSoundAndAnimate}
                        onClick={zoomInHandler}
                        ref={laptopRef}
                        object={laptop.scene}
                        position-y={-1.2}
                        rotation-y={-Math.PI * 0.02}
                    >
                        <Html
                            transform
                            wrapperClass="htmlScreen"
                            distanceFactor={1.17}
                            position={[0, 1.56, -1.4]}
                            rotation-x={-0.256}
                        >
                            <iframe id="iframeContent" src="../../assets/iframeWeb.html" />
                        </Html>
                    </primitive>

                    {/* Text */}
                    {!zoomIn && (
                        <Text
                            font="./bangers-v20-latin-regular.woff"
                            fontSize={1}
                            position={[2, 0.75, 0.75]}
                            rotation-y={-1.25}
                            maxWidth={2}
                        >
                            JASON MUN
                        </Text>
                    )}
                </Float>

            </PresentationControls>

            {/* Shadows */}
            <ContactShadows
                position-y={-1.4}
                opacity={0.4}
                scale={5}
                blur={2.4}
            />
        </>
    );
}