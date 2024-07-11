// Import Dependencies
import "./styles/style.css";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

// Components
import Experience from "./components/canvas/Experience.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Suspense fallback={<LoadingScreen />}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
      >
        <Experience />
      </Canvas>
    </Suspense>
  </>
);
