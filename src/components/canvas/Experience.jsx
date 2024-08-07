// Import dependencies
import {
  Text,
  Html,
  Environment,
  useGLTF,
  Float,
  PresentationControls,
  ContactShadows,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

// Import assets
import typeAudio from "../../assets/audio/type.mp3";
import mouseClick from "../../assets/audio/mouseClick.mp3";
import scroll from "../../assets/audio/scroll.mp3";

// Import Styles
import "../../../public/iframeWeb.css";

export default function Experience() {
  // State and Refs
  const laptopRef = useRef();
  const { camera } = useThree();
  const [zoomIn, setZoomIn] = useState(false);
  const targetCameraPosition = new THREE.Vector3(0, 0, 2);
  const originalCameraPosition = new THREE.Vector3(-3, 1.5, 4);

  // Audio initialization
  const typingAudio = new Audio(typeAudio);
  const mouseClickAudio = new Audio(mouseClick);
  const scrollAudio = new Audio(scroll);

  // Load 3D model
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  // Audio handling functions
  const playTypingSoundAndAnimate = () => {
    typingAudio.play();
  };
  const playMouseClickSound = () => {
    mouseClickAudio.play();
  };
  const playScrollSound = () => {
    scrollAudio.play();
  };

  // Handling Functions
  const zoomInHandler = () => {
    gsap.to(camera.position, {
      duration: 0.75,
      x: targetCameraPosition.x,
      y: targetCameraPosition.y,
      z: targetCameraPosition.z,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(0, 0.15, 0),
    });
    setZoomIn(true);
  };

  const zoomOutHandler = () => {
    gsap.to(camera.position, {
      duration: 0.75,
      x: originalCameraPosition.x,
      y: originalCameraPosition.y,
      z: originalCameraPosition.z,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(0, 0.15, 0),
    });
    setZoomIn(false);
  };

  // Use Effect for the Audio
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data === "iframeClicked") {
        playMouseClickSound();
      } else if (event.data === "iframeScrolled") {
        playScrollSound();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      {/* Environment Setup */}
      <Environment preset="city" />
      {/* <axesHelper args={[5]} /> */}

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
            color={"#00d9ff"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          {/* Laptop Model */}
          <primitive
            onClick={playTypingSoundAndAnimate}
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
              <iframe
                id="iframeContent"
                src="/iframeWeb.html"
                onPointerOver={zoomInHandler}
                onPointerOut={zoomOutHandler}
              />
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
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
