import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Frame from "./Components/Frame";
import "./App.css";

function App() {
  const [frameWidth, setFrameWidth] = useState(5);
  const [frameHeight, setFrameHeight] = useState(7);
  const [horizontalSections, setHorizontalSections] = useState(1);
  const [verticalSections, setVerticalSections] = useState(1);
  const [frameThickness, setFrameThickness] = useState(0.5);
  const [sectionThickness, setSectionThickness] = useState(0.1);

  return (
    <div className="app-container">
      <div className="controls">
        <label>
          Frame Width:
          <input
            type="number"
            value={frameWidth}
            onChange={(e) => setFrameWidth(Number(e.target.value))}
          />
        </label>
        <label>
          Frame Height:
          <input
            type="number"
            value={frameHeight}
            onChange={(e) => setFrameHeight(Number(e.target.value))}
          />
        </label>
        <label>
          Horizontal Sections:
          <input
            type="number"
            value={horizontalSections}
            onChange={(e) => setHorizontalSections(Number(e.target.value))}
          />
        </label>
        <label>
          Vertical Sections:
          <input
            type="number"
            value={verticalSections}
            onChange={(e) => setVerticalSections(Number(e.target.value))}
          />
        </label>
        <label>
          Frame Thickness:
          <input
            type="number"
            value={frameThickness}
            onChange={(e) => setFrameThickness(Number(e.target.value))}
          />
        </label>
        <label>
          Section Thickness:
          <input
            type="number"
            value={sectionThickness}
            onChange={(e) => setSectionThickness(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="canvas-container">
        <Canvas className="canvas" camera={{ position: [10, 10, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            rotateSpeed={1.0}
            zoomSpeed={0.5}
          />
          <Frame
            width={frameWidth}
            height={frameHeight}
            horizontalSections={horizontalSections}
            verticalSections={verticalSections}
            borderThickness={frameThickness}
            sectionThickness={sectionThickness}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
